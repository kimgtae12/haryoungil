import React from "react";

import "./App.css";
import Snackbar from "component/organisms/snackbar/Snackbar";
import { RouterProvider } from "react-router-dom";
import { MasterRouter } from "router";
import { useViewportHeight } from "hook/useViewportHeight";
import "swiper/css";
import "swiper/css/thumbs";

interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Kakao: any;
}

window.Kakao?.init("50de1101b103c63435a0c624b084d687");
window.Kakao?.isInitialized();

function App() {
  useViewportHeight();

  React.useEffect(() => {
    let touchTimer: NodeJS.Timeout | null = null;
    let touchStarted = false;

    // 핀치 줌 방지
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // 더블탭 줌 방지
    let lastTouchEnd = 0;
    const preventDoubleTapZoom = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    };

    // 롱터치 방지
    const handleTouchStart = (e: TouchEvent) => {
      touchStarted = true;
      // 500ms 이상 누르면 롱터치로 간주되므로 미리 방지
      touchTimer = setTimeout(() => {
        if (touchStarted) {
          e.preventDefault();
        }
      }, 100);
    };

    const handleTouchMove = (e: TouchEvent) => {
      // 움직이면 롱터치 취소
      if (touchTimer) {
        clearTimeout(touchTimer);
        touchTimer = null;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchStarted = false;
      if (touchTimer) {
        clearTimeout(touchTimer);
        touchTimer = null;
      }
      preventDoubleTapZoom(e);
    };

    const preventContextMenu = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    document.addEventListener("touchstart", preventZoom, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd, { passive: false });
    // document.addEventListener("contextmenu", preventContextMenu);

    return () => {
      if (touchTimer) clearTimeout(touchTimer);
      document.removeEventListener("touchstart", preventZoom);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <RouterProvider router={MasterRouter} />
      <Snackbar />
    </div>
  );
}

export default App;
