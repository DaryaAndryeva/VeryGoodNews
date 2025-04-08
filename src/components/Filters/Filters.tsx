import { useDebounceEffect } from "ahooks";
import { useState } from "react";
import { Button } from "../Button";
import { Filter } from "../Filter";
import { Option } from "../Filter/Filter";
import { InputFilter } from "../InputFilter";
import { DatePeriod, SearchParams, Sourse } from "../../pages/Main/Main";
import { DateRangePicker } from "../DateRangePicker";
import styles from "./Filters.module.scss";

interface FiltersProps {
  onSearch: (params: SearchParams) => void;
  sourses: Sourse[];
  isLoading?: boolean;
  setFilters: (params: SearchParams) => void;
}

export const Filters = ({
  onSearch,
  sourses,
  isLoading,
  setFilters,
}: FiltersProps): JSX.Element => {
  const [soursesFilter, setSources] = useState<Option[]>([]);
  const [queryString, setQueryString] = useState<string | undefined>();
  const [period, setPeriod] = useState<DatePeriod>({
    start_dt: new Date(),
    end_dt: new Date(),
  });

  useDebounceEffect(
    () => {
      setFilters({ sources: soursesFilter, query: queryString, period });
    },
    [soursesFilter, queryString, period],
    { wait: 600 }
  );

  const handleSearch = () =>
    onSearch({ sources: soursesFilter, query: queryString, period });

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["filters-row"]}>
        <Filter
          name="sourses"
          options={sourses.map((sourse) => {
            return { label: sourse.name, value: sourse.id };
          })}
          className={styles["filter"]}
          placeholder="Источники"
          // @ts-ignore
          onChange={setSources}
        />
        <DateRangePicker setPeriod={setPeriod} />
      </div>
      <div className={styles["filters-row"]}>
        <InputFilter value={queryString} handleChange={setQueryString} />
      </div>
      <Button onClick={handleSearch} isLoading={isLoading} />
    </div>
  );
};