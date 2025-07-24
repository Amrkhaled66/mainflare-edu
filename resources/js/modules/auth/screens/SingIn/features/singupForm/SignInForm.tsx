import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import PasswordInput from '@/modules/auth/components/PasswordInput';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
import { Link } from 'react-router';

const SignInForm = () => {
    return (
        <AnimatingFormBody>
            <FormInputWithLabel label="رقم الهاتف" type="text" name="name" placeholder="اسم المستخدم" />
            <div className="space-y-4">
                <PasswordInput label="كلمة المرور" name="name" placeholder="كلمة المرور" />
                <Link to={'/auth/forgot-password'} className="text-end font-bold text-mainColor hover:underline">
                    هل نسيت كلمة المرور؟
                </Link>
            </div>
            <div className="space-y-10 pt-4">
                <button className="btn btn-primary w-full"> تسجيل الدخول</button>
                <Link to="/auth/signup" className="justify-center flex gap-x-2 ">

                    <span className="font-bold  hover:underline text-mainColor">سجل الان  </span>
                    <span>ليس لديك حساب؟</span>
                </Link>
            </div>
        </AnimatingFormBody>
    );
};

export default SignInForm;
