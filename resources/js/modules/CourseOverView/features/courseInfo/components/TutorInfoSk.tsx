import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TutorInfoSkeleton = () => {
  return (
    <div className="flex gap-x-3 items-center">
      <div className="size-[70px] overflow-hidden rounded-full">
        <Skeleton circle height={70} width={70} />
      </div>
      <div className="space-y-2 flex flex-col justify-center">
        <Skeleton width={120} height={20} />
        <Skeleton width={100} height={18} />
      </div>
    </div>
  );
};

export default TutorInfoSkeleton;
