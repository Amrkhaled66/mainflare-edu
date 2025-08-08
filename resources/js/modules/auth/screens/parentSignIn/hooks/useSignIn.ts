import { useState } from 'react';
interface SignInFormData {
    parentPhone: string;
    studentPhone: string;
}

interface SignInErrors {
    parentPhone?: string;
    studentPhone?: string;
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
        parentPhone: '',
        studentPhone: '',
    });

    const [errors, setErrors] = useState<SignInErrors>({});

    const validateForm = (): boolean => {
        const newErrors: SignInErrors = {};

        if (!formData.parentPhone.trim()) {
            newErrors.parentPhone = 'رقم هاتف الاب مطلوب';
        }

        if (!formData.studentPhone) {
            newErrors.studentPhone ='رقم هاتف الطالب مطلوب';
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
            parentPhone: formData.parentPhone,
            studentPhone: formData.studentPhone,
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
