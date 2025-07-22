import priceFormatter from '@/shared/utils/priceFormatter';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';
const CourseSummary = ({ price, lecturesLength, time, id }: { price: number; lecturesLength: number; time: number; id: number }) => {
    return (
        <div className="h-fit flex-1 space-y-6 rounded-xl border border-stroke p-6 text-textColor drop-shadow-md">
            <p className="text-xl font-bold text-mainColor">{priceFormatter(price)}</p>
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
            <Link to={`/courses/${id}`}>
                <button className="btn flex-center btn-primary w-full gap-x-2.5 text-lg">
                    <Icon icon="mynaui:cart" className="size-6" />
                    شراء الان
                </button>
            </Link>
        </div>
    );
};

export default CourseSummary;
