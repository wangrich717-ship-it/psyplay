// audio.js - Web Audio API sound generation for PsyPlay
'use strict';

const AudioManager = (() => {
  let ctx = null;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctx;
  }

  function resume() {
    const c = getCtx();
    if (c.state === 'suspended') c.resume();
    return c;
  }

  // Stop all audio immediately by closing the AudioContext
  function stopAll() {
    if (ctx) {
      try { ctx.close(); } catch (e) {}
      ctx = null;
    }
  }

  function playTone({ frequency = 440, duration = 1, type = 'sine', volume = 0.28, delay = 0 } = {}) {
    const c = resume();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = type;
    osc.frequency.value = frequency;
    const t0 = c.currentTime + delay;
    gain.gain.setValueAtTime(volume, t0);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.start(t0);
    osc.stop(t0 + duration + 0.05);
  }

  function playMidWave() {
    const c = resume();
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = 'sine';
    osc.frequency.value = 440;
    const t0 = c.currentTime;
    gain.gain.setValueAtTime(0.01, t0);
    gain.gain.linearRampToValueAtTime(0.28, t0 + 2);
    gain.gain.linearRampToValueAtTime(0.01, t0 + 4);
    osc.start(t0);
    osc.stop(t0 + 4.1);
  }

  function playIrregular() {
    let delay = 0;
    const count = 7;
    for (let i = 0; i < count; i++) {
      const interval = Math.random() * 0.35 + 0.08;
      playTone({ frequency: 200, duration: 0.1, type: 'square', volume: 0.22, delay });
      delay += interval;
    }
  }

  function playWhiteNoise(duration = 2) {
    const c = resume();
    const sr = c.sampleRate;
    const buf = c.createBuffer(1, sr * duration, sr);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.25;
    const src = c.createBufferSource();
    src.buffer = buf;
    const filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 350;
    filter.Q.value = 0.5;
    const gain = c.createGain();
    gain.gain.setValueAtTime(0.3, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(c.destination);
    src.start();
    src.stop(c.currentTime + duration);
  }

  function playEchoWhisper() {
    const c = resume();
    const osc = c.createOscillator();
    const gain = c.createGain();
    const delay = c.createDelay(1.0);
    delay.delayTime.value = 0.35;
    const feedback = c.createGain();
    feedback.gain.value = 0.35;
    osc.connect(gain);
    gain.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    gain.connect(c.destination);
    delay.connect(c.destination);
    osc.type = 'sine';
    osc.frequency.value = 180; // raised from 80Hz for audibility on phone speakers
    gain.gain.setValueAtTime(0.22, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 3);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + 3.5);
  }

  // Heartbeat: two-part lub-dub at ~60 BPM, 4 beats
  // Uses 160Hz / 130Hz — audible on phone speakers (70/55Hz were too low)
  function playHeartbeat() {
    for (let i = 0; i < 4; i++) {
      const t = i * 1.0;
      playTone({ frequency: 160, duration: 0.16, type: 'sine', volume: 0.50, delay: t });
      playTone({ frequency: 130, duration: 0.13, type: 'sine', volume: 0.40, delay: t + 0.22 });
    }
  }

  // Named sounds used in quizzes
  const SOUNDS = {
    // Test 3: Emotion Tone
    // 持续中频音 — more audible mid-range drone (was 100/150Hz; raised for phone speaker audibility)
    lowHum: () => {
      playTone({ frequency: 280, duration: 4, type: 'sine', volume: 0.32 });
      playTone({ frequency: 350, duration: 4, type: 'sine', volume: 0.18 });
    },
    highBeep: () => {
      [0, 0.55, 1.1].forEach(d => playTone({ frequency: 1100, duration: 0.45, type: 'triangle', volume: 0.32, delay: d }));
    },
    midWave: () => playMidWave(),
    irregular: () => playIrregular(),
    harmony: () => {
      playTone({ frequency: 264, duration: 3, type: 'sine', volume: 0.25 });
      playTone({ frequency: 330, duration: 3, type: 'sine', volume: 0.22 });
      playTone({ frequency: 396, duration: 3, type: 'sine', volume: 0.15 });
    },
    // 心跳律动 — replaces silence; rhythmic emotional resonance
    heartbeat: () => playHeartbeat(),

    // Test 9: Inner Voice
    echoWhisper: () => playEchoWhisper(),
    sharpAlert: () => {
      playTone({ frequency: 880,  duration: 0.2,  type: 'square',   volume: 0.30, delay: 0 });
      playTone({ frequency: 1100, duration: 0.35, type: 'triangle', volume: 0.28, delay: 0.25 });
      playTone({ frequency: 880,  duration: 0.2,  type: 'square',   volume: 0.22, delay: 0.65 });
    },
    calmSteady: () => playTone({ frequency: 220, duration: 3.5, type: 'sine', volume: 0.28 }),
    staticNoise: () => playWhiteNoise(2.5),
  };

  return { SOUNDS, resume, stopAll };
})();
