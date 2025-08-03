import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CourseInfoSkeleton = () => {
    return (
        <div className="w-full space-y-5 xl:w-[32%] lg:space-y-6">
            {/* Tabs Skeleton */}
            <div className="main-rounded grid grid-cols-2 gap-x-3 bg-bgBackground p-2 font-bold">
                <Skeleton height={40} borderRadius={50} />
                <Skeleton height={40} borderRadius={50} />
            </div>

            {/* Content Box Skeleton */}
            <div className="main-rounded w-full border-stroke bg-bgBackground p-6 space-y-4">
                <Skeleton height={24} width={120} />
                <Skeleton count={5} />
            </div>
        </div>
    );
};

export default CourseInfoSkeleton;
