import React, { useState } from 'react';
import chroma from 'chroma-js';

import { ColourOption, colourOptions } from '../../../data/user-colors';
import Select, { StylesConfig } from 'react-select';


interface UserRoleProps {
  roleUser: string;
}

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    fontSize: 10,
    fontFamily: 'Arial',
    color: 'black',
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

var dataColor: ColourOption = {
  color: '',
  value: '',
  label: '',
  lightColor: ''
};


const UserRole = (roleUser: UserRoleProps) => {
  const selectedColor = colourOptions.find((option) => option.label === roleUser.roleUser)?.lightColor;
  if (selectedColor) {
    dataColor = { ...dataColor, color: selectedColor };
  }
  const [color, setColor] = useState(selectedColor);

  function handleChangeColor(role: any) {
    setColor(colourOptions.find((option) => option.label === role.label)?.lightColor);
  }

  const colourStyles = (roleUser: string): StylesConfig<ColourOption> => ({
    control: (styles) => ({
      ...styles, backgroundColor: color, width: 170, borderRadius: 20, paddingLeft: 2,
      marginLeft: 10, marginBottom: 10, border: '1px solid #ccc'
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
            fontWeight: 'black'
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot('#ccddc') }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  });

  return (
    <Select
      defaultValue={colourOptions.find((option) => option.label === roleUser.roleUser)}
      options={colourOptions}
      styles={colourStyles(roleUser.roleUser)}
      onChange={(e) => handleChangeColor(e)}
    />
  )
};

export default UserRole;