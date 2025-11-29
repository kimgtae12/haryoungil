import styled, { keyframes } from "styled-components";
import { colors } from "theme/colors";
import { FlexBox } from "theme/globalStyle";

const slideUp = keyframes`
  from {
    transform: translate(-50%,100%);
  }
  to {
    transform: translate(-50%,0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translate(-50%,0);
  }
  to {
    transform: translate(-50%,100%);
  }
`;

//스낵바 컨테이너
const SnackbarContainer = styled(FlexBox)<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 2rem;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: ${colors.SNACKBAR_BG};
  padding: 1.2rem 2.4rem;
  border-radius: 6px;
  z-index: 1000;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  $gap: 2rem;
  animation: ${(props) => (props.$isOpen ? slideUp : slideDown)} 0.3s
    ease-in-out;
`;
export { SnackbarContainer };
