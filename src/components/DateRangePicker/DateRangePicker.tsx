import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { DatePeriod } from "../../pages/Main/Main";
import styles from "./DateRangePicker.module.scss";

interface DateRangePickerProps {
  setPeriod: (period: DatePeriod) => void;
}

export const DateRangePicker = ({ setPeriod }: DateRangePickerProps) => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const [startDate, setStartDate] = useState<Date>(sevenDaysAgo);
  const [endDate, setEndDate] = useState<Date>(today);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Выбранный период:", {
      startDate: startDate ? format(startDate, "dd.MM.yyyy") : null,
      endDate: endDate ? format(endDate, "dd.MM.yyyy") : null,
    });
  };

  useEffect(() => {
    setPeriod({ start_dt: startDate, end_dt: endDate });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate, endDate]);

  return (
    <div onSubmit={handleSubmit} className={styles["date-range-picker"]}>
      <div className={styles["value-container"]}>
        <div className={styles["start-value"]}>
          {startDate ? format(startDate, "dd.MM.yyyy") : ""}
        </div>
        <div className={styles["separator"]}>—</div>
        <div className={styles["end-value"]}>
          {endDate ? format(endDate, "dd.MM.yyyy") : ""}
        </div>
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date || new Date())}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="Начало"
        className={styles["date-input-start"]}
        dateFormat="dd.MM.yyyy"
        minDate={sevenDaysAgo}
        maxDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date || new Date())}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Окончание"
        className={styles["date-input-end"]}
        dateFormat="dd.MM.yyyy"
        maxDate={today}
      />
    </div>
  );
};
