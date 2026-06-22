import { useEffect, useRef } from 'react';

function useParallax({ speed = 0.12, maxOffset = 70, scale = 1.06 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrame = null;

    const clamp = (value) => Math.min(maxOffset, Math.max(-maxOffset, value));

    const update = () => {
      animationFrame = null;

      if (reducedMotionQuery.matches) {
        node.style.transform = `translate3d(0, 0, 0) scale(${scale})`;
        return;
      }

      const container = node.parentElement ?? node;
      const rect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = clamp((viewportCenter - elementCenter) * speed);

      node.style.transform = `translate3d(0, ${offset}px, 0) scale(${scale})`;
    };

    const requestUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    reducedMotionQuery.addEventListener('change', requestUpdate);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      reducedMotionQuery.removeEventListener('change', requestUpdate);
      node.style.transform = '';
    };
  }, [maxOffset, scale, speed]);

  return ref;
}

export default useParallax;
