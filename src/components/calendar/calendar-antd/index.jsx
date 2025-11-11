import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import ruRU from 'antd/es/date-picker/locale/ru_RU';
import dayLocaleData from 'dayjs/plugin/localeData';
dayjs.extend(dayLocaleData);
import { formatDateMonth } from '/src/utils/formatDate.js';
import { StyledCalendar } from './calendar-antd-style.js';
import { Calendar } from "antd";
import styled from 'styled-components';

export function CalendarAntd() {
  return (
    <Conteiner>
      <StyledCalendar>
        <Calendar
          locale={ruRU}
          fullscreen={false}
          headerRender={({ value }) => {
            const monthName = formatDateMonth.format(value);
            return (
              <div className='month'>{monthName}</div>
            );
          }}
        />
      </StyledCalendar>
    </Conteiner>
  );
};

const Conteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
