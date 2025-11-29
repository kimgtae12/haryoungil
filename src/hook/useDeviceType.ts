import { useEffect, useState } from "react";

//디바이스 상태 체크

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const width = window.innerWidth;

        if (width < 1024) {
          setDeviceType("mobile");
        } else {
          setDeviceType("pc");
        }
      };

      // 초기 화면 크기 설정
      handleResize();

      // 화면 크기 변경 시마다 handleResize 실행
      window.addEventListener("resize", handleResize);

      // 클린업
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return deviceType;
};

export default useDeviceType;
