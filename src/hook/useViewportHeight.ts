import React from "react";

/**
 * 100vh height 고정
 */
export const useViewportHeight = () => {
  React.useEffect(() => {
    const setVh = () => {
      // 초기 로드 시에만 vh 값을 고정
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();

    // orientationchange만 등록 (가로/세로 전환 시에만 재계산)
    window.addEventListener("orientationchange", () => {
      setTimeout(setVh, 100); // orientation 변경 후 약간의 딜레이
    });

    return () => {
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);
};
