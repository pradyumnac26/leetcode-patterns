type ScrollChainOptions = {
  feed: HTMLElement;
  scrollEl: HTMLElement;
};

export function attachScrollChain({
  feed,
  scrollEl,
}: ScrollChainOptions): () => void {
  let lastY = 0;

  const onTouchStart = (event: TouchEvent) => {
    lastY = event.touches[0]?.clientY ?? 0;
  };

  const onTouchMove = (event: TouchEvent) => {
    const y = event.touches[0]?.clientY ?? lastY;
    const delta = y - lastY;
    lastY = y;

    if (delta === 0) return;

    const atTop = scrollEl.scrollTop <= 0;
    const atBottom =
      scrollEl.scrollTop + scrollEl.clientHeight >= scrollEl.scrollHeight - 2;

    const scrollingUp = delta > 0;
    const scrollingDown = delta < 0;

    const shouldChain =
      (scrollingUp && atTop) || (scrollingDown && atBottom);

    if (!shouldChain) {
      return;
    }

    feed.scrollTop -= delta;
  };

  const onTouchEnd = () => {};

  scrollEl.addEventListener("touchstart", onTouchStart, { passive: true });
  scrollEl.addEventListener("touchmove", onTouchMove, { passive: true });
  scrollEl.addEventListener("touchend", onTouchEnd, { passive: true });
  scrollEl.addEventListener("touchcancel", onTouchEnd, { passive: true });

  return () => {
    scrollEl.removeEventListener("touchstart", onTouchStart);
    scrollEl.removeEventListener("touchmove", onTouchMove);
    scrollEl.removeEventListener("touchend", onTouchEnd);
    scrollEl.removeEventListener("touchcancel", onTouchEnd);
  };
};
