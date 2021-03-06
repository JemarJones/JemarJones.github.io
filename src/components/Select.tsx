import React, {
  useCallback,
  useMemo,
  ReactElement,
  CSSProperties,
  useEffect,
  useState,
} from 'react';
import ReactSelect, {
  Props,
  Theme,
  ValueType,
  ActionMeta,
  Styles,
} from 'react-select';
import classNames from 'classnames';

import useMedia from '../hooks/useMedia';

/**
 * Light wrapper around react-select, mostly just for styling.
 */

export type SingleValueType<OptionType> = OptionType | null | undefined;
export interface iProps<OptionType> extends Props<OptionType> {
  onSingleChange?: (
    value: SingleValueType<OptionType>,
    actionMeta: ActionMeta
  ) => void;
}

// This type should be `Select: React.FC<iProps<OptionType>>`,
// but that's not possible with const functions it seems.
const Select = <OptionType extends {}>({
  onSingleChange,
  onChange,
  ...props
}: iProps<OptionType>): ReactElement | null => {
  const mobile = useMedia('(max-width: 768px)');
  const [key, setKey] = useState(`select-${Date.now()}`);

  useEffect(() => {
    // react-select uses react-input-autosize internally,
    // which doesn't automatically reflect changes in style:
    // (https://github.com/JedWatson/react-input-autosize#changing-the-styles-at-runtime).
    // One of the suggested resolutions is to force a full re-render with a change in
    // `key` when styles change, so that's what we're doing here.
    // Specifically we reset the key when hitting this mobile breakpoint
    // because at this breakpoint the base font-size changes, which the styles
    // below rely upon due to their usage of rem's.
    setKey(`select-${Date.now()}`);
  }, [mobile]);

  const getSearchTheme = useCallback(
    (theme: Theme): Theme => ({
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
    }),
    []
  );

  const customStyles: Partial<Styles> = useMemo(
    (): Partial<Styles> => ({
      container: (provided: CSSProperties): CSSProperties => ({
        ...provided,
        marginTop: 0,
        marginLeft: 20,
        marginRight: 20,
        width: '100%',
      }),
      singleValue: (provided: CSSProperties, state: any): CSSProperties => ({
        ...provided,
        color: state.hasValue ? state.theme.colors.primary : provided.color,
      }),
      input: (provided: CSSProperties, state: any): CSSProperties => ({
        ...provided,
        color: state.theme.colors.primary,
      }),
      indicatorSeparator: (
        provided: CSSProperties,
        state: any
      ): CSSProperties => ({
        ...provided,
        backgroundColor: state.isFocused
          ? state.theme.colors.primary
          : provided.backgroundColor,
      }),
      dropdownIndicator: (
        provided: CSSProperties,
        state: any
      ): CSSProperties => ({
        ...provided,
        color: state.isFocused ? state.theme.colors.primary : provided.color,
      }),
      option: (provided: CSSProperties, state: any): CSSProperties => ({
        ...provided,
        color: state.theme.primary,
        backgroundColor: state.isSelected
          ? state.theme.colors.neutral50
          : provided.backgroundColor,
        fontSize: '3rem',
        overflowWrap: 'break-word',
      }),
    }),
    []
  );

  const handleChange = useCallback(
    (value: ValueType<OptionType>, actionMeta: ActionMeta): void => {
      // react-select types are 🗑 when it comes to differentiating multi and single Select's..
      // This helps.
      if (onSingleChange && !props.isMulti) {
        onSingleChange(value as SingleValueType<OptionType>, actionMeta);
      }

      if (onChange) {
        onChange(value, actionMeta);
      }
    },
    [onChange, onSingleChange, props.isMulti]
  );

  return (
    <ReactSelect
      placeholder="..."
      classNamePrefix="jkj-select"
      theme={getSearchTheme}
      styles={customStyles}
      {...props}
      onChange={handleChange}
      className={classNames('jkj-select', props.className)}
      key={key}
    />
  );
};

export default Select;
