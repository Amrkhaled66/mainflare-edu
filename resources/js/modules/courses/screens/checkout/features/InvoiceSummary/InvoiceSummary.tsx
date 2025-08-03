import priceFormatter from '@/shared/utils/priceFormatter';
import { useParams } from 'react-router';
import course from '../../../../course';

import InvoiceSummarySkeleton from './InvoiceSummarySk';
const InvoiceSummary = () => {
    const { courseId } = useParams();

    const loading = false;

    // fetching course
    return loading ? (
        <InvoiceSummarySkeleton />
    ) : (
        <div className="main-rounded h-fit max-w-[40%] min-w-1/3 space-y-6 border border-stroke bg-bgBackground p-5 drop-shadow-sm">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <p className="flex w-full items-center gap-x-3">
                        <img className="size-16 rounded-xl" src={course.img} alt={course.name} />
                        <span className="max-w-2/3 font-medium text-wrap text-subTitle">{course.name}</span>
                    </p>
                    <span className="font-bold">{priceFormatter(200)}</span>
                </div>
                <div className="flex items-center justify-between font-bold">
                    <span>المجموع الفرعي</span>
                    <span>{priceFormatter(200)}</span>
                </div>
                <div className="flex items-center justify-between font-bold">
                    <span>اجمالي</span>
                    <span className="text-xl">{priceFormatter(200)}</span>
                </div>
            </div>
            <button className="btn btn-primary w-full">تأكيد الطلب</button>
        </div>
    );
};

export default InvoiceSummary;
