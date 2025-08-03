import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CourseContentSkeleton = ({ sections = 3, subSections = 2 }: { sections?: number; subSections?: number }) => {
    return (
        <div className="space-y-3">
            {/* Optional heading skeleton if you uncomment the header in the real component */}
            {/* <Skeleton width={150} height={24} /> */}

            <div className="space-y-6 rounded-3xl bg-bgBackground p-4">
                {Array.from({ length: sections }).map((_, i) => (
                    <div key={i} className="space-y-4">
                        {/* Section header */}
                        <Skeleton height={20} width={200} />

                        <div className="ml-4 space-y-2">
                            {Array.from({ length: subSections }).map((_, j) => (
                                <div key={j} className="space-y-1">
                                    <Skeleton height={16} width={180} />
                                    <Skeleton height={12} width={`60%`} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseContentSkeleton;
