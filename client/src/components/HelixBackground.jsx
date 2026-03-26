import React, { useEffect, useRef } from 'react';
import '../styles/HelixBackground.css';

const HelixBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let tick = 0;
    let mouseY = 0;
    let animationFrameId;

    const WORDS = [
      'build', 'create', 'dream', 'ship', 'launch', 'grow',
      'learn', 'iterate', 'craft', 'design', 'solve', 'think',
      'make', 'explore', 'push', 'rise', 'focus', 'lead',
      'inspire', 'imagine', 'execute', 'deliver', 'improve', 'persist'
    ];

    const N = 32;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resize();
    const resizeListener = () => resize();
    window.addEventListener('resize', resizeListener);

    const mouseMoveListener = (e) => {
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener('mousemove', mouseMoveListener);

    function draw() {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      const cx = W / 2;
      const cy = H / 2;
      const amp = W * 0.28;
      const ht = H * 0.88;
      const top = cy - ht / 2;
      const spd = 0.018 + mouseY * 0.008;

      const s1 = [];
      const s2 = [];

      for (let i = 0; i < N; i++) {
        const t = i / (N - 1);
        const y = top + t * ht;
        const ph = t * Math.PI * 5 + tick * spd;
        const x1 = cx + Math.sin(ph) * amp;
        const x2 = cx + Math.sin(ph + Math.PI) * amp;
        const d1 = (Math.sin(ph) + 1) / 2;
        const d2 = (Math.sin(ph + Math.PI) + 1) / 2;
        s1.push({ x: x1, y, d: d1, w: WORDS[i % WORDS.length] });
        s2.push({ x: x2, y, d: d2, w: WORDS[(i + 8) % WORDS.length] });
      }

      /* backbones */
      function drawStrand(pts, r, g, b) {
        for (let i = 0; i < pts.length - 1; i++) {
          ctx.strokeStyle = `rgba(${r},${g},${b},${pts[i].d * 0.55 + 0.12})`;
          ctx.lineWidth = 1 + pts[i].d * 1.6;
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
          ctx.stroke();
        }
      }

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      
      if (isDark) {
        drawStrand(s1, 26, 86, 219);
        drawStrand(s2, 59, 130, 246);
      } else {
        drawStrand(s1, 37, 99, 235);
        drawStrand(s2, 59, 130, 246);
      }

      /* rungs */
      for (let i = 0; i < N; i += 3) {
        const ph = (i / (N - 1)) * Math.PI * 5 + tick * spd;
        const baseColor = isDark ? '26,86,219' : '37,99,235';
        ctx.strokeStyle = `rgba(${baseColor},${Math.abs(Math.sin(ph)) * 0.18 + 0.04})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(s1[i].x, s1[i].y);
        ctx.lineTo(s2[i].x, s2[i].y);
        ctx.stroke();
      }

      /* nodes + labels */
      function drawNodes(pts, r, g, b) {
        pts.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2 + p.d * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r},${g},${b},${0.25 + p.d * 0.55})`;
          ctx.fill();

          if (p.d > 0.18) {
            const fs = Math.round(10 + p.d * 5);
            ctx.font = `${p.d > 0.6 ? 500 : 400} ${fs}px 'DM Sans',sans-serif`;
            ctx.fillStyle = `rgba(${r},${g},${b},${0.18 + p.d * 0.72})`;
            ctx.textAlign = 'center';
            ctx.fillText(p.w, p.x, p.y - fs * 0.55);
          }
        });
      }

      if (isDark) {
        drawNodes(s1, 26, 86, 219);
        drawNodes(s2, 59, 130, 246);
      } else {
        drawNodes(s1, 37, 99, 235);
        drawNodes(s2, 59, 130, 246);
      }

      tick++;
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resizeListener);
      window.removeEventListener('mousemove', mouseMoveListener);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="helix-background-container">
      <canvas
        ref={canvasRef}
        className="helix-canvas"
      />
    </div>
  );
};

export default HelixBackground;
