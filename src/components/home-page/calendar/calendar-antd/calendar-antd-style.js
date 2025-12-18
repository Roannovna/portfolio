import styled from "styled-components";

export const StyledCalendar = styled.div`
  .ant-picker-calendar {
    font-family: "SF Pro", sans-serif;
    font-size: 8px;
    color: var(--dark-grey);
    width: 135px;
    height: min-content;
    padding: 0 6px !important;
  }

  * {
    box-sizing: border-box;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 1.9 !important;
  }

  .month {
    font-size: 9px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--red);
    padding-left: 8px !important;
  }

  .ant-picker-panel,
  .ant-picker-date-panel,
  .ant-picker-body {
    width: 100%;
    height: 100%;
  }

  .ant-picker-content {
    width: 100% !important;
    height: 100% !important;
  }

  .ant-picker-content *,
  .ant-picker-content *::before,
  .ant-picker-content *::after {
    min-width: 15px !important;
    width: 15px !important;
    min-height: 15px !important;
    height: 15px !important;
    text-align: center !important;
    text-justify: center !important;
  }

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3px;
    width: fit-content !important;
  }

  thead tr th {
    font-weight: bold !important;
  }

  thead tr th:nth-of-type(6),
  thead tr th:nth-of-type(7) {
    color: var(--light-grey) !important;
  }

  tbody tr td:nth-of-type(6) .ant-picker-calendar-date-value,
  tbody tr td:nth-of-type(7) .ant-picker-calendar-date-value {
    color: var(--light-grey) !important;
  }

  .ant-picker-calendar-date-today {
    background: var(--red) !important;
    color: var(--white) !important;
    border-radius: 50% !important;
    border: none !important;
    outline: none !important;
  }

  .ant-picker-calendar-date-today::before {
    border: none !important;
    outline: none !important;
    border-radius: 50% !important;
  }

  .ant-picker-cell-selected:not(.ant-picker-cell-today) .ant-picker-cell-inner {
    background: var(--pink) !important;
    color: var(--dark-grey) !important;
    border-radius: 50% !important;
    border: none !important;
    outline: none !important;
  }
`;
