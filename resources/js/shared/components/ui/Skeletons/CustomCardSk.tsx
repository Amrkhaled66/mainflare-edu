import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CustomCardSkeleton = () => {
  return (
    <div className="min-w-[300px] overflow-hidden rounded-[20px] border border-stroke bg-white drop-shadow-md">
      {/* Image Skeleton */}
      <div className="h-[300px]">
        <Skeleton className="!h-full !w-full !rounded-none" />
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col gap-y-1 p-4">
        <div className="space-y-3">
          <Skeleton height={10} width="60%" /> {/* Title */}
          <Skeleton height={15} width="80%" /> {/* Subtitle */}
        </div>

        {/* Footer Skeleton */}
        <Skeleton height={20} width="100%" /> {/* You can customize this based on real footer content */}
      </div>
    </div>
  );
};

export default CustomCardSkeleton;
