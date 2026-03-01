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
    osc.frequency.value = 80;
    gain.gain.setValueAtTime(0.22, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 3);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + 3.5);
  }

  // Named sounds used in quizzes
  const SOUNDS = {
    // Test 3: Emotion Tone
    // 低沉嗡鸣 - 双频叠加确保在各种设备上可听
    lowHum: () => {
      playTone({ frequency: 100, duration: 3.5, type: 'sine', volume: 0.30 });
      playTone({ frequency: 150, duration: 3.5, type: 'sine', volume: 0.18 });
    },
    // 高频叮声 - 三次清脆提示
    highBeep: () => {
      [0, 0.55, 1.1].forEach(d => playTone({ frequency: 1100, duration: 0.45, type: 'triangle', volume: 0.32, delay: d }));
    },
    midWave: () => playMidWave(),
    irregular: () => playIrregular(),
    // 和谐双音 - 三度和弦 + 五度和弦交替
    harmony: () => {
      playTone({ frequency: 264, duration: 3, type: 'sine', volume: 0.25 });
      playTone({ frequency: 330, duration: 3, type: 'sine', volume: 0.22 });
      playTone({ frequency: 396, duration: 3, type: 'sine', volume: 0.15 });
    },
    // 静默体验 - 极弱的底噪，让按钮有响应感
    silence: () => {
      const c = resume();
      const osc = c.createOscillator();
      const g = c.createGain();
      osc.connect(g);
      g.connect(c.destination);
      osc.frequency.value = 40;
      g.gain.setValueAtTime(0.015, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + 2);
      osc.start(c.currentTime);
      osc.stop(c.currentTime + 2.1);
    },

    // Test 9: Inner Voice
    echoWhisper: () => playEchoWhisper(),
    // 尖锐提示音 - 更长、更有警告感
    sharpAlert: () => {
      playTone({ frequency: 880, duration: 0.2, type: 'square', volume: 0.30, delay: 0 });
      playTone({ frequency: 1100, duration: 0.35, type: 'triangle', volume: 0.28, delay: 0.25 });
      playTone({ frequency: 880, duration: 0.2, type: 'square', volume: 0.22, delay: 0.65 });
    },
    calmSteady: () => playTone({ frequency: 220, duration: 3.5, type: 'sine', volume: 0.28 }),
    staticNoise: () => playWhiteNoise(2.5),
  };

  return { SOUNDS, resume, playTone };
})();
