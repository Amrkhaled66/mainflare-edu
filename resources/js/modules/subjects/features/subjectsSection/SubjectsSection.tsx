import CustomSubject from '@/shared/components/ui/CustomSubject';
import CustomSubjectSk from '@/shared/components/ui/Skeletons/CustomSubjectSk';

const SubjectsSection = ({ subjects, loading }: { subjects: any; loading: boolean }) => {
    return (
        <div className="gap grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {loading
                ? Array.from({ length: 8 }, (_, index) => <CustomSubjectSk key={index} />)
                : subjects.map((subject: any) => <CustomSubject key={subject.subjectId} {...subject} />)}
        </div>
    );
};

export default SubjectsSection;
