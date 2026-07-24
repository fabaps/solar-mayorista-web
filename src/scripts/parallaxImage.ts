const initParallax = () => {
  const elements = document.querySelectorAll<HTMLElement>(
    ".effect-parallax-image",
  );

  if (!elements.length) return;

  let ticking = false;

  const update = () => {
    const y = window.scrollY;

    elements.forEach((el) => {
      const speed = Number(el.dataset.speed ?? 0.3);
      el.style.transform = `translateY(${y * speed}px)`;
    });

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true },
  );
};

if (typeof window !== "undefined") {
  initParallax();
}
