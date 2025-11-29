export const maxFileSize = 4 * 1024 * 1024;

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더함
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

//현재 날짜 구하기 yyyy-mm-dd
export const getToday = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = ("0" + (1 + date.getMonth())).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  return year + "-" + month + "-" + day;
};

//년도 리스트 뽑기
export const renderYearOptions = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let i = currentYear - 100; i <= currentYear; i++) {
    years.push(String(i));
  }
  return years.reverse();
};

//월 리스트 뽑기
export const renderMonthOptions = () => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(String(i));
  }
  return months;
};

//날짜 리스트 뽑기
export const renderDayOptions = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(String(i));
  }
  return days;
};

export const idCheck = (id: string) => {
  //아이디 유효성 검사
  const emailReg =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (id === "") {
    return {
      result: false,
      msg: "아이디를 입력해주세요.",
    };
  } else if (!emailReg.test(id)) {
    return {
      result: false,
      msg: "올바르지 않은 이메일입니다.",
    };
  } else {
    return {
      result: true,
      msg: "",
    };
  }
};

export const pwCheck = (pw: string) => {
  //비밀번호 유효성 검사 (6~20자리 특수문자 포함)
  const passwordReg =
    /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{6,20}$/;
  if (pw === "") {
    return {
      result: false,
      msg: "비밀번호를 입력해주세요.",
    };
  } else if (!passwordReg.test(pw)) {
    return {
      result: false,
      msg: "영문, 숫자, 특수문자를 조합하여 입력해주세요. (6~20자)",
    };
  } else {
    return {
      result: true,
      msg: "사용가능한 비밀번호 입니다.",
    };
  }
};

export const pwCheckRe = (pw: string, pw_re: string) => {
  //비밀번호 재입력 유효성 검사
  if (pw_re === "") {
    return {
      result: false,
      msg: "비밀번호를 한번 더 입력해주세요.",
    };
  } else if (pw !== pw_re) {
    return {
      result: false,
      msg: "비밀번호가 일치하지 않습니다",
    };
  } else {
    return {
      result: true,
      msg: "비밀번호가 일치합니다.",
    };
  }
};

export const phoneCheck = (phone: string) => {
  //휴대폰 유효성 검사(-제외)
  const phoneRule = /^(01[0]{1})[0-9]{3,4}[0-9]{4}$/;

  if (phone === "") {
    return {
      result: false,
      msg: "휴대폰번호를 입력해주세요.",
    };
  } else if (!phoneRule.test(phone)) {
    return {
      result: false,
      msg: "올바르지 않은 휴대폰 번호입니다.",
    };
  } else {
    return {
      result: true,
      msg: "사용가능한 휴대폰번호 입니다.",
    };
  }
};

export const phoneFrontCheck = (phone: string) => {
  const phoneNumberRegex = /^(010|011|017|016|018|019)/;

  if (phone.match(phoneNumberRegex)) {
    return {
      success: true,
      msg: "유효한 휴대폰 번호입니다.",
    };
  } else {
    return {
      success: false,
      msg: "유효하지 않은 휴대폰 번호입니다.",
    };
  }
};

export const phoneAddHipone = (phone: string) => {
  const hiponePhone = phone
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

  return hiponePhone;
};

export const nameCheckRe = (name: string) => {
  //이름 체크
  const nameReg = /^[가-힣a-zA-Z]{2,15}$/;
  if (!nameReg.test(name)) {
    return {
      result: false,
      msg: "이름은 2~15자, 한글과 영문으로 입력해주세요.",
    };
  } else {
    return {
      result: true,
      msg: "",
    };
  }
};

export const textBrConverter = (text: string) => {
  //
  let convertText = text;
  if (text === "") {
    return "";
  } else {
    convertText = convertText.replace(/\r\n/gi, "<br>");
    convertText = convertText.replace(/\\n/gi, "<br>");
    convertText = convertText.replace(/\n/gi, "<br>");

    return convertText;
  }
};

export const getDate = (date?: Date) => {
  const nowDate = date || new Date();
  const nowYear = nowDate.getFullYear();
  const nowMonth = String(nowDate.getMonth() + 1).padStart(2, "0");
  const nowDay = String(nowDate.getDate()).padStart(2, "0");

  const weekList = ["일", "월", "화", "수", "목", "금", "토"];

  const nowWeek = weekList[nowDate.getDay()];

  const prevWeekDate = new Date(
    nowYear,
    Number(nowMonth) - 1,
    Number(nowDay) - 7
  );

  const prevWeekYear = prevWeekDate.getFullYear(); //7일전
  const prevWeekMonth = String(prevWeekDate.getMonth() + 1).padStart(2, "0");
  const prevWeekDay = String(prevWeekDate.getDate()).padStart(2, "0");
  return {
    year: nowYear, //현재 년도
    month: nowMonth, //현재 월
    day: nowDay, //현재 일
    nowWeek, //현재 요일
    prevWeekYear, //7일전 년도
    prevWeekMonth, //7일전 월
    prevWeekDay, //7일전 일
    prevWeekDate, //7일전 전체
    prevWeekKo: `${prevWeekYear}년${prevWeekMonth}월${prevWeekDay}`,
    prevWeekHipon: `${prevWeekYear}-${prevWeekMonth}-${prevWeekDay}`,
    koText: `${nowYear}년 ${nowMonth}월 ${nowDay}일`,
    prevKoText: `${prevWeekYear}년 ${prevWeekMonth}월 ${prevWeekDay}일 ~ ${nowYear}년 ${nowMonth}월 ${nowDay}일`,
    onlyYearMonth: `${nowYear}년 ${nowMonth}월`,
    onlyYearMonthHipon: `${nowYear}-${nowMonth}`,
    comText: `${nowYear}.${nowMonth}.${nowDay}`,
    hiponText: `${nowYear}-${nowMonth}-${nowDay}`,
  };
};

export const getTime = () => {
  const nowDate = new Date();

  const nowHour = nowDate.getHours();
  const nowMin = nowDate.getMinutes();

  return {
    nowHour,
    nowMin,
  };
};

export const dateConverter = (date: Date) => {
  const converDate = date;

  const year = converDate.getFullYear();
  const month =
    Number(converDate.getMonth() + 1) < 10
      ? "0" + String(converDate.getMonth() + 1)
      : converDate.getMonth() + 1;
  const day =
    converDate.getDate() < 10
      ? "0" + converDate.getDate()
      : converDate.getDate();

  const hiponeDate = `${year}-${month}-${day}`;

  return {
    year,
    month,
    day,
    hiponeDate,
  };
};

export const getAfterYearDate = (date?: Date) => {
  const currentDate = date || new Date();
  const oneYearLater = new Date(
    currentDate.setDate(currentDate.getDate() + 364)
  );
  return oneYearLater;
};

export const getMinMax = (list: number[]) => {
  const min = Math.min(...list);
  const max = Math.max(...list);

  return {
    min,
    max,
  };
};

// export const NumberReplace = (event) => {

//     if(event.key ==== '.'
//         || event.key ==== '-'
//         || event.key >= 0 && event.key <= 9) {
//         return true;
//     }

//     return false;
// }

export const NumberComma = (number: number | string) => {
  const parts = number.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
};

export const timeWithDateConverter = (date: string) => {
  const [fullDate, fullTime] = date.split("T");

  const [year, month, day] = fullDate.split("-");

  const [hour, min, sec] = fullTime.split(":");

  return {
    year: year,
    month: month,
    day: day,
    stringDate: `${year}년 ${month}월 ${day}일`,
    hiponeDate: `${year}-${month}-${day}`,
    hour: hour,
    min: min,
    sec: sec,
    stringTime: `${hour}시 ${min}분 ${sec}초`,
  };
};

//비율계산기
export const getPtRatio = (ratio: string) => {
  switch (ratio) {
    case "1:1":
      return "100%";
    case "5:4":
      return "80%";
    case "4:1":
      return "25%";
    case "4:3":
      return "75%";
    case "3:2":
      return "66.67%";
    case "16:10":
      return "62.5%";
    case "1.168:1":
      return "61.8%";
    case "16:9":
      return "56.25%";
    case "2:1":
      return "50%";
    case "21:9":
      return "42.86%";
    default:
      return "100%";
  }
};

export const regionValueReturn = (region: string) => {
  if (region === "") return "NONE";
  if (region === "서울특별시") return "SEOUL";
  if (region === "부산광역시") return "BUSAN";
  if (region === "대구광역시") return "DAEGU";
  if (region === "인천광역시") return "INCHEON";
  if (region === "광주광역시") return "GWANGJU";
  if (region === "대전광역시") return "DAEJEON";
  if (region === "울산광역시") return "ULSAN";
  if (region === "세종특별자치시") return "SEJONG";
  if (region === "경기도") return "GYEONGGI";
  if (region === "강원특별자치도") return "GANGWON";
  if (region === "충청북도") return "CHUNGBUK";
  if (region === "충청남도") return "CHUNGNAM";
  if (region === "전북특별자치도") return "JEONBUK";
  if (region === "전라남도") return "JEONNAM";
  if (region === "경상북도") return "GYEONGBUK";
  if (region === "경상남도") return "GYEONGNAM";
  if (region === "제주특별자치도") return "JEJU";
  return "";
};

export const subtypeValueReturn = (type: string) => {
  if (type === "전체") return "NONE";
  if (type === "보험") return "INSURANCE";
  if (type === "금융") return "FINANCE";
  if (type === "보험/금융") return "INSURANCE_FINANCE";
};

export const searchFilterValueReturn = (type: string) => {
  if (type === "") return "NONE";
  if (type === "이름") return "NAME";
  if (type === "이메일") return "EMAIL";
  if (type === "직장명") return "BUSINESS_NAME";
};

export const operatorTypeValueReturn = (type: string) => {
  if (type === "") return "NONE";
  if (type === "초과") return "GT";
  if (type === "이상") return "GTE";
  if (type === "동일") return "EQUAL";
  if (type === "이하") return "LTE";
  if (type === "미만") return "LT";
};

// //지역별로 고객리스트 데이터 분류
// export const groupByAddress = (
//   data: GetUsersResponseData[]
// ): Record<string, GetUsersResponseData[]> => {
//   return data.reduce((acc, item) => {
//     if (!acc[item.address]) {
//       acc[item.address] = [];
//     }
//     acc[item.address].push(item);
//     return acc;
//   }, {} as Record<string, GetUsersResponseData[]>);
// };

// //랜덤숫자 6자리 생성
// export function generateRandomSixDigitNumber() {
//   const min = 100000; // 6자리 숫자의 최소값
//   const max = 999999; // 6자리 숫자의 최대값
//   return String(Math.floor(Math.random() * (max - min + 1)) + min);
// }

//unix timestemp 변환
export function convertUnixDate(timestemp: number) {
  const date = new Date(timestemp * 1000);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}.${String(month).padStart(2, "0")}.${String(day).padStart(
    2,
    "0"
  )}`;
}

//최근 12개월 초기데이터 생성
export const generateInitialJoinData = (
  type: "연간" | "월간" | "일간",
  startDate?: string,
  endDate?: string
) => {
  const now = new Date();
  const categories = ["합계", "보험", "금융", "프리미엄"];
  const data = [];

  const minDate = new Date("2024-01-01");

  // 월 이름 생성기
  const getMonthName = (monthNumber: number) => {
    new Date(0, monthNumber).toLocaleString("ko-KR", { month: "long" });
  };

  // 연간 데이터를 생성
  if (type === "연간") {
    for (let i = 0; i < 6; i++) {
      const currentYear = now.getFullYear() - i;
      // if (new Date(currentYear, 0, 1) < minDate) break;

      data.unshift({
        name: `${currentYear}년`,
        [categories[0]]: 0,
        [categories[1]]: 0,
        [categories[2]]: 0,
        [categories[3]]: 0,
      });
    }
  }

  // 월간 데이터를 생성
  else if (type === "월간") {
    for (let i = 11; i >= 0; i--) {
      const currentDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
      // if (currentDate < minDate) break;

      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;

      data.push({
        name: `${year}년 ${month < 10 ? "0" + month : month}월`,
        [categories[0]]: 0,
        [categories[1]]: 0,
        [categories[2]]: 0,
        [categories[3]]: 0,
      });
    }
  }

  // 일간 데이터를 생성
  else if (type === "일간") {
    if (!startDate || !endDate) {
      console.error("일간 데이터를 위해서는 시작날짜와 종료날짜가 필요합니다.");
      return [];
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    // 최소 시작 날짜 검사
    if (start < minDate) {
      console.error("최소 시작 날짜는 2024-01-01이어야 합니다.");
      return [];
    }

    // 시작 날짜가 종료 날짜보다 크면 오류 반환
    if (start > end) {
      console.error("시작 날짜가 종료 날짜보다 클 수 없습니다.");
      return [];
    }

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      const year = d.getFullYear();
      const month = d.getMonth() + 1;
      const day = d.getDate();

      data.push({
        name: `${year}년 ${String(month).padStart(2, "0")}월 ${String(
          day
        ).padStart(2, "0")}일`,
        [categories[0]]: 0,
        [categories[1]]: 0,
        [categories[2]]: 0,
        [categories[3]]: 0,
      });
    }
  }

  return data;
};

//현재시간 timestemp 변환
export function getUnixDate(
  year?: string,
  month?: string,
  day?: string,
  hour?: string,
  minits?: string
) {
  if (year && month && day && hour && minits) {
    const date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minits)
    );
    return Math.floor(date.getTime() / 1000);
  } else if (year && month && day) {
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return Math.floor(date.getTime() / 1000);
  }
  return Math.floor(Date.now() / 1000);
}

export const convertFileSizeToMB = (fileSizeInBytes: number) => {
  const sizeInMB = fileSizeInBytes / (1024 * 1024); // 바이트를 MB로 변환
  return sizeInMB.toFixed(2); // 소수점 두 자리까지 반환
};

//order_id 생성
export const generateOrderId = () => {
  return Math.random().toString(36).substr(2, 9);
};

//블루버튼 user를 조회하기위한 id리스트 string변환
export const filterUserId = (idList: number[]) => {
  const uniqueNumbers = Array.from(new Set(idList));

  return uniqueNumbers.join(",");
};

export const base64Encode = (clientID: string, clientSecret: string) => {
  const toEncode = `${clientID}:${clientSecret}`;
  return btoa(toEncode);
};

// //proposal 수락 및 거절 버튼 반환
// export const getEamilButton = (proposal_id: number) => {
//   return `<div style="margin-top:20px">
//   <!— 수락 버튼 —>
//   <a href="${baseUrl}/api/v1/user_proposal/update-status?user_proposal_id=${proposal_id}&proposition_status=ACCEPT" target="_blank" style="padding: 10px 20px; background-color: #5C60C8; color: white; text-decoration: none;">수락</a> <!— 거절 버튼 —> <a href="${baseUrl}/api/v1/user_proposal/update-status?user_proposal_id=${proposal_id}&proposition_status=REJECT" target="_blank" style="padding: 10px 20px; background-color: red; color: white; text-decoration: none;">거절</a></div>`;
// };

export const getGraphLeftArea = (maxData: number) => {
  // 숫자의 자리수를 계산
  const numDigits = Math.floor(Math.log10(maxData)) + 1;

  // 3자리 증가할 때마다 n을 10씩 증가시킴
  const increase = Math.floor(numDigits / 3) * 10;

  // 결과 반환
  return 0 + increase;
};

export const isDateInRange = (startTimestamp: number, endTimestamp: number) => {
  // 시작과 종료 타임스탬프를 Date 객체로 변환
  const startDate = new Date(startTimestamp * 1000);
  const endDate = new Date(endTimestamp * 1000);

  // 현재 날짜 가져오기 (시간 무시)
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // 시간 부분을 00:00:00으로 초기화

  // startDate와 endDate의 시간을 00:00:00으로 설정하여 날짜만 비교
  const onlyStartDate = new Date(startDate.setHours(0, 0, 0, 0));
  const onlyEndDate = new Date(endDate.setHours(0, 0, 0, 0));

  // 현재 날짜가 startDate와 endDate 사이에 있는지 확인
  return currentDate >= onlyStartDate && currentDate <= onlyEndDate;
};

export const getMonthLabel = (month: number) => {
  const yearLabel = Math.floor(month / 12);
  const monthLabel = Math.floor(month % 12);

  return `${yearLabel >= 1 ? yearLabel + "년" : ""}${
    monthLabel >= 1 ? monthLabel + " 개월" : ""
  }`;
};

export const getOtpNumber = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

//뒤에서부터 마스킹처리후 반점 추가
export const formatAndMaskVariableDigits = (
  input: number | string,
  maskCount: number
) => {
  // 숫자를 문자열로 변환
  const str = input.toString();

  // 숫자에 3자리마다 반점 추가
  const formatted = str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // 마스킹할 시작 인덱스 계산 (반점을 포함하여 계산)
  const maskIndex = formatted.length - maskCount;

  // 마스킹 처리 및 결과 반환
  const masked = formatted.slice(0, maskIndex) + "*".repeat(maskCount);

  return masked;
};

//문자열 첫글자빼고 마스킹처리
export function maskAllButFirst(str: string) {
  if (str.length <= 1) return str; // 문자열 길이가 1 이하면 그대로 반환
  const maskedSection = "*".repeat(str.length - 1);
  return str[0] + maskedSection;
}
