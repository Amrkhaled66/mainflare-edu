import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
import useSignIn from '../hooks/useSignIn';

const SignInForm = () => {
    const { formData, errors, handleInputChange, handleSubmit } = useSignIn();

    const isLoading = false;
    return (
        <form onSubmit={handleSubmit}>
            <AnimatingFormBody>
                <FormInputWithLabel
                    label="رقم الهاتف الاب"
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    value={formData.parentPhone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    error={errors.parentPhone}
                    mode="numeric"
                />

                <div className="space-y-4">
                    <FormInputWithLabel
                        label="رقم هاتف الطالب"
                        name="password"
                        placeholder="رقم هاتف الطالب"
                        value={formData.studentPhone}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        error={errors.studentPhone}
                    />
                    {/* <Link to={paths.forgetPassword.path} className="text-end font-bold text-mainColor hover:underline">
                        هل نسيت كلمة المرور؟
                    </Link> */}
                </div>

                <div className="space-y-8 pt-4 lg:space-y-10">
                    <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                        {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                    </button>

                    {/* <Link to={paths.signup.path} className="flex justify-center gap-x-2">
                        <span className="font-bold text-mainColor hover:underline">سجل الان</span>
                        <span>ليس لديك حساب؟</span>
                    </Link> */}
                </div>
            </AnimatingFormBody>
        </form>
    );
};

export default SignInForm;
