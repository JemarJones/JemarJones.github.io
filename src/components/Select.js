import React from 'react';
import ReactSelect from 'react-select';

const Select = props => (
  <ReactSelect
    placeholder="..."
    className="jkj-select"
    classNamePrefix="jkj-select"
    theme={getSearchTheme}
    styles={customStyles}
    {...props}
  />
);

const getSearchTheme = theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#f4faff',
    neutral0: '#555b6e',
    primary25: 'rgba(244, 250, 255, 0.1)',
    neutral50: 'rgba(244, 250, 255, 0.5)',
  },
  spacing: {
    ...theme.spacing,
    controlHeight: 20,
  },
});

const customStyles = {
  container: provided => ({
    ...provided,
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.hasValue ? state.theme.colors.primary : provided.color,
  }),
  input: (provided, state) => ({
    ...provided,
    color: state.theme.colors.primary,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? state.theme.colors.primary
      : provided.backgroundColor,
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused ? state.theme.colors.primary : provided.color,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.theme.primary,
    backgroundColor: state.isSelected
      ? state.theme.colors.neutral50
      : provided.backgroundColor,
    fontSize: '3rem',
  }),
};

export default Select;
