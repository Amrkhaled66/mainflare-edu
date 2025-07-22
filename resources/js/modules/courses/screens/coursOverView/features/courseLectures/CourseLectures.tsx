import CustomLectureCard from '@/modules/courses/components/CustomLectureCard';
import CustomLectureCardSkeleton from '@/modules/courses/components/CustomLectureCardSk ';
const CourseLectures = ({ lectures, loading }: { lectures: any[]; loading: boolean }) => {
    return (
        <div className="space-y-5 lg:space-y-8">
            <p className="border-b border-b-stroke pb-5 text-xl font-bold text-textColor">محتوي الدورة</p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-2">
                {loading
                    ? Array.from({ length: 6 }).map((_, index) => <CustomLectureCardSkeleton key={index} />)
                    : lectures.map((lecture: any, i: number) => <CustomLectureCard key={lecture.id} index={i} title={lecture.title} />)}
            </div>
        </div>
    );
};

export default CourseLectures;
