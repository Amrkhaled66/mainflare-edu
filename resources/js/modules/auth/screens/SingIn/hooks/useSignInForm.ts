import { useState } from 'react';
interface SignInFormData {
    phone: string;
    password: string;
}

interface SignInErrors {
    phone?: string;
    password?: string;
}

interface UseSignInReturn {
    formData: SignInFormData;
    errors: SignInErrors;
    handleInputChange: (name: string, value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    clearError: (field: keyof SignInErrors) => void;
}

const useSignIn = (): UseSignInReturn => {
    const [formData, setFormData] = useState<SignInFormData>({
        phone: '',
        password: '',
    });

    const [errors, setErrors] = useState<SignInErrors>({});

    const validateForm = (): boolean => {
        const newErrors: SignInErrors = {};

        if (!formData.phone.trim()) {
            newErrors.phone = 'رقم الهاتف مطلوب';
        }

        if (!formData.password) {
            newErrors.password = 'كلمة المرور مطلوبة';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name as keyof SignInErrors]) {
            setErrors((prev) => ({
                ...prev,
                [name]: undefined,
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setErrors({});

        console.log('Sign In Form Data:', {
            phone: formData.phone,
            password: formData.password,
            timestamp: new Date().toISOString(),
        });
    };

    const clearError = (field: keyof SignInErrors) => {
        setErrors((prev) => ({
            ...prev,
            [field]: undefined,
        }));
    };

    return {
        formData,
        errors,
        handleInputChange,
        handleSubmit,
        clearError,
    };
};

export default useSignIn;
