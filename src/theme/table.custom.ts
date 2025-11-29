import { TableStyles } from "react-data-table-component";
import { colors } from "./colors";

export const tableCustomStyles: TableStyles = {
  headCells: {
    style: {
      color: colors.TABLE_FONT,
      fontSize: "1.4rem",
      fontFamily: "SemiBold",
    },
  },
  cells: {
    style: {
      paddingTop: "1rem",
      paddingBottom: "1rem",
      justifyContents: "center",
      fontSize: "1.4rem",
      color: colors.TABLE_FONT,
    },
  },
};
