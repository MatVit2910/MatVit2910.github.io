import { useEffect, useRef, useState } from 'react';

const InkCanvas = ({ isHome }) => {
  const canvasRef = useRef(null);
  const hintRef = useRef(null);
  const isHomeRef = useRef(isHome);
  const [hasClicked, setHasClicked] = useState(false);

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
    
    const getBaseX = () => isHomeRef.current ? (width < 768 ? width * 0.5 : width * 0.75) : width * 0.5;
    const getBaseY = () => isHomeRef.current ? (width < 768 ? height - 230 : height / 2) : height / 2;

    const initialBaseX = getBaseX();
    let mouseX = initialBaseX;
    let mouseY = getBaseY();

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
        const baseX = getBaseX();
        const baseY = getBaseY();
        const targetBodyX = baseX + (mouseX - baseX) * 0.04;
        const targetBodyY = baseY + (mouseY - baseY) * 0.04;
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

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    /** Burst the hint text with an ink splatter animation */
    const burstHintText = () => {
      if (!hintRef.current) return;
      const innerText = hintRef.current.querySelector('.hint-inner');
      if (!innerText || innerText.classList.contains('droplet-burst-animation')) return;

      innerText.classList.add('droplet-burst-animation');
      setTimeout(() => setHasClicked(true), 350);
      
      const yOffset = width < 768 ? 200 : height * 0.35;
      const textY = cat.y + yOffset;
      for (let i = 0; i < 14; i++) {
        const drop = new InkDrop(cat.x, textY, 0, 0);
        drop.type = 0;
        drop.length = Math.random() * 4 + 2;
        drop.thickness = Math.random() * 1 + 0.5;
        drop.opacity = 1;
        drop.vx *= 1.8;
        drop.vy *= 1.8;
        drop.decay = Math.random() * 0.1 + 0.05;
        particles.push(drop);
      }
    };

    const handleClick = (e) => {
      cat.swipe(e.clientX, e.clientY);
      burstHintText();
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        cat.swipe(e.touches[0].clientX, e.touches[0].clientY);
        burstHintText();
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cat.x = getBaseX();
      cat.y = getBaseY();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
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
      
      if (hintRef.current) {
        const yOffset = width < 768 ? 200 : height * 0.35;
        hintRef.current.style.left = `${cat.x}px`;
        hintRef.current.style.top = `${cat.y + yOffset}px`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouchStart);
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
      {!hasClicked && isHome && (
        <div ref={hintRef} style={{
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          <div className="hint-inner hint-text" style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.8rem, 2vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>
            [ Click anywhere to interact ]
          </div>
        </div>
      )}
    </>
  );
};

export default InkCanvas;
