/**
 * BUSCADORA ASTRAL - SISTEMA DE CONSTELAÇÕES & POEIRA CÓSMICA
 * Renderização leve em HTML5 Canvas para atmosfera imersiva e sutil.
 */

(function() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 65; // Equilibrado para alta performance

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  // Cores inspiradas na paleta da cliente (Dourado, Coral, Violeta, Branco)
  const colors = [
    'rgba(229, 195, 101, ', // Dourado
    'rgba(255, 111, 89, ',  // Coral
    'rgba(192, 132, 252, ', // Violeta suave
    'rgba(255, 255, 255, '  // Branco puro
  ];

  class Star {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 1.8 + 0.4;
      this.baseAlpha = Math.random() * 0.5 + 0.2;
      this.alpha = this.baseAlpha;
      this.speedX = (Math.random() - 0.5) * 0.25;
      this.speedY = (Math.random() - 0.5) * 0.25;
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
      this.pulseCounter = Math.random() * Math.PI;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around edges
      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      // Suave pulsar de brilho
      this.pulseCounter += this.pulseSpeed;
      this.alpha = this.baseAlpha + Math.sin(this.pulseCounter) * 0.25;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.colorBase + Math.max(0, Math.min(1, this.alpha)) + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Star());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Desenhar linhas finas de constelação entre estrelas próximas
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(229, 195, 101, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
