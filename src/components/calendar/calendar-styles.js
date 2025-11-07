export const calendarStyles = {
  width: "124px",
  height: "min-content",
  maxHeight: "130px",
  margin: "0px",
  padding: "0px",
  "& .MuiPickersCalendarHeader-root": {
    margin: "0px",
    padding: "0px",
    height: "15px",
    minHeight: "fit-content",
    maxHeight: "fit-content",
    fontFamily: "SF Pro",
    fontSize: "8px",
  },
  "& .MuiPickersCalendarHeader-switchViewButton": {
    display: "none",
    disabled: true,
  },
  "& .MuiPickersCalendarHeader-label": {
    fontFamily: "SF Pro",
    fontSize: "9px",
    fontWeight: "bold",
    lineHeight: "1.66",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--red)",
    paddingLeft: "8px",
  },
  "& .MuiDayCalendar-header span:nth-of-type(6), \
  & .MuiDayCalendar-header span:nth-of-type(7)": {
    color: "var(--grey)",
  },
  "& .MuiDayCalendar-weekDayLabel": {
    fontFamily: "SF Pro",
    fontSize: "8px",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "var(--black)",
    width: "17.5px",
    height: "15px",
    margin: "0px",
  },
  "& .MuiPickersSlideTransition-root": {
    minHeight: "91px",
  },
  "& .MuiDayCalendar-monthContainer": {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },
  "& .MuiDayCalendar-weekContainer": {
    margin: "0px",
  },
  "& .MuiPickersDay-root": {
    margin: "0px",
    width: "15px",
    height: "15px",
    margin: "0 1.25px",
    fontFamily: "SF Pro",
    fontSize: "8px",
    "&: focus": { outline: "none" },
  },
  "& .MuiDayCalendar-weekContainer button[aria-colindex='6']:not(.Mui-selected):not(.Mui-disabled), \
    & .MuiDayCalendar-weekContainer button[aria-colindex='7']:not(.Mui-selected):not(.Mui-disabled)":
    {
      color: "var(--grey)",
    },
  "& .MuiPickersDay-today, \
  & .MuiPickersDay-today:focus, \
  & .MuiPickersDay-today:hover": {
    backgroundColor: "var(--red)",
    color: "var(--white)",
    borderRadius: "50%",
    border: "none",
    outline: "none",
  },
  "& .MuiPickersDay-today:not(.Mui-selected)": {
    outline: "none",
    border: "none",
  },
};
