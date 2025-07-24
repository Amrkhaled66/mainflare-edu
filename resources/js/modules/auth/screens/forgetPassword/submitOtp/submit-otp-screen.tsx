import OtpForm from './components/OtpForm';

import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import AnimatingFormHeader from '@/modules/auth/components/AnimatingFormHeader';
import PageHeader from '@/modules/auth/components/PageHeader';

import paths from '@/routes/paths';
import { Link } from 'react-router';
const SubmitOtpScreen = () => {
    return (
        <div className={`flex h-full w-full flex-col justify-start gap-y-8 text-textColor lg:h-fit lg:max-w-[70%]`}>
            <PageHeader />
            <div className="h-full w-full space-y-5">
                <AnimatingFormHeader>
                    <h1 className="text-2xl font-bold lg:text-3xl">التحقق من رقم الهاتف</h1>
                </AnimatingFormHeader>
                <AnimatingFormBody>
                    <OtpForm
                        otp={['', '', '', '']}
                        setOtp={() => {}}
                        handleChangePhone={() => {}}
                        phone="01066244158"
                        error=""
                        isSendOtpPending={false}
                        onResend={() => {}}
                    ></OtpForm>
                    <Link to={paths.resetPassword.path}>dd</Link>
                </AnimatingFormBody>
            </div>
        </div>
    );
};

export default SubmitOtpScreen;
