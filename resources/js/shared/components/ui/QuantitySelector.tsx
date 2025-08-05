import { Icon } from '@iconify/react/dist/iconify.js';

interface QuantitySelectorViewProps {
    quantity?: number;
    inputValue?: string;
    onIncrease?: () => void;
    onDecrease?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
}

const SelectorView = ({ quantity, inputValue, onIncrease, onDecrease, onChange, onBlur }: QuantitySelectorViewProps) => {
    const buttonClass = 'flex h-full w-full items-center justify-center px-1 disabled:cursor-not-allowed';
    const iconClass = 'text-text-main  lg:size-[24px]';
    const wrapperClass = 'border-main flex h-[28px] w-fit items-center overflow-hidden rounded-lg border lg:h-[40px] lg:rounded-2xl';
    const inputClass =
        'bg-main-100 text-text-main h-full w-[28px] text-center text-sm font-bold sm:w-[34px] lg:w-[46px] lg:text-xl outline-none bg-mainColor-50';
    return (
        <div className="space-y-3 rounded-xl">
            <div className={wrapperClass}>
                <button onClick={onIncrease} style={{ background: '#fff' }} className={buttonClass}>
                    <Icon icon="ic:round-plus" className={iconClass} />
                </button>
                <input type="text" defaultValue={quantity} value={inputValue} onChange={onChange} onBlur={onBlur} className={inputClass} />

                <button
                    onClick={onDecrease}
                    disabled={quantity ? quantity <= 1 : Number(inputValue) <= 1}
                    style={{ background: '#fff' }}
                    className={buttonClass}
                >
                    <Icon icon="ic:outline-minus" className={iconClass} />
                </button>
            </div>
        </div>
    );
};

export default SelectorView;
