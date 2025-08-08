import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import PasswordInput from '@/modules/auth/components/PasswordInput';
import ComboBox from '@/shared/components/ui/ComboBox';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
import { Link } from 'react-router';
import useSignUp from '../hooks/useSignupForm';

const SignUpForm = () => {
    const { formData, errors, isLoading, handleInputChange, handleComboBoxChange, handleSubmit } = useSignUp();

    const semesterOptions = [{ name: 'الصف الأول الثانوي' }, { name: 'الصف الثاني الثانوي' }, { name: 'الصف الثالث الثانوي' }];

    const divisionOptions = [{ name: 'أدبي' }, { name: 'علمي' }];

    return (
        <form onSubmit={handleSubmit}>
            <AnimatingFormBody>
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-2">
                    <FormInputWithLabel
                        label="الاسم الاول"
                        type="text"
                        name="firstName"
                        placeholder="الاسم الأول"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        error={errors.firstName}
                    />
                    <FormInputWithLabel
                        label="الاسم التاني"
                        type="text"
                        name="middleName"
                        placeholder="الاسم التاني"
                        value={formData.middleName}
                        onChange={(e) => handleInputChange('middleName', e.target.value)}
                        error={errors.middleName}
                    />
                    {/* <div className="col-span-2 lg:col-span-1">
                        <FormInputWithLabel
                            label="الاسم الاخير"
                            type="text"
                            name="lastName"
                            placeholder="الاسم الأخير"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            error={errors.lastName}
                        />
                    </div> */}
                </div>

                <FormInputWithLabel
                    mode="numeric"
                    label="رقم الهاتف"
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    error={errors.phone}
                />

                <PasswordInput
                    label="كلمة المرور"
                    name="password"
                    placeholder="كلمة المرور"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    error={errors.password}
                />
                <PasswordInput
                    label="تاكيد كلمة المرور"
                    name="confirmPassword"
                    placeholder="تأكيد كلمة المرور"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    error={errors.confirmPassword}
                />

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div>
                        <ComboBox
                            label="الفصل الدراسي"
                            name="semester"
                            value={formData.semester}
                            options={semesterOptions}
                            onSelected={(value) => handleComboBoxChange('semester', value.name)}
                        />
                        {errors.semester && <p className="mt-1 text-sm text-red-600">{errors.semester}</p>}
                    </div>
                    <div>
                        <ComboBox
                            label="الشعبة"
                            name="division"
                            value={formData.division}
                            options={divisionOptions}
                            onSelected={(value) => handleComboBoxChange('division', value.name)}
                        />
                        {errors.division && <p className="mt-1 text-sm text-red-600">{errors.division}</p>}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <FormInputWithLabel
                        mode="numeric"
                        label="رقم هاتف الطالب"
                        type="tel"
                        name="studentPhone"
                        placeholder="رقم هاتف الطالب"
                        value={formData.studentPhone}
                        onChange={(e) => handleInputChange('studentPhone', e.target.value)}
                        error={errors.studentPhone}
                    />
                    <FormInputWithLabel
                        mode="numeric"
                        label="الرقم القومي"
                        type="text"
                        name="nationalId"
                        placeholder="الرقم القومي"
                        value={formData.nationalId}
                        onChange={(e) => handleInputChange('nationalId', e.target.value)}
                        error={errors.nationalId}
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <FormInputWithLabel
                        mode="numeric"
                        label="رقم هاتف الاب"
                        type="tel"
                        name="fatherPhone"
                        placeholder="رقم هاتف الأب"
                        value={formData.fatherPhone}
                        onChange={(e) => handleInputChange('fatherPhone', e.target.value)}
                        error={errors.fatherPhone}
                    />
                    <FormInputWithLabel
                        mode="numeric"
                        label="رقم هاتف الام"
                        type="tel"
                        name="motherPhone"
                        placeholder="رقم هاتف الأم"
                        value={formData.motherPhone}
                        onChange={(e) => handleInputChange('motherPhone', e.target.value)}
                        error={errors.motherPhone}
                    />
                </div>

                {errors.general && <div className="text-center text-sm text-red-600">{errors.general}</div>}

                <div className="space-y-8 text-center">
                    <button type="submit" className="btn btn-primary mt-4 w-full" disabled={isLoading}>
                        {isLoading ? 'جاري إنشاء الحساب...' : 'انشاء الحساب'}
                    </button>
                    <Link to={'/auth/login'} className="font-bold text-mainColor hover:underline lg:hidden">
                        <span>لديك حساب بالفعل ؟ </span>
                        <span>الدخول الي حسابك</span>
                    </Link>
                </div>
            </AnimatingFormBody>
        </form>
    );
};

export default SignUpForm;
