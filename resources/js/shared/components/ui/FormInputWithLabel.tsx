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
    error?: string;
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
    error,
}) => {
    return (
        <label dir="rtl" className={`flex flex-col gap-y-4  font-medium text-textColor ${containerClassName}`}>
            {label && <span className="font-bold">{label}</span>}
            <FormInput type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} className={inputClassName} />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </label>
    );
};

export default FormInputWithLabel;
