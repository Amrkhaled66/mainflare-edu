import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CourseSummarySkeleton = () => {
  return (
    <div className="h-fit flex-1 flex flex-col gap-y-6 rounded-xl border border-stroke p-6 text-textColor drop-shadow-md animate-pulse">
      {/* Price */}
      <Skeleton height={28} width={100} />

      {/* Info items (lectures & time) */}
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Skeleton circle height={24} width={24} />
          <Skeleton height={20} width={120} />
        </div>
        <div className="flex items-center gap-x-2">
          <Skeleton circle height={24} width={24} />
          <Skeleton height={20} width={100} />
        </div>
      </div>

      {/* Button */}
      <div className="w-full">
        <Skeleton height={48} />
      </div>
    </div>
  );
};

export default CourseSummarySkeleton;
