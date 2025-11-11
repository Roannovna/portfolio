import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import ruRU from 'antd/es/date-picker/locale/ru_RU';
import dayLocaleData from 'dayjs/plugin/localeData';
dayjs.extend(dayLocaleData);
import { formatDateMonth } from '../../utils/formatDate.js';
import { StyledCalendar } from './calendar-antd-style.js';

export function CalendarAntd() {
  return (
    <div>
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
