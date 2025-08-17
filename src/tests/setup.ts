// mocks สำหรับ window.scrollTo
Object.defineProperty(window, "scrollTo", {
  value: () => {},
  writable: true,
});

// mocks สำหรับ window.matchMedia
Object.defineProperty(window, "matchMedia", {
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
  writable: true,
});
import "@testing-library/jest-dom";
