import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AboutCourseSkeleton = () => {
    return (
        <div className="space-y-3">
            {/* Section Title */}
            <Skeleton width={100} height={24} />

            {/* Course Description */}
            <div className="space-y-2">
                <Skeleton count={3} height={14} />
            </div>
        </div>
    );
};

export default AboutCourseSkeleton;
