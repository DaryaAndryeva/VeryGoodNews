import { components, InputProps } from "react-select";
import { Option } from "../../Filter";

export const CustomInput = (props: InputProps<Option>) => (
  <components.Input {...props} isHidden={false}></components.Input>
);
