import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import paths from '@/routes/paths';
import usePageTitle from '@/shared/hooks/usePageTitle';
import { Link } from 'react-router';
import AnimatingFormHeader from '../../../components/AnimatingFormHeader';
import PageHeader from '../../../components/PageHeader';

import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';

const RequestOtpScreen = () => {
    usePageTitle(paths.forgetPassword.crumb);
    return (
        <div className={`flex h-full w-full flex-col justify-start gap-y-8 text-textColor lg:h-fit lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full space-y-5 lg:space-y-[80px]">
                <AnimatingFormHeader>
                    <h1 className="text-2xl font-bold lg:text-3xl">هل نسيت كلمة المرور</h1>
                </AnimatingFormHeader>

                <AnimatingFormBody>
                    <form className="space-y-8">
                        <FormInputWithLabel mode="numeric" label="رقم الهاتف" type="text" name="phone" placeholder="رقم الهاتف" />
                        <Link to={paths.checkOtp.path}>ddd</Link>
                        <button className="btn btn-primary w-full">ارسال</button>
                        <Link className="flex-center gap-x-2" to={paths.signup.path}>
                            <span className="font-bold hover:underline">انشئ حسابك الان</span>
                            <span>ليس لديك حساب؟</span>
                        </Link>
                    </form>
                </AnimatingFormBody>
            </div>
        </div>
    );
};

export default RequestOtpScreen;
