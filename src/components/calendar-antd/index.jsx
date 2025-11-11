import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import ruRU from 'antd/es/date-picker/locale/ru_RU';
import { Calendar } from 'antd';
import dayLocaleData from 'dayjs/plugin/localeData';
dayjs.extend(dayLocaleData);
import { formatDateMonth } from '../../utils/formatDate.js';
import { ipadTokens } from '../../tokens/ipad-ui-tokens';
import { styled } from '@mui/material/styles';

const StyledCalendar = styled(Calendar)({
  fontFamily: "SF Pro",
  fontSize: "8px",
  color: "var(--dark-grey)",
  width: "124px",
  height: "min-content",
  padding: "3px !important",
  '& *': {
    boxSizing: "border-box",
    margin: "0px !important",
    padding: "0px !important",
    lineHeight: '1.66 !important',
  },
  '& .month': {
    fontSize: "9px",
    fontWeight: "bold",
    lineHeight: "1.66",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--red)",
    paddingLeft: "8px !important",
  },
  '& .ant-picker-panel, \
  & .ant-picker-date-panel, \
  & .ant-picker-body, \
  & .ant-picker-content':{
    width: '100% !important',
    height: '100% !important',
  },
  '& .ant-picker-content *, *::before, & *::after': {
    minWidth: "15px !important",
    width: "15px !important",
    minHeight: "15px !important",
    height: "15px !important",
  },
  '& tr': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '2px',
    margin: '1px 0px !important',
  },
  '& thead tr th': {
    fontWeight: 'bold !important',
  },
  '& .ant-picker-calendar-date-today': {
    background: "var(--red) !important",
    color: "var(--white) !important",
    borderRadius: "50% !important",
    border: "none !important",
    outline: "none !important",
  },
  '& .ant-picker-calendar-date-today::before': {
    border: "none !important",
    outline: "none !important",
    borderRadius: "50% !important",
  }
});


export function CalendarAntd({ className }) {

  // const wrapperStyle = {
  //   width: 300,
  //   height: 'fit-content',
  //   borderRadius: ipadTokens.widget.small.br,
  // };

  return (
    <div className={className}>
      <StyledCalendar
        locale={ruRU}
        fullscreen={false}
        headerRender={({ value }) => {
          const monthName = formatDateMonth.format(value);
          return (
            <div className='month'>{monthName}</div>
          );
        }}
      />
    </div>
  );
};
