export const WINDOW_RESIZED = "WINDOW_RESIZED";

export default function screenResize(windowWidth, windowHeight, isMobile) {
  return {
    type: WINDOW_RESIZED,
    data: {
      windowWidth,
      windowHeight,
      isMobile,
    },
  };
}
