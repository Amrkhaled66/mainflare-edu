import clsx from 'clsx';

import paths from '@/routes/paths';
import { Link } from 'react-router';
import OtpInput from './OtpInput';
import TimerCountDown from './TimerCountDown';
const OtpForm = ({
    children,
    handleChangePhone,
    otp,
    setOtp,
    phone,
    error,
    isSendOtpPending,
    onResend,
    onSubmit,
}: {
    children?: React.ReactNode;
    handleChangePhone?: () => void;
    otp: string[];
    setOtp: React.Dispatch<React.SetStateAction<string[]>>;
    phone: string;
    error: string;
    isSendOtpPending: boolean;
    onResend?: () => void;
    onSubmit?: () => void;
}) => {
    return (
        <div className={clsx('flex w-full items-center justify-center')}>
            <div className={clsx('flex w-full flex-col items-center gap-5 rounded-xl border-stroke p-4 lg:p-8')}>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-2.5">
                        <div className="text-lg leading-7">أرسلنا رمز التحقق عبر رسالة نصية قصيرة إلى</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex-center relative gap-2">
                            <div className="text-sm font-bold">+{phone}</div>
                            <Link to={paths.forgetPassword.path}>
                                <button onClick={handleChangePhone} className="text-center text-sm font-bold text-mainColor hover:underline">
                                    تغيير
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center gap-8">
                    <OtpInput error={error} otp={otp} setOtp={setOtp} />
                    {children}
                    <button onClick={onSubmit} className="btn btn-primary w-full">
                        {' '}
                        التحقق{' '}
                    </button>
                    <TimerCountDown isSendOtpPending={isSendOtpPending} onResend={onResend || (() => {})} />
                </div>
            </div>
        </div>
    );
};

export default OtpForm;
