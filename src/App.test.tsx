import React from 'react';
import { render, screen } from '@testing-library/react';
import AppWrapper from './AppWrapper';

import dayjs from 'dayjs';
import weekOfYear from "dayjs/plugin/weekOfYear";
import localeKa from "dayjs/locale/ka";

const weekDays: { [index: number]: string } = {
  0: "კვირა",
  1: "ორშაბათი",
  2: "სამშაბათი",
  3: "ოთხშაბათი",
  4: "ხუთშაბათი",
  5: "პარასკევი",
  6: "შაბათი",
}

test('გადაცემული თარიღისთვის სწორი სათაურის ტესტი', () => {
  let test: string = "2023-02-13";

  function renderDate(date: string) {
    dayjs.extend(weekOfYear);
    if (dayjs(date).locale(localeKa).week() == dayjs().locale(localeKa).week()) {
      return weekDays[dayjs(date).day()];
    }
    return dayjs(date).locale(localeKa).format('DD MMMM, YYYY');
  }

  let dateToTest = `${renderDate(test)}`;

  render(<AppWrapper />);
  const dateElement = screen.getByText(new RegExp(dateToTest));
  expect(dateElement).toBeInTheDocument();
});
