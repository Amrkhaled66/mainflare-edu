import CustomLectureCard from '@/modules/courses/components/CustomLectureCard';
import CustomLectureCardSkeleton from '@/modules/courses/components/CustomLectureCardSk ';

const LecturesList = ({ lectures, loading }: { lectures: any[]; loading: boolean }) => {
    return (
        <div className="flex h-fit max-h-dvh flex-1 flex-col gap-y-4 overflow-auto rounded-xl border border-stroke p-2 lg:p-4">
            {loading
                ? Array.from({ length: 6 }).map((_, index) => <CustomLectureCardSkeleton key={index} />)
                : lectures.map((lecture: any, index: number) => <CustomLectureCard key={lecture.id} title={lecture.title} index={index} />)}
        </div>
    );
};

export default LecturesList;
