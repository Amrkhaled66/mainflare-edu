import { Icon } from '@iconify/react';

interface QuestionNavigatorFooterFooterProps {
    canGoPrevious: boolean;
    canGoNext: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

const QuestionNavigatorFooterFooter = ({ canGoPrevious, canGoNext, onPrevious, onNext }: QuestionNavigatorFooterFooterProps) => {
    return (
        <div className="flex justify-end gap-x-2">
            <button
                onClick={onPrevious}
                disabled={!canGoPrevious}
                className="flex-center animate size-10 rounded-full border border-mainColor bg-mainColor text-white hover:scale-90 hover:bg-transparent hover:text-mainColor"
            >
                <Icon icon="mdi:keyboard-arrow-right" width="24" height="24" />
            </button>
            <button
                onClick={onNext}
                disabled={!canGoNext}
                className="flex-center animate size-10 rounded-full border border-mainColor bg-mainColor text-white hover:scale-90 hover:bg-transparent hover:text-mainColor"
            >
                <Icon icon="mdi:keyboard-arrow-left" width="24" height="24" />
            </button>
        </div>
    );
};

export default QuestionNavigatorFooterFooter;