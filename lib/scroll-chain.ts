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

    if ((scrollingUp && atTop) || (scrollingDown && atBottom)) {
      feed.scrollTop -= delta;
    }
  };

  scrollEl.addEventListener("touchstart", onTouchStart, { passive: true });
  scrollEl.addEventListener("touchmove", onTouchMove, { passive: true });

  return () => {
    scrollEl.removeEventListener("touchstart", onTouchStart);
    scrollEl.removeEventListener("touchmove", onTouchMove);
  };
}
