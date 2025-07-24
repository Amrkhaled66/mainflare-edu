import clsx from 'clsx';

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
}: {
    children?: React.ReactNode;
    handleChangePhone?: () => void;
    otp: string[];
    setOtp: React.Dispatch<React.SetStateAction<string[]>>;
    phone: string;
    error: string;
    isSendOtpPending: boolean;
    onResend?: () => void;
}) => {
    return (
        <div className={clsx('flex w-full items-center justify-center')}>
            <div className={clsx('flex w-full flex-col items-center gap-5 rounded-xl border-stroke p-4 lg:p-8')}>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-2.5">
                        <div className="text-lg leading-7">أرسلنا رمز التحقق عبر رسالة نصية قصيرة إلى</div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="relative flex items-start justify-center gap-2">
                            <div className="outline-Color-Primary absolute top-[18px] left-[125px] h-0 w-12 outline-offset-[-0.50px]"></div>
                            <div className="text-sm font-bold">+{phone}</div>
                            {handleChangePhone && (
                                <button onClick={handleChangePhone} className="text-center text-sm font-bold text-mainColor hover:underline">
                                    تغيير
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex w-full flex-col items-center gap-8">
                    <OtpInput error={error} otp={otp} setOtp={setOtp} />
                    {children}
                    <button className="btn btn-primary w-full"> التحقق </button>
                    <TimerCountDown isSendOtpPending={isSendOtpPending} onResend={onResend || (() => {})} />
                </div>
            </div>
        </div>
    );
};

export default OtpForm;
