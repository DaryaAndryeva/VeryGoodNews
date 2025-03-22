import { useState } from "react";
import { Button } from "../Button";
import { Filter } from "../Filter";
import { Option } from "../Filter/Filter";
import { InputFilter } from "../InputFilter";
import { DatePeriod, SearchParams, Sourse } from "../../pages/Main/Main";
import styles from "./Filters.module.scss";
import { DateRangePicker } from "../DateRangePicker";

interface FiltersProps {
  onSearch: (params: SearchParams) => void;
  sourses: Sourse[];
  isLoading?: boolean;
}

export const Filters = ({
  onSearch,
  sourses,
  isLoading,
}: FiltersProps): JSX.Element => {
  const [soursesFilter, setSources] = useState<Option[]>([]);
  const [queryString, setQueryString] = useState<string | undefined>();
  const [period, setPeriod] = useState<DatePeriod>({
    start_dt: new Date(),
    end_dt: new Date(),
  });

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
