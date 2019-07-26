import React from 'react';
import ReactSelect from 'react-select';
import { Props } from 'react-select/lib/Select';
import { Theme } from 'react-select/lib/types';
import { Styles } from 'react-select/lib/styles';
import classNames from 'classnames';

/**
 * Light wrapper around react-select, mostly just for styling.
 */

export interface DefaultOptionType {
  label: string;
  value: string;
}

const Select = React.memo((props: Props) => (
  <ReactSelect
    placeholder="..."
    classNamePrefix="jkj-select"
    theme={getSearchTheme}
    styles={customStyles}
    {...props}
    className={classNames('jkj-select', props.className)}
  />
));

const getSearchTheme = (theme: Theme): Theme => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#f4faff',
    neutral0: '#555b6e',
    primary25: 'rgba(244, 250, 255, 0.1)',
    neutral50: 'rgba(244, 250, 255, 0.5)',
    primary50: 'rgba(244, 250, 255, 0.5)',
  },
  spacing: {
    ...theme.spacing,
    controlHeight: 20,
  },
});

const customStyles: Partial<Styles> = {
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
