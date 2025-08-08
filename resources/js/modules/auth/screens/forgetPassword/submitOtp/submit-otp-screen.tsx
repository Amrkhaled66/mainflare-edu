import OtpForm from './components/OtpForm';

import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import AnimatingFormHeader from '@/modules/auth/components/AnimatingFormHeader';
import PageHeader from '@/modules/auth/components/PageHeader';

import { useReset } from '@/modules/auth/context/resetCtx';
import paths from '@/routes/paths';
import { useState } from 'react';
import { Link, Navigate } from 'react-router';
const SubmitOtpScreen = () => {
    const { phone, changePhone, changeToken } = useReset();
    const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
    const [error, setError] = useState('');

    const handleChangePhone = () => {
        changePhone('');
        changeToken('');
    };

    const handleSubmit = () => {
        if (otp.join('').length !== 4) return setError('برجاء ادخال كود التحقق');
        return setError('');
        // submitOtp(
        //   { phone_number: phone, otp: otp.join("") },
        //   {
        //     onSuccess: (data) => {
        //       setToken(data.token);
        //       navigate("/forgot-password/reset-password");
        //     },
        //     onError: () => {
        //       setError(tErrors("invlidOtp"));
        //     },
        //   },
        // );
    };

    // if (!phone.trim()) return <Navigate to={paths.forgetPassword.path} />;
    return (
        <div className={`flex h-full w-full flex-col justify-start gap-y-8 text-textColor lg:h-fit lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full space-y-5">
                <AnimatingFormHeader>
                    <h1 className="text-2xl font-bold lg:text-3xl">التحقق من رقم الهاتف</h1>
                </AnimatingFormHeader>
                <AnimatingFormBody>
                    <OtpForm
                        otp={otp}
                        setOtp={setOtp}
                        handleChangePhone={handleChangePhone}
                        phone="01066244158"
                        error={error}
                        isSendOtpPending={false}
                        onResend={() => {}}
                        onSubmit={handleSubmit}
                    ></OtpForm>
                    <Link to={paths.resetPassword.path}>dd</Link>
                </AnimatingFormBody>
            </div>
        </div>
    );
};

export default SubmitOtpScreen;
