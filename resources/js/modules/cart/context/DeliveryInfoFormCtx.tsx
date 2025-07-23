import { createContext, ReactNode, useContext, useState } from 'react';
import { checkPhoneValidation } from '@/shared/utils/checkPhoneValidation';

interface DeliveryFormData {
    name: string;
    phone: string;
    alternativePhone: string;
    city: string;
    area: string;
    detailedAddress: string;
}

interface DeliveryFormErrors {
    name?: string;
    phone?: string;
    alternativePhone?: string;
    city?: string;
    area?: string;
    detailedAddress?: string;
}

interface ComboBoxOption {
    name: string;
}

interface DeliveryInfoContextValue {
    formData: DeliveryFormData;
    errors: DeliveryFormErrors;
    isSubmitting: boolean;
    handleInputChange: (field: keyof DeliveryFormData, value: string) => void;
    handleCitySelect: (selectedCity: ComboBoxOption) => void;
    handleAreaSelect: (selectedArea: ComboBoxOption) => void;
    handleSubmit: (onSubmit: (data: DeliveryFormData) => Promise<void>) => Promise<boolean>;
    resetForm: () => void;
    isValid: () => string | boolean;
    validate: () => boolean;
}

interface DeliveryInfoProviderProps {
    children: ReactNode;
    initialValues?: Partial<DeliveryFormData>;
}

const DeliveryInfoContext = createContext<DeliveryInfoContextValue | undefined>(undefined);

export const DeliveryInfoProvider: React.FC<DeliveryInfoProviderProps> = ({ children, initialValues = {} }) => {
    const [formData, setFormData] = useState<DeliveryFormData>({
        name: '',
        phone: '',
        alternativePhone: '',
        city: '',
        area: '',
        detailedAddress: '',
        ...initialValues,
    });

    const [errors, setErrors] = useState<DeliveryFormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (field: keyof DeliveryFormData, value: string): void => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: '',
            }));
        }
    };

    const handleCitySelect = (selectedCity: ComboBoxOption): void => {
        setFormData((prev) => ({
            ...prev,
            city: selectedCity.name,
            area: '', // Reset area when city changes
        }));

        if (errors.city) {
            setErrors((prev) => ({
                ...prev,
                city: '',
            }));
        }
    };

    const handleAreaSelect = (selectedArea: ComboBoxOption): void => {
        setFormData((prev) => ({
            ...prev,
            area: selectedArea.name,
        }));

        if (errors.area) {
            setErrors((prev) => ({
                ...prev,
                area: '',
            }));
        }
    };

    const validate = (): boolean => {
        const newErrors: DeliveryFormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'الاسم مطلوب';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'رقم الهاتف مطلوب';
        } else if (checkPhoneValidation(formData.phone)) {
            newErrors.phone = 'رقم الهاتف غير صحيح';
        }

        if (formData.alternativePhone && !checkPhoneValidation(formData.alternativePhone)) {
            newErrors.alternativePhone = 'رقم الهاتف الاضافي غير صحيح';
        }

        if (!formData.city) {
            newErrors.city = 'المدينة مطلوبة';
        }

        if (!formData.area) {
            newErrors.area = 'المنطقة مطلوبة';
        }

        if (!formData.detailedAddress.trim()) {
            newErrors.detailedAddress = 'العنوان بالتفصيل مطلوب';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Submit handler
    const handleSubmit = async (onSubmit: (data: DeliveryFormData) => Promise<void>): Promise<boolean> => {
      if (!validate()) {
            return false;
        }

        setIsSubmitting(true);

        try {
            await onSubmit(formData);
            return true;
        } catch (error) {
            console.log('Form error', error);
            return false;
        } finally {
            setIsSubmitting(false);
        }
    };

    // Reset form
    const resetForm = (): void => {
        setFormData({
            name: '',
            phone: '',
            alternativePhone: '',
            city: '',
            area: '',
            detailedAddress: '',
        });
        setErrors({});
        setIsSubmitting(false);
    };

    // Check if form is valid
    const isValid = (): boolean | string => {
        return (
            formData.name.trim() &&
            formData.phone.trim() &&
            formData.city &&
            formData.area &&
            formData.detailedAddress.trim() &&
            Object.keys(errors).length === 0
        );
    };

    const contextValue: DeliveryInfoContextValue = {
        formData,
        errors,
        isSubmitting,
        handleInputChange,
        handleCitySelect,
        handleAreaSelect,
        handleSubmit,
        resetForm,
        isValid,
        validate,
    };

    return <DeliveryInfoContext.Provider value={contextValue}>{children}</DeliveryInfoContext.Provider>;
};

// Custom hook to use the context
export const useDeliveryInfo = (): DeliveryInfoContextValue => {
    const context = useContext(DeliveryInfoContext);

    if (context === undefined) {
        throw new Error('useDeliveryInfo must be used within a DeliveryInfoProvider');
    }

    return context;
};

// Export types for external use
export type { ComboBoxOption, DeliveryFormData, DeliveryFormErrors };
