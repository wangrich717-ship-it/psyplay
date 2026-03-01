// canvas.js - Canvas visualizations for PsyPlay
'use strict';

const CanvasManager = (() => {
  const PURPLE = '#7C3AED';
  const PURPLE_LIGHT = 'rgba(124,58,237,0.18)';
  const PURPLE_GRID  = 'rgba(124,58,237,0.12)';

  // ── Radar chart for Test 7 (Self-care) ──────────────────────────────────────
  function drawRadar(canvasId, scores, labels, maxVal = 6) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) / 2 - 52;
    const n = scores.length;
    const step = (Math.PI * 2) / n;

    ctx.clearRect(0, 0, W, H);

    // Grid rings
    for (let lvl = 1; lvl <= 5; lvl++) {
      const r = (R * lvl) / 5;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const a = i * step - Math.PI / 2;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = PURPLE_GRID;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Axis lines
    for (let i = 0; i < n; i++) {
      const a = i * step - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + R * Math.cos(a), cy + R * Math.sin(a));
      ctx.strokeStyle = PURPLE_GRID;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Data polygon
    ctx.beginPath();
    scores.forEach((val, i) => {
      const a = i * step - Math.PI / 2;
      const r = (R * Math.min(val, maxVal)) / maxVal;
      const x = cx + r * Math.cos(a);
      const y = cy + r * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = PURPLE_LIGHT;
    ctx.fill();
    ctx.strokeStyle = PURPLE;
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Dots
    scores.forEach((val, i) => {
      const a = i * step - Math.PI / 2;
      const r = (R * Math.min(val, maxVal)) / maxVal;
      ctx.beginPath();
      ctx.arc(cx + r * Math.cos(a), cy + r * Math.sin(a), 5, 0, Math.PI * 2);
      ctx.fillStyle = PURPLE;
      ctx.fill();
    });

    // Labels
    ctx.font = '13px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillStyle = '#374151';
    labels.forEach((lbl, i) => {
      const a = i * step - Math.PI / 2;
      const r = R + 32;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(lbl, cx + r * Math.cos(a), cy + r * Math.sin(a));
    });
  }

  // ── Relationship map for Test 10 ─────────────────────────────────────────────
  const MAP_CONFIGS = {
    secure: [
      { label: '伴侣', r: 65,  a: 45  },
      { label: '好友', r: 80,  a: 140 },
      { label: '家人', r: 70,  a: 250 },
      { label: '同事', r: 130, a: 190 },
      { label: '泛友', r: 158, a: 320 },
    ],
    anxious: [
      { label: '伴侣', r: 45,  a: 55  },
      { label: '好友', r: 52,  a: 150 },
      { label: '家人', r: 55,  a: 255 },
      { label: '同事', r: 165, a: 195 },
      { label: '泛友', r: 178, a: 340 },
    ],
    avoidant: [
      { label: '伴侣', r: 148, a: 55  },
      { label: '好友', r: 158, a: 148 },
      { label: '家人', r: 142, a: 250 },
      { label: '同事', r: 168, a: 198 },
      { label: '泛友', r: 180, a: 338 },
    ],
    disorganized: [
      { label: '伴侣', r: 72,  a: 30  },
      { label: '好友', r: 138, a: 105 },
      { label: '家人', r: 90,  a: 205 },
      { label: '同事', r: 60,  a: 278 },
      { label: '泛友', r: 158, a: 348 },
    ],
  };

  function drawRelationshipMap(canvasId, attachmentType) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;

    ctx.clearRect(0, 0, W, H);

    // Concentric circles (rings)
    [45, 95, 145, 192].forEach((r, i) => {
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(124,58,237,${0.28 - i * 0.05})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Self node
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fillStyle = PURPLE;
    ctx.fill();
    ctx.font = 'bold 13px "PingFang SC", sans-serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('我', cx, cy);

    // Relationship nodes
    const nodes = MAP_CONFIGS[attachmentType] || MAP_CONFIGS.secure;
    nodes.forEach(({ label, r, a }) => {
      const rad = (a * Math.PI) / 180;
      const nx = cx + r * Math.cos(rad);
      const ny = cy + r * Math.sin(rad);

      // Connecting line
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(nx, ny);
      ctx.strokeStyle = 'rgba(124,58,237,0.25)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Node
      ctx.beginPath();
      ctx.arc(nx, ny, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(124,58,237,0.12)';
      ctx.fill();
      ctx.strokeStyle = PURPLE;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.font = '12px "PingFang SC", sans-serif';
      ctx.fillStyle = '#374151';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, nx, ny);
    });
  }

  return { drawRadar, drawRelationshipMap };
})();
