import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Calendar, Flex, Radio, Select, theme, Typography } from 'antd';
import dayLocaleData from 'dayjs/plugin/localeData';
import { DatePicker } from 'antd';
import ruRU from 'antd/es/date-picker/locale/ru_RU';

dayjs.extend(dayLocaleData);

export function CalendarAntd({ className }) {
  const { token } = theme.useToken();
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  const wrapperStyle = {
    width: 300,
    height: 350,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <div style={wrapperStyle} className={className}>
      <Calendar
        locale={ruRU}
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const year = value.year();
          const month = value.month();
          const yearOptions = Array.from({ length: 20 }, (_, i) => {
            const label = year - 10 + i;
            return { label, value: label };
          });
          const monthOptions = value
            .localeData()
            .monthsShort()
            .map((label, index) => ({
              label,
              value: index,
            }));
          return (
            <div style={{ padding: 8 }}>
              <Typography.Title level={4}>Custom header</Typography.Title>
              <Flex gap={8}>
                <Radio.Group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                  <Radio.Button value="month">Month</Radio.Button>
                  <Radio.Button value="year">Year</Radio.Button>
                </Radio.Group>
                <Select
                  size="small"
                  popupMatchSelectWidth={false}
                  value={year}
                  options={yearOptions}
                  onChange={newYear => {
                    const now = value.clone().year(newYear);
                    onChange(now);
                  }}
                />
                <Select
                  size="small"
                  popupMatchSelectWidth={false}
                  value={month}
                  options={monthOptions}
                  onChange={newMonth => {
                    const now = value.clone().month(newMonth);
                    onChange(now);
                  }}
                />
              </Flex>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};
