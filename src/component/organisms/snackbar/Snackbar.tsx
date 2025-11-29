import { SnackbarContainer } from "component/atom/snackbar/snackbar";
import Typograpy from "component/molecules/Typograpy";
import React from "react";

import { useSnackbarStore } from "store/SnackbarStore";
import { colors } from "theme/colors";
import { Box } from "theme/globalStyle";

const Snackbar: React.FC = () => {
  const { isOpen, message, actionLabel, onClick, closeSnackbar } =
    useSnackbarStore();

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeSnackbar();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, closeSnackbar]);

  if (!isOpen) return null;

  return (
    <SnackbarContainer $isOpen={isOpen}>
      <Typograpy fontSize={16} color={colors.SNACKBAR_FONT}>
        {message}
      </Typograpy>
      {actionLabel && (
        <Box $isPointer onClick={onClick}>
          <Typograpy fontSize={16} color={colors.SNACKBAR_ACTION}>
            {actionLabel}
          </Typograpy>
        </Box>
      )}
    </SnackbarContainer>
  );
};

export default Snackbar;
