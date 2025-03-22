import {
  default as ReactSelect,
  GroupBase,
  Props,
  components,
} from "react-select";
import { customStylesSelect } from "./styles";
import { ForwardedRef, forwardRef } from "react";
import cleaner from "../../assets/images/cleaner.svg";
import { CustomValueContainer } from "./components/CustomValueContainer";
import { CustomInput } from "./components/CustomInput";
import styles from "./Filter.module.scss";

export interface Option {
  value: any;
  label: string;
  parent_id?: any;
}

const CheckboxOption = (props: any) => {
  const { data, isSelected, innerRef, innerProps, selectProps, options } =
    props;

  const isOptionSelected =
    isSelected ||
    selectProps?.value?.some((value: Option) => value.value === "all");

  const selectedAll =
    data?.value === "all" && options?.length - 1 === selectProps?.value?.length;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{ display: "flex", alignItems: "center", padding: "8px" }}>
      <input
        type="checkbox"
        checked={selectedAll || isOptionSelected}
        readOnly
        style={{ marginRight: "8px" }}
      />
      <span>{data?.label}</span>
    </div>
  );
};

export const Filter = forwardRef(
  (
    { options = [], value, ...props }: Props<Option, true, GroupBase<Option>>,
    ref: ForwardedRef<any>
  ) => {
    const selectedValues = value as Option[];

    const CustomClearIndicator = (props: any) => {
      const {
        children = (
          <img src={cleaner} alt="img" className={styles["cleaner-icon"]} />
        ),
        ...rest
      } = props;

      return (
        <components.ClearIndicator {...rest}>
          {children}
        </components.ClearIndicator>
      );
    };

    return (
      <ReactSelect
        isMulti
        styles={customStylesSelect}
        isClearable
        placeholder=""
        ref={ref}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        noOptionsMessage={() => "Ничего не найдено"}
        loadingMessage={() => "Поиск..."}
        options={options || []}
        components={{
          Input: CustomInput,
          ValueContainer: CustomValueContainer,
          Option: CheckboxOption,
          MultiValue: () => <></>,
          ClearIndicator: CustomClearIndicator,
        }}
        value={selectedValues}
        {...props}
      />
    );
  }
);
