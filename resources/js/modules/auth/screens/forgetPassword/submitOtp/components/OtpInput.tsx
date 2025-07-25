import { useRef } from 'react';

export default function OtpInput({ otp, setOtp, error }: { otp: string[]; setOtp: React.Dispatch<React.SetStateAction<string[]>>; error: string }) {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!/^[0-9]{1}$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'Tab' && !e.metaKey) {
            e.preventDefault();
        }

        if (e.key === 'Delete' || e.key === 'Backspace') {
            const index = inputRefs.current.findIndex((input) => input === e.target);
            if (index > 0) {
                setOtp((prevOtp) => [...prevOtp.slice(0, index - 1), '', ...prevOtp.slice(index)]);
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;
        const index = inputRefs.current.indexOf(target);
        if (target.value) {
            setOtp((prevOtp: string[]) => [...prevOtp.slice(0, index), target.value, ...prevOtp.slice(index + 1)]);
            if (index < otp.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text');
        if (!new RegExp(`^[0-9]{${otp.length}}$`).test(text)) {
            return;
        }
        const digits = text.split('');
        setOtp(digits);
    };

    return (
        <div className="space-y-4">
            <form id="otp-form" className="mx-auto flex w-fit gap-2">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        onFocus={handleFocus}
                        onPaste={handlePaste}
                        ref={(el) => {
                            inputRefs.current[index] = el;
                        }}
                        className={`"text-gray-5 animate flex h-16 w-16 items-center justify-center rounded-2xl border ${error ? 'border-red-600' : 'border-stroke'} sm:text-4xl" bg-white text-center text-2xl font-medium shadow-xs outline-none focus:border-mainColor`}
                    />
                ))}
            </form>
            {error && <p className="max-w-full text-center text-sm text-wrap text-red-600">{error}</p>}
        </div>
    );
}
