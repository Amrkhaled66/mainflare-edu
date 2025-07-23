// FormInput.tsx
interface FormInputProps {
    type?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    error?: string;
}

const FormInput = ({ type = 'text', value, name, placeholder, onChange, className = '', error }: FormInputProps) => {
    return (
        <input
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={`animate h-12 w-full rounded-2xl border border-stroke bg-bgBackground px-4 font-normal outline-none focus:border-mainColor ${className}`}
        />
    );
};

export default FormInput;
