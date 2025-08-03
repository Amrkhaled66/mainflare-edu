import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CourseSummarySkeleton = () => {
    return (
        <div className="main-rounded  lg:min-w-[350px] h-fit overflow-hidden border border-stroke bg-white drop-shadow-xl">
            {/* Image Skeleton */}
            <Skeleton height={343} className="sm:h-[680px] lg:h-[420px]" />

            <div className="space-y-5 p-4">
                <div className="space-y-3">
                    {/* Tutor section */}
                    <div className="flex items-center space-x-3">
                        <Skeleton circle width={40} height={40} />
                        <div className="flex flex-col gap-1">
                            <Skeleton width={120} height={16} />
                            <Skeleton width={80} height={14} />
                        </div>
                    </div>

                    {/* Price/Subscribed status */}
                    <Skeleton height={28} width={180} borderRadius={999} />
                </div>

                {/* Button */}
                <Skeleton height={45} width="100%" borderRadius={12} />
            </div>
        </div>
    );
};

export default CourseSummarySkeleton;
