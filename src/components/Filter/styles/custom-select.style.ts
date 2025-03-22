export const customStylesSelect = {
  menu: (provided: any) => ({
    ...provided,
    "z-index": 9999,
    width: "auto",
    maxWidth: "100%",
    minWidth: "100%",
  }),
  control: (_: any, { isFocused }: { isFocused: boolean }) => ({
    height: "50px",
    display: "flex",
    border: `1px solid ${isFocused ? "#86b7fe" : "#ced4da"}`,
    boxShadow: isFocused ? "0 0 0 0.25rem rgb(13 110 253 / 25%)" : "0",
    borderRadius: "4px",
    backgroundColor: "#fff",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: "#212529",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    display: "none",
  }),
  loadingIndicator: (styles: any, { isFocused }: { isFocused: boolean }) => ({
    ...styles,
    color: "#006AB5",
  }),
  placeholder: (styles: any, state: any) => {
    return {
      ...styles,
      position: "absolute",
      font: "Arial",
      fontWeight: 400,
      top: "30%",
      display: state.isFocused ? "none" : "block",
    };
  },
  input: (styles: any, state: any) => ({ ...styles }),
  option: (styles: any, state: any) => {
    return {
      ...styles,
      backgroundColor: state.isDisabled
        ? undefined
        : state.isSelected
        ? "#F2F2F2"
        : state.isFocused
        ? "#F2F2F2"
        : undefined,
      color: "#1F1F1F",
      lineHeight: "18px",
      cursor: state.isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !state.isDisabled
          ? state.isSelected
            ? "#F2F2F2"
            : "#F2F2F2"
          : undefined,
      },
    };
  },
};
