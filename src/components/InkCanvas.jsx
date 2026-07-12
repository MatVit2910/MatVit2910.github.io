import React, { useEffect, useRef } from 'react';

const InkCanvas = ({ isHome }) => {
  const canvasRef = useRef(null);
  const hintRef = useRef(null);
  const isHomeRef = useRef(isHome);

  useEffect(() => {
    isHomeRef.current = isHome;
  }, [isHome]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const initialBaseX = isHomeRef.current ? width * 0.75 : width * 0.5;
    let mouseX = initialBaseX;
    let mouseY = height / 2;

    class InkDrop {
      constructor(x, y, swipeDx = 0, swipeDy = 0) {
        this.x = x;
        this.y = y;

        const speed = Math.random() * 15 + 8;
        let angle;
        if (swipeDx === 0 && swipeDy === 0) {
          angle = Math.random() * Math.PI * 2;
        } else {
          angle = Math.atan2(swipeDy, swipeDx) + (Math.random() - 0.5) * 1.5;
        }

        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.length = Math.random() * 25 + 10;
        this.thickness = Math.random() * 4 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.decay = Math.random() * 0.03 + 0.01;

        this.type = Math.random() < 0.7 ? 0 : 1;

        this.blobPoints = [];
        if (this.type === 1) {
          const numPoints = Math.floor(Math.random() * 6) + 4;
          for (let i = 0; i < numPoints; i++) {
            const a = (i / numPoints) * Math.PI * 2;
            const r = Math.random() * 12 + 3;
            this.blobPoints.push({ x: Math.cos(a) * r, y: Math.sin(a) * r });
          }
        }
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.85;
        this.vy *= 0.85;
        this.opacity -= this.decay;
      }

      draw(c) {
        if (this.opacity <= 0) return;
        c.save();
        c.translate(this.x, this.y);
        c.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;

        if (this.type === 0) {
          const angle = Math.atan2(this.vy, this.vx);
          c.rotate(angle);
          c.beginPath();
          c.ellipse(0, 0, this.length, this.thickness, 0, 0, Math.PI * 2);
          c.fill();
        } else {
          c.beginPath();
          this.blobPoints.forEach((p, i) => {
            if (i === 0) c.moveTo(p.x, p.y);
            else c.lineTo(p.x, p.y);
          });
          c.closePath();
          c.fill();
        }
        c.restore();
      }
    }

    let particles = [];
    let time = 0;

    class InkCat {
      constructor() {
        this.x = initialBaseX;
        this.y = height / 2;
        this.pawX = this.x;
        this.pawY = this.y + 80;
        this.isSwiping = false;
        this.swipeProgress = 0;
        this.targetX = 0;
        this.targetY = 0;
      }

      swipe(tx, ty) {
        this.isSwiping = true;
        this.swipeProgress = 0;
        this.targetX = tx;
        this.targetY = ty;
      }

      update() {
        const baseX = isHomeRef.current ? width * 0.75 : width * 0.5;
        const targetBodyX = baseX + (mouseX - baseX) * 0.04;
        const targetBodyY = height / 2 + (mouseY - height / 2) * 0.04;
        this.x += (targetBodyX - this.x) * 0.05;
        this.y += (targetBodyY - this.y) * 0.05;

        if (this.isSwiping) {
          this.swipeProgress += 0.07;
          if (this.swipeProgress >= 1) {
            this.isSwiping = false;
            const dx = this.targetX - this.pawX;
            const dy = this.targetY - this.pawY;
            for (let i = 0; i < 25; i++) {
              particles.push(new InkDrop(this.targetX, this.targetY, dx, dy));
            }
          } else {
            const t = this.swipeProgress;
            const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            this.pawX = this.x + (this.targetX - this.x) * ease;
            this.pawY = this.y + (this.targetY - this.y) * ease;
          }
        } else {
          this.pawX += (this.x - 55 - this.pawX) * 0.1;
          this.pawY += (this.y + 80 - this.pawY) * 0.1;
        }
      }

      draw(c) {
        c.save();
        c.fillStyle = '#ffffff';
        c.strokeStyle = '#ffffff';

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const angle = Math.atan2(dy, dx);
        const dist = Math.min(Math.hypot(dx, dy), 12);

        c.beginPath();
        c.ellipse(this.x, this.y + 90, 65, 105, 0, 0, Math.PI * 2);
        c.fill();

        c.beginPath();
        c.moveTo(this.x, this.y + 170);
        const tailWave = Math.sin(time * 0.03) * 60;
        c.quadraticCurveTo(this.x + 95, this.y + 210, this.x + 65 + tailWave, this.y + 80);
        c.lineWidth = 20;
        c.lineCap = 'round';
        c.stroke();

        c.beginPath();
        c.arc(this.x, this.y, 60, 0, Math.PI * 2);
        c.fill();
        // left ear
        c.beginPath();
        c.moveTo(this.x - 22, this.y - 55);
        c.quadraticCurveTo(this.x - 30, this.y - 70, this.x - 45, this.y - 75);
        c.quadraticCurveTo(this.x - 55, this.y - 60, this.x - 50, this.y - 33);
        c.fill();

        // right ear
        c.beginPath();
        c.moveTo(this.x + 22, this.y - 55);
        c.quadraticCurveTo(this.x + 30, this.y - 70, this.x + 45, this.y - 75);
        c.quadraticCurveTo(this.x + 55, this.y - 60, this.x + 50, this.y - 33);
        c.fill();

        c.lineWidth = 2;
        c.strokeStyle = '#ffffff';
        c.beginPath();
        c.moveTo(this.x - 55, this.y + 5); c.lineTo(this.x - 90, this.y);
        c.moveTo(this.x - 55, this.y + 15); c.lineTo(this.x - 88, this.y + 20);
        c.moveTo(this.x + 55, this.y + 5); c.lineTo(this.x + 90, this.y);
        c.moveTo(this.x + 55, this.y + 15); c.lineTo(this.x + 88, this.y + 20);
        c.stroke();

        c.fillStyle = '#050505';
        c.beginPath();
        c.arc(this.x - 24 + Math.cos(angle) * dist * 0.12, this.y - 5 + Math.sin(angle) * dist * 0.12, 12, 0, Math.PI * 2);
        c.fill();
        c.beginPath();
        c.arc(this.x + 24 + Math.cos(angle) * dist * 0.12, this.y - 5 + Math.sin(angle) * dist * 0.12, 12, 0, Math.PI * 2);
        c.fill();

        c.fillStyle = '#ffffff';
        c.beginPath();
        c.arc(this.x - 24 + Math.cos(angle) * dist * 0.5, this.y - 5 + Math.sin(angle) * dist * 0.5, 4, 0, Math.PI * 2);
        c.fill();
        c.beginPath();
        c.arc(this.x + 24 + Math.cos(angle) * dist * 0.5, this.y - 5 + Math.sin(angle) * dist * 0.5, 4, 0, Math.PI * 2);
        c.fill();

        // Paw
        c.fillStyle = '#ffffff';
        c.strokeStyle = '#050505';
        c.lineWidth = 4;

        c.beginPath();
        c.arc(this.pawX, this.pawY, 24, 0, Math.PI * 2);
        c.fill();
        c.stroke();

        c.restore();
      }
    }

    const cat = new InkCat();

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleClick = (e) => {
      cat.swipe(e.clientX, e.clientY);
      if (hintRef.current) {
        hintRef.current.style.display = 'none';
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cat.x = isHomeRef.current ? width * 0.75 : width * 0.5;
      cat.y = height / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      cat.update();
      cat.draw(ctx);

      particles = particles.filter(p => p.opacity > 0);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: isHome ? 'auto' : 'none',
          opacity: isHome ? 0.9 : 0.08,
          transition: 'opacity 0.8s ease'
        }}
      />
      {isHome && (
        <div ref={hintRef} className="hint-text" style={{
          position: 'fixed',
          bottom: '15%',
          right: '25%',
          transform: 'translateX(50%)',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.9rem',
          pointerEvents: 'none',
          zIndex: 10
        }}>
          [ Click anywhere to interact ]
        </div>
      )}
    </>
  );
};

export default InkCanvas;
