import style from './calendar.module.css';
import { calendarStyles } from './calendar-styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'dayjs/locale/ru';

export function Calendar() {
  return (
    <div className={style.calendar__container}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DateCalendar 
          weekStart={1}
          readOnly
          onChange={() => {}}
          onViewChange={() => {}}
          slotProps={{
            calendarHeader: {
              format: 'MMMM',
              onClick: (e) => e.stopPropagation(),
              style: { pointerEvents: 'none' },
            },
            switchViewButton: {disabled: true, style: { display: 'none' }},
            previousIconButton: {style: {display: 'none'}},
            nextIconButton: {style: {display: 'none'}},
          }}
          sx={calendarStyles}
        />
      </LocalizationProvider>
    </div>
  );
}