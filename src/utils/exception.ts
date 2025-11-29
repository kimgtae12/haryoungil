export const apiException = (
  status: number,
  message: string,
  logoutHandler: () => void
) => {
  if (status === 200) {
    return true;
  } else if (status === 401) {
    alert("계정정보가 만료되었거나, 다른컴퓨터에서 로그인하여 로그아웃합니다.");
    logoutHandler();
    return false;
  } else {
    alert("알수없는 오류가 발생하였습니다." + message);
    window.location.replace("/");
    return false;
  }
};
