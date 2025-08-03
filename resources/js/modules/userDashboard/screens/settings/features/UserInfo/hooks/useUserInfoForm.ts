import { useState, useCallback } from 'react';

// Types
interface ComboBoxOption {
  name: string;
  value?: string | number;
}

interface UserInfoFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  city: string;
  state: string;
  semester: string;
  division: string;
}

interface FormErrors {
  [key: string]: string;
}

interface UseUserInfoFormReturn {
  formData: UserInfoFormData;
  errors: FormErrors;
  isLoading: boolean;
  isSubmitted: boolean;
  handleInputChange: (name: keyof UserInfoFormData, value: string) => void;
  handleComboBoxSelect: (name: keyof UserInfoFormData, selectedValue: ComboBoxOption | string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>, onSubmit?: (data: UserInfoFormData) => Promise<void> | void) => Promise<void>;
  validateForm: () => boolean;
  resetForm: () => void;
  updateFormData: (newData: Partial<UserInfoFormData>) => void;
}

const useUserInfoForm = (initialData: Partial<UserInfoFormData> = {}): UseUserInfoFormReturn => {
  const [formData, setFormData] = useState<UserInfoFormData>({
    firstName: initialData.firstName || '',
    middleName: initialData.middleName || '',
    lastName: initialData.lastName || '',
    city: initialData.city || '',
    state: initialData.state || '',
    semester: initialData.semester || '',
    division: initialData.division || '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Handle input changes
  const handleInputChange = useCallback((name: keyof UserInfoFormData, value: string): void => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  // Handle ComboBox selections
  const handleComboBoxSelect = useCallback((name: keyof UserInfoFormData, selectedValue: ComboBoxOption | string): void => {
    const value = typeof selectedValue === 'string' 
      ? selectedValue 
      : selectedValue?.name || '';
    handleInputChange(name, value);
  }, [handleInputChange]);

  // Validation function
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};

    // Personal info validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'الاسم الأول مطلوب';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'الاسم الأخير مطلوب';
    }
    if (!formData.city) {
      newErrors.city = 'المحافظة مطلوبة';
    }
    if (!formData.state) {
      newErrors.state = 'المركز مطلوب';
    }

    // Academic info validation
    if (!formData.semester) {
      newErrors.semester = 'الفصل الدراسي مطلوب';
    }
    if (!formData.division) {
      newErrors.division = 'الشعبة مطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  // Submit handler
  const handleSubmit = useCallback(async (
    e: React.FormEvent<HTMLFormElement>, 
    onSubmit?: (data: UserInfoFormData) => Promise<void> | void
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitted(true);
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      console.log('Form submitted successfully:', formData);
    } catch (error) {
      console.error('Form submission error:', error);
      // Handle submission error - you might want to set form-level errors here
    } finally {
      setIsLoading(false);
    }
  }, [formData, validateForm]);

  // Reset form
  const resetForm = useCallback((): void => {
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      city: '',
      state: '',
      semester: '',
      division: ''
    });
    setErrors({});
    setIsSubmitted(false);
  }, []);

  // Update form data (useful for loading existing data)
  const updateFormData = useCallback((newData: Partial<UserInfoFormData>): void => {
    setFormData(prev => ({
      ...prev,
      ...newData
    }));
  }, []);

  return {
    formData,
    errors,
    isLoading,
    isSubmitted,
    handleInputChange,
    handleComboBoxSelect,
    handleSubmit,
    validateForm,
    resetForm,
    updateFormData
  };
};

export default useUserInfoForm;
export type { UserInfoFormData, FormErrors, ComboBoxOption, UseUserInfoFormReturn };