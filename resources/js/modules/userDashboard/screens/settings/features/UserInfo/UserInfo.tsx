import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import ComboBox from '@/shared/components/ui/ComboBox';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
import { cityOptions, divisionOptions, semesterOptions, stateOptions } from './data';
import useUserInfoForm, { UserInfoFormData } from './hooks/useUserInfoForm'; // Adjust import path as needed

const UserInfo: React.FC = () => {
    const { formData, errors, isLoading, handleInputChange, handleComboBoxSelect, handleSubmit } = useUserInfoForm();

    const onSubmit = async (data: UserInfoFormData): Promise<void> => {
        // Add your API call here
        console.log('Submitting data:', data);
        // Example: await updateUserInfo(data);
    };

    return (
        <form className="flex flex-col gap-y-5" onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <div className="grid grid-cols-1  gap-6 lg:grid-cols-2">
                <DashBoardContainer>
                    <div className="border-b border-b-stroke pb-3">
                        <p className="text-xl font-semibold">معلوماتك الشخصية</p>
                        <p className="text-subTitle">بياناتك الأساسية وملفك الشخصي</p>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <FormInputWithLabel
                                inputClassName="bg-white"
                                label="الاسم الاول"
                                name="firstName"
                                placeholder="الاسم الاول"
                                value={formData.firstName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('firstName', e.target.value)}
                            />
                            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                        </div>

                        <div>
                            <FormInputWithLabel
                                inputClassName="bg-white"
                                label="الوسط"
                                type="text"
                                name="middleName"
                                placeholder="الاسم الأوسط"
                                value={formData.middleName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('middleName', e.target.value)}
                            />
                            {errors.middleName && <p className="mt-1 text-sm text-red-600">{errors.middleName}</p>}
                        </div>

                        <div>
                            <FormInputWithLabel
                                inputClassName="bg-white"
                                label="الاسم الاخير"
                                name="lastName"
                                placeholder="الاسم الاخير"
                                value={formData.lastName}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('lastName', e.target.value)}
                            />
                            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                        </div>

                        <div>
                            <ComboBox
                                label="المحافظة"
                                name="city"
                                value={formData.city}
                                options={cityOptions}
                                onSelected={(value) => handleComboBoxSelect('city', value)}
                            />
                            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
                        </div>

                        <div>
                            <ComboBox
                                label="المركز"
                                name="state"
                                value={formData.state}
                                options={stateOptions}
                                onSelected={(value) => handleComboBoxSelect('state', value)}
                            />
                            {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state}</p>}
                        </div>
                    </div>
                </DashBoardContainer>

                <DashBoardContainer>
                    <div className="border-b border-b-stroke pb-3">
                        <p className="text-xl font-semibold">معلوماتك الدراسية</p>
                        <p className="text-subTitle">معلوماتك الدراسية وببانات دراستك</p>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <ComboBox
                                label="الفصل الدراسي"
                                name="semester"
                                value={formData.semester}
                                options={semesterOptions}
                                onSelected={(value) => handleComboBoxSelect('semester', value)}
                            />
                            {errors.semester && <p className="mt-1 text-sm text-red-600">{errors.semester}</p>}
                        </div>

                        <div>
                            <ComboBox
                                label="الشعبة"
                                name="division"
                                value={formData.division}
                                options={divisionOptions}
                                onSelected={(value) => handleComboBoxSelect('division', value)}
                            />
                            {errors.division && <p className="mt-1 text-sm text-red-600">{errors.division}</p>}
                        </div>
                    </div>
                </DashBoardContainer>
            </div>

            <button type="submit" className="btn btn-primary mr-auto w-[200px]" disabled={isLoading}>
                تجديد البيانات
            </button>
        </form>
    );
};

export default UserInfo;
