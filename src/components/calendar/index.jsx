import style from './calendar.module.css';
import { calendarStyles } from './calendar-styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import 'dayjs/locale/ru';
import { CalendarCovers } from './calendar-covers';
import { ipadTokens, Сontainer } from '../../tokens/ipad-ui-tokens';

export function Calendar() {
  return (
    <Сontainer 
      {...ipadTokens.widget.medium} 
      style={{ padding: '10px', gap: '10px' }}
    >
      <div className={style.calendar__container}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru" width="100%">
          <DateCalendar 
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
      <div className={style.calendar__cover}>
        <CalendarCovers />
      </div>
    </Сontainer>
  );
}