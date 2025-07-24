// FormInput.tsx
interface FormInputProps {
    type?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: string;
    mode?: 'numeric' | 'text';
}

const FormInput = ({ type = 'text', value, name, placeholder, onChange, className = '', error, mode }: FormInputProps) => {
    return (
        <input
            dir="rtl"
            type={type}
            inputMode={mode || 'text'}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={`animate h-12 w-full rounded-2xl focus:bg-[#F8F8FF] border border-stroke bg-bgBackground px-4 font-normal outline-none focus:border-mainColor ${className} ${error && '!border-red-600'}`}
        />
    );
};

export default FormInput;
