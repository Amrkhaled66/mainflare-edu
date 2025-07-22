import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomSubjectSkeleton = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-[20px] border border-stroke bg-white p-3 drop-shadow-md">
      <div className="flex items-center gap-x-3">
        {/* Image Skeleton */}
        <Skeleton circle height={60} width={60} />

        {/* Text Skeleton */}
        <div className="space-y-2">
          <Skeleton width={100} height={18} /> {/* Subject Name */}
          <Skeleton width={80} height={14} />  {/* Teacher count */}
        </div>
      </div>

      {/* Icon Skeleton */}
      <Skeleton circle height={36} width={36} />
    </div>
  );
};

export default CustomSubjectSkeleton;
