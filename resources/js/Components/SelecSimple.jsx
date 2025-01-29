import React from 'react';
import Select from 'react-select';

const SelecSimple = ({options, className, labelClassName, ...props }) => {
  return (

    <Select
        options={options}
        className={className}
        placeholder = "Selecciona una opción..."
        styles={{
        control: (base) => ({
            ...base,
            borderColor: 'gray',
            '&:hover': { borderColor: 'blue' },
        }),
        }}
        {...props}
    />
  );
};


export default SelecSimple;
