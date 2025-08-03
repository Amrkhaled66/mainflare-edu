import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CourseDetailsSkeleton = () => {
    return (
        <div className="space-y-6">
            {/* Course Title */}
            <Skeleton width={280} height={36} />

            <div className="flex flex-col gap-y-3">
                <Skeleton width={120} height={24} />

                {/* Analytic Icons */}
                <ul className="flex flex-wrap gap-x-3 gap-y-4">
                    {[...Array(4)].map((_, index) => (
                        <li key={index} className="flex-center w-fit gap-x-2 rounded-full bg-gray-50 px-6 py-1 text-nowrap drop-shadow-sm">
                            <Skeleton circle width={24} height={24} />
                            <Skeleton width={70} height={16} />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Created + Updated Dates */}
            <div className="flex gap-x-5">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-x-2">
                        <div className="flex-center size-10 rounded-2xl  text-white">
                            <Skeleton circle width={24} height={24} />
                        </div>
                        <div className="space-y-1 text-sm">
                            <Skeleton width={120} height={16} />
                            <Skeleton width={100} height={14} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseDetailsSkeleton;
