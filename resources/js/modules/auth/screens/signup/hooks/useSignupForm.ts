import { useState } from 'react';
import { checkPhoneValidation } from '@/shared/utils/checkPhoneValidation';
interface SignUpFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  phone: string;
  password: string;
  confirmPassword: string;
  semester: string;
  division: string;
  studentPhone: string;
  nationalId: string;
  fatherPhone: string;
  motherPhone: string;
}

interface SignUpErrors {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  semester?: string;
  division?: string;
  studentPhone?: string;
  nationalId?: string;
  fatherPhone?: string;
  motherPhone?: string;
  general?: string;
}

interface UseSignUpReturn {
  formData: SignUpFormData;
  errors: SignUpErrors;
  isLoading: boolean;
  handleInputChange: (name: string, value: string) => void;
  handleComboBoxChange: (name: string, value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  clearError: (field: keyof SignUpErrors) => void;
}

const useSignUp = (): UseSignUpReturn => {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    semester: '',
    division: '',
    studentPhone: '',
    nationalId: '',
    fatherPhone: '',
    motherPhone: '',
  });

  const [errors, setErrors] = useState<SignUpErrors>({});
  const [isLoading, setIsLoading] = useState(false);



  const validateNationalId = (id: string): boolean => {
    return /^\d{14}$/.test(id.trim());
  };

  const validateForm = (): boolean => {
    const newErrors: SignUpErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'الاسم الأول مطلوب';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'الاسم الأول يجب أن يكون حرفين على الأقل';
    }

    if (!formData.middleName.trim()) {
      newErrors.middleName = 'الاسم الأوسط مطلوب';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'الاسم الأخير مطلوب';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'الاسم الأخير يجب أن يكون حرفين على الأقل';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!checkPhoneValidation(formData.phone)) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }

    if (!formData.password) {
      newErrors.password = 'كلمة المرور مطلوبة';
    } else if (formData.password.length < 8) {
      newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'تأكيد كلمة المرور مطلوب';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمة المرور غير متطابقة';
    }

    if (!formData.semester) {
      newErrors.semester = 'الفصل الدراسي مطلوب';
    }

    if (!formData.division) {
      newErrors.division = 'الشعبة مطلوبة';
    }

    if (!formData.studentPhone.trim()) {
      newErrors.studentPhone = 'رقم هاتف الطالب مطلوب';
    } else if (!checkPhoneValidation(formData.studentPhone)) {
      newErrors.studentPhone = 'رقم هاتف الطالب غير صحيح';
    }

    if (!formData.nationalId.trim()) {
      newErrors.nationalId = 'الرقم القومي مطلوب';
    } else if (!validateNationalId(formData.nationalId)) {
      newErrors.nationalId = 'الرقم القومي يجب أن يكون 14 رقم';
    }

    if (!formData.fatherPhone.trim()) {
      newErrors.fatherPhone = 'رقم هاتف الأب مطلوب';
    } else if (!checkPhoneValidation(formData.fatherPhone)) {
      newErrors.fatherPhone = 'رقم هاتف الأب غير صحيح';
    }

    if (!formData.motherPhone.trim()) {
      newErrors.motherPhone = 'رقم هاتف الأم مطلوب';
    } else if (!checkPhoneValidation(formData.motherPhone)) {
      newErrors.motherPhone = 'رقم هاتف الأم غير صحيح';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof SignUpErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleComboBoxChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user selects
    if (errors[name as keyof SignUpErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Console log the form data as requested
      console.log('Sign Up Form Data:', {
        personalInfo: {
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          nationalId: formData.nationalId,
        },
        academicInfo: {
          semester: formData.semester,
          division: formData.division,
        },
        contactInfo: {
          phone: formData.phone,
          studentPhone: formData.studentPhone,
          fatherPhone: formData.fatherPhone,
          motherPhone: formData.motherPhone,
        },
        credentials: {
          password: formData.password,
          // Note: In real app, don't log passwords
        },
        timestamp: new Date().toISOString()
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would normally make your API call
      // const response = await signUpAPI(formData);
      
    } catch (error) {
      setErrors({
        general: 'حدث خطأ أثناء إنشاء الحساب. يرجى المحاولة مرة أخرى.'
      });
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = (field: keyof SignUpErrors) => {
    setErrors(prev => ({
      ...prev,
      [field]: undefined
    }));
  };

  return {
    formData,
    errors,
    isLoading,
    handleInputChange,
    handleComboBoxChange,
    handleSubmit,
    clearError
  };
};

export default useSignUp;