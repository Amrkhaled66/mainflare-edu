import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CoursePlayer = ({ course, name, loading }: { course: any; name: string; loading: boolean }) => {
    return (
        <div className="h-[343px] overflow-hidden rounded-[30px] drop-shadow-lg lg:h-[540px] lg:w-[760px]">
            {loading ? (
                <Skeleton className="size-full" />
            ) : (
                <iframe
                    className="size-full"
                    src="https://www.youtube.com/embed/Ix2Q_GdihIc"
                    title="مراجعة شاملة على الفصل الأول فيزياء ثانوية عامة 2025 أستاذ محمد عبد المعبود #رجالة_عبدالمعبود"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default CoursePlayer;
