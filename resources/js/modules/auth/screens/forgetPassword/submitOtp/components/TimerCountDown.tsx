import { useEffect, useState } from "react";

const TimerCountDown = ({
  onResend,
  isSendOtpPending,
}: {
  onResend: () => void;
  isSendOtpPending: boolean;
}) => {
  const [seconds, setSeconds] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const handleResend = () => {
    onResend();
    setSeconds(60);
    setIsTimerRunning(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isTimerRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    if (seconds === 0) {
      setIsTimerRunning(false);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, seconds]);

  return (
    <div className="justify-start text-center">
      {isTimerRunning ? (
        <span className="text-text-main text-sm font-normal">
          طلب رمز جديد في؟
          <span className="text-main font-bold">
            00:{seconds.toString().padStart(2, "0")}
          </span>
        </span>
      ) : (
        <button
          onClick={handleResend}
          disabled={isSendOtpPending}
          className="text-main text-sm font-bold hover:underline"
        >
          اعادة ارسال الكود
        </button>
      )}
    </div>
  );
};

export default TimerCountDown;