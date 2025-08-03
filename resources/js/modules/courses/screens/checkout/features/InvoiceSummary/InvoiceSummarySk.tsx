import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const InvoiceSummarySkeleton = () => {
    return (
        <div className="main-rounded h-fit max-w-[40%] min-w-1/3 space-y-6 border border-stroke bg-bgBackground p-5 drop-shadow-sm">
            <div className="space-y-3">
                {/* Course Info Row */}
                <div className="flex items-center justify-between">
                    <div className="flex w-full items-center gap-x-3">
                        <Skeleton height={64} width={64} borderRadius="0.75rem" />
                        <Skeleton width="60%" height={20} />
                    </div>
                    <Skeleton width={60} height={18} />
                </div>

                {/* Subtotal */}
                <div className="flex items-center justify-between font-bold">
                    <Skeleton width={100} height={18} />
                    <Skeleton width={60} height={18} />
                </div>

                {/* Total */}
                <div className="flex items-center justify-between font-bold">
                    <Skeleton width={60} height={20} />
                    <Skeleton width={80} height={24} />
                </div>
            </div>

            {/* Confirm Button */}
            <Skeleton height={44} borderRadius="999px" />
        </div>
    );
};

export default InvoiceSummarySkeleton;
