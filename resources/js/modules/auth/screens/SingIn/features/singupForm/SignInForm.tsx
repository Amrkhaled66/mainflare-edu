import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import PasswordInput from '@/modules/auth/components/PasswordInput';
import paths from '@/routes/paths';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
import { Link } from 'react-router';
import useSignIn from '../../hooks/useSignInForm';

const SignInForm = () => {
    const { formData, errors, handleInputChange, handleSubmit } = useSignIn();

    const isLoading = false;
    return (
        <form onSubmit={handleSubmit}>
            <AnimatingFormBody>
                <FormInputWithLabel
                    label="رقم الهاتف"
                    type="tel"
                    name="phone"
                    placeholder="رقم الهاتف"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    error={errors.phone}
                    mode="numeric"
                />

                <div className="space-y-4">
                    <PasswordInput
                        label="كلمة المرور"
                        name="password"
                        placeholder="كلمة المرور"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        error={errors.password}
                    />
                    <Link to={paths.forgetPassword.path} className="text-end font-bold text-mainColor hover:underline">
                        هل نسيت كلمة المرور؟
                    </Link>
                </div>

                <div className=" space-y-8 lg:space-y-10 pt-4">
                    <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                        {isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                    </button>

                    <Link to={paths.signup.path} className="flex justify-center gap-x-2">
                        <span className="font-bold text-mainColor hover:underline">سجل الان</span>
                        <span>ليس لديك حساب؟</span>
                    </Link>
                </div>
            </AnimatingFormBody>
        </form>
    );
};

export default SignInForm;
