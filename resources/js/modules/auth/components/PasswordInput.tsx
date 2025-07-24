import FormInput from '@/shared/components/ui/FormInput';
import React, { useState } from 'react';

interface PasswordInputProps {
    label?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputClassName?: string;
    containerClassName?: string;
    error?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    label,
    value,
    name,
    placeholder,
    onChange,
    inputClassName = '',
    containerClassName = '',
    error,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <label dir="rtl" className={`flex flex-col gap-y-4 font-medium text-textColor ${containerClassName}`}>
            {label && <span className="font-bold">{label}</span>}

            <div className="relative">
                <FormInput
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={` ${inputClassName}`}
                />
                <button type="button" onClick={toggleVisibility} className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-600">
                    {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9.76379 5.29519C10.4662 5.10724 11.2121 5 11.9997 5C15.7571 5 18.5637 7.4404 20.2324 9.43934C21.4845 10.9394 21.4844 13.0609 20.2322 14.5609C20.0403 14.7907 19.8334 15.0264 19.6117 15.2635M12.4998 9.04148C13.756 9.25224 14.7475 10.2437 14.9583 11.5M2.99976 3L20.9998 21M11.4998 14.9585C10.4156 14.7766 9.5286 14.0132 9.17047 13M4.3489 8.77822C4.14189 9.00124 3.94797 9.22274 3.76737 9.43907C2.51518 10.9391 2.51498 13.0606 3.76715 14.5607C5.4358 16.5596 8.24239 19 11.9998 19C12.8019 19 13.5606 18.8888 14.2742 18.6944"
                                stroke="#616161"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
                                stroke="#616161"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                                stroke="#616161"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}
        </label>
    );
};

export default PasswordInput;
