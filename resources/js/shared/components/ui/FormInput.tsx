// FormInput.tsx
interface FormInputProps {
    type?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
  }
  
  const FormInput = ({
    type = 'text',
    value,
    name,
    placeholder,
    onChange,
    className = '',
  }: FormInputProps) => {
    return (
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full animate h-12 px-4 font-normal rounded-2xl border border-stroke bg-bgBackground outline-none focus:border-mainColor ${className}`}
      />
    );
  };
  
  export default FormInput;
  