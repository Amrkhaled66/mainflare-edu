import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CoursePreviewSkeleton = () => {
    return (
        <div className="main-rounded flex flex-1 flex-col gap-y-6 overflow-hidden rounded-[30px] bg-bgBackground p-4 drop-shadow-lg">
            {/* Course Title */}
            <Skeleton height={28} width={180} />

            {/* SubSectionArea Placeholder */}
            <div className="aspect-video w-full">
                <Skeleton height="100%" />
            </div>

            {/* Description */}
            <div className="text-center">
                <Skeleton height={24} width={250} />
            </div>

            {/* Teacher Info */}
            <div className="flex items-center gap-4">
                <Skeleton circle height={50} width={50} />
                <div className="flex-1">
                    <Skeleton height={18} width={120} />
                    <Skeleton height={14} width={100} />
                </div>
            </div>
        </div>
    );
};

export default CoursePreviewSkeleton;
