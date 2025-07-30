import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CustomTeacherCardSkeleton = () => {
    return (
        <div className="flex gap-x-3 rounded-3xl  border border-stroke p-3 drop-shadow-xl">
            {/* Image Skeleton */}
            <Skeleton height={90} width={90} borderRadius={20} />

            {/* Text & Badges Skeleton */}
            <div className="flex flex-col justify-between py-1 space-y-2 flex-1">
                <Skeleton height={16} width="40%" /> {/* Subject */}
                <Skeleton height={18} width="60%" /> {/* Name */}

                {/* Grades Skeleton */}
                <div className="flex items-center gap-x-2 text-sm">
                    {/* Mobile */}
                    <div className="flex gap-x-2 lg:hidden">
                        <Skeleton height={24} width={50} borderRadius={999} />
                        <Skeleton height={24} width={24} borderRadius="50%" />
                    </div>

                    {/* Desktop */}
                    <div className="hidden gap-x-2 lg:flex">
                        <Skeleton height={24} width={50} borderRadius={999} />
                        <Skeleton height={24} width={50} borderRadius={999} />
                        <Skeleton height={24} width={24} borderRadius="50%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomTeacherCardSkeleton;
