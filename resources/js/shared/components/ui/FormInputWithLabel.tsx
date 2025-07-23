// FormInputWithLabel.tsx
import React from 'react';
import FormInput from './FormInput';

interface FormInputWithLabelProps {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  containerClassName?: string;
}

const FormInputWithLabel: React.FC<FormInputWithLabelProps> = ({
  label,
  type,
  value,
  name,
  placeholder,
  onChange,
  inputClassName = '',
  containerClassName = '',
}) => {
  return (
    <label className={`flex flex-col gap-y-2 text-sm font-medium text-textColor ${containerClassName}`}>
      {label && <span>{label}</span>}
      <FormInput
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClassName}
      />
    </label>
  );
};

export default FormInputWithLabel;
