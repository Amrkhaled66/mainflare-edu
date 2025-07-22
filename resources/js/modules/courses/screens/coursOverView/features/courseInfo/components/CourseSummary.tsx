import priceFormatter from '@/shared/utils/priceFormatter';
import { Icon } from '@iconify/react/dist/iconify.js';

const CourseSummary = ({ price, lecturesLength, time }: { price: number; lecturesLength: number; time: number }) => {
    return (
        <div className="h-fit flex-1 space-y-6 rounded-xl border border-stroke p-6 text-textColor drop-shadow-md">
            <p className='font-bold text-mainColor text-xl'>{priceFormatter(price)}</p>
            <p className="space-y-3">
                <p className="flex items-center gap-x-2">
                    <Icon icon="proicons:grid" className="size-6" />
                    <span>{lecturesLength} محاضرات</span>
                </p>
                <p className="flex items-center gap-x-2">
                    <Icon icon="bx:time" className="size-6" />
                    <span>{time} ساعة</span>
                </p>
            </p>
            <button className="btn w-full gap-x-2.5 text-lg flex-center btn-primary">
                <Icon icon="mynaui:cart" className="size-6" />
                شراء الان
            </button>
        </div>
    );
};

export default CourseSummary;
