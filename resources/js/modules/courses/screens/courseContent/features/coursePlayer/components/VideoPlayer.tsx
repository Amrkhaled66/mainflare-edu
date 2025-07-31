import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const VideoPlayer = ({ loading }: { loading: boolean }) => {
    return (
        <div className='  xl:h-[520px]'>
            {loading ? (
                <Skeleton className="size-full" />
            ) : (
                <iframe
                    className="size-full main-rounded"
                    src="https://www.youtube.com/embed/Ix2Q_GdihIc"
                    title="مراجعة شاملة على الفصل الأول فيزياء ثانوية عامة 2025 أستاذ محمد عبد المعبود #رجالة_عبدالمعبود"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
};

export default VideoPlayer;
