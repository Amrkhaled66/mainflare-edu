import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import paths from '@/routes/paths';
import { Link } from 'react-router';
import AnimatingFormHeader from '../../../components/AnimatingFormHeader';
import PageHeader from '../../../components/PageHeader';

import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';

import { useReset } from '@/modules/auth/context/resetCtx';
import { checkPhoneValidation } from '@/shared/utils/checkPhoneValidation';
import { useState } from 'react';
const RequestOtpScreen = () => {
    const [error, setError] = useState('');
    const { changePhone } = useReset();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const phone = formData.get('phone') as string;
        if (!phone.trim()) return setError('رقم الهاتف مطلوب');
        if (!checkPhoneValidation(phone)) return setError('رقم الهاتف غير صحيح');
        changePhone(phone);
        setError('');
    };
    
    return (
        <div className={`flex h-full w-full flex-col justify-start gap-y-8 text-textColor lg:h-fit lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full space-y-5 lg:space-y-[80px]">
                <AnimatingFormHeader>
                    <h1 className="text-2xl font-bold lg:text-3xl">هل نسيت كلمة المرور</h1>
                </AnimatingFormHeader>

                <AnimatingFormBody>
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <FormInputWithLabel
                            onChange={() => setError('')}
                            error={error}
                            mode="numeric"
                            label="رقم الهاتف"
                            type="text"
                            name="phone"
                            placeholder="رقم الهاتف"
                        />
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
