import React from 'react';

export interface FormData {
    [key: string]: string | number | File | null | undefined;
}

export interface FormErrors {
    [key: string]: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: FormErrors;
}

export interface ApiResponse {
    success: boolean;
    message?: string;
    data?: any;
    errors?: FormErrors;
}

export interface CrudResult {
    success: boolean;
    data?: any;
    error?: any;
}

export interface ArabicFormData extends FormData {
    firstName: string;
    lastName: string;
    phone: string;
}

export type InputType = 'text' | 'textarea' | 'file' | 'select';
export type CrudOperation = 'create' | 'update' | 'delete';

export const a2e = (str: string): string => {
    if (!str) return str;
    return str.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString());
};

export const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | any,
    id: string = '',
    data: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>,
): void => {
    const currentData = { ...data };

    const { currentTarget: input } = event;
    const fieldName = input.name || input.id || id;

    if (input.type === 'select') {
        let value: any;
        if (input.isMulti) {
            value = input.value.map((e: any) => e.value);
        } else {
            value = input.value.value || input.value;
        }
        currentData[fieldName] = value;
    } else if (input.type === 'file') {
        currentData[fieldName] = input.files?.[0] || null;
    } else {
        currentData[fieldName] = input.value;
    }

    if (fieldName.includes('phone') && input.type === 'text') {
        currentData[fieldName] = a2e(currentData[fieldName] as string);
    }

    setData(currentData);
};

export const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
    callBack: () => Promise<void> | void,
): void => {
    e.preventDefault();
    setErrors({});
    callBack();
};

export const handleFormErrors = (
    response: any,
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
    scrollTop: boolean = true,
): void => {
    if (scrollTop) {
        window.scrollTo(0, 0);
    }
    if (!(response.status < 500)) {
        return;
    }

    let errorsArray: FormErrors = {};
    if (response.data && response.data.errors) {
        errorsArray = response.data.errors;
    } else if (response.data && response.data.message) {
        errorsArray = { general: response.data.message };
    }

    setErrors(errorsArray);
};

export const getFormData = (data: FormData): globalThis.FormData => {
    const formData = new globalThis.FormData();
    Object.keys(data).forEach((index) => {
        const value = data[index];
        if (value !== null && value !== undefined) {
            if (value instanceof File) {
                formData.append(index, value);
            } else {
                formData.append(index, String(value));
            }
        }
    });
    return formData;
};

export const validateArabicForm = (data: ArabicFormData): ValidationResult => {
    const errors: FormErrors = {};

    if (!data.firstName || !data.firstName.trim()) {
        errors.firstName = 'الاسم الاول مطلوب';
    }

    if (!data.lastName || !data.lastName.trim()) {
        errors.lastName = 'الاسم الاخير مطلوب';
    }

    if (!data.phone || !data.phone.trim()) {
        errors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(data.phone)) {
        errors.phone = 'رقم الهاتف غير صحيح';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const submitFormData = async (data: FormData, endpoint: string, method: string = 'POST'): Promise<CrudResult> => {
    try {
        const formData = getFormData(data);

        const response = await fetch(endpoint, {
            method: method,
            body: formData,
        });

        if (!response.ok) {
            throw response;
        }

        const result = await response.json();
        return { success: true, data: result };
    } catch (error) {
        return { success: false, error };
    }
};

export const showSuccessMessage = (title: string, message: string): void => {
    alert(`${title}\n${message}`);
};

export const clearFormData = (
    initialState: FormData,
    setData: React.Dispatch<React.SetStateAction<FormData>>,
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
): void => {
    setData(initialState);
    setErrors({});
    setIsLoading(false);
};

export const handleFormCrud = async (
    data: ArabicFormData,
    endpoint: string,
    itemName: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setErrors: React.Dispatch<React.SetStateAction<FormErrors>>,
    setData: React.Dispatch<React.SetStateAction<FormData>>,
    initialState: FormData,
    operation: CrudOperation = 'create',
): Promise<boolean> => {
    try {
        const validation = validateArabicForm(data);
        if (!validation.isValid) {
            setErrors(validation.errors);
            setIsLoading(false);
            return false;
        }

        const method = operation === 'create' ? 'POST' : 'PUT';
        const result = await submitFormData(data, endpoint, method);

        if (result.success) {
            const successTitle = operation === 'create' ? `تم إضافة ${itemName} بنجاح` : `تم تحديث ${itemName} بنجاح`;

            showSuccessMessage(successTitle, result.data?.message || 'تم العملية بنجاح');
            clearFormData(initialState, setData, setErrors, setIsLoading);
            return true;
        } else {
            handleFormErrors(result.error, setIsLoading, setErrors);
            return false;
        }
    } catch (error) {
        console.error('Form CRUD error:', error);
        setIsLoading(false);
        return false;
    }
};
