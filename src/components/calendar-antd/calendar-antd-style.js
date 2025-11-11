import { Calendar } from "antd";
import { styled } from "@mui/material/styles";

export const StyledCalendar = styled(Calendar)({
  fontFamily: "SF Pro",
  fontSize: "8px",
  color: "var(--dark-grey)",
  width: "135px",
  height: "min-content",
  padding: "0px 6px !important",
  "& *": {
    boxSizing: "border-box",
    margin: "0px !important",
    padding: "0px !important",
    lineHeight: "1.9 !important",
  },
  "& .month": {
    fontSize: "9px",
    fontWeight: "bold",
    lineHeight: "1.5",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--red)",
    paddingLeft: "8px !important",
  },
  "& .ant-picker-panel, \
  & .ant-picker-date-panel, \
  & .ant-picker-body, \
  & .ant-picker-content": {
    width: "100% !important",
    height: "100% !important",
  },
  "& .ant-picker-content *, *::before, & *::after": {
    minWidth: "15px !important",
    width: "15px !important",
    minHeight: "15px !important",
    height: "15px !important",
    textAlign: "center !important",
    textJustify: "center !important",
  },
  "& tr": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "3px",
    // margin: "1px 0px !important",
    width: "fit-content !important",
  },
  "& thead tr th": {
    fontWeight: "bold !important",
  },
  "& thead tr th:nth-of-type(6), & thead tr th:nth-of-type(7)": {
    color: "var(--light-grey) !important",
  },
  "& tbody tr td:nth-of-type(6) .ant-picker-calendar-date-value, \
    & tbody tr td:nth-of-type(7) .ant-picker-calendar-date-value": {
    color: "var(--light-grey) !important",
  },
  "& .ant-picker-calendar-date-today": {
    background: "var(--red) !important",
    color: "var(--white) !important",
    borderRadius: "50% !important",
    border: "none !important",
    outline: "none !important",
  },
  "& .ant-picker-calendar-date-today::before": {
    border: "none !important",
    outline: "none !important",
    borderRadius: "50% !important",
  },
  "& .ant-picker-cell-selected .ant-picker-cell-inner": {
    background: "var(--pink) !important",
    color: "var(--dark-grey) !important",
    borderRadius: "50% !important",
    border: "none !important",
    outline: "none !important",
  },
});
