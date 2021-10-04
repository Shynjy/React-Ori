import React from 'react';

const Select = ({ options, value, setValue, ...props }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option, i) => (
        <option key={option + i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
