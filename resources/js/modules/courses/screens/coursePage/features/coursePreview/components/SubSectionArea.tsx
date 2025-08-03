import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type SubSection = {
    id: number;
    type: 'video' | 'book' | 'exam';
    name: string;
    url?: string;
    fileUrl?: string;
    examId?: string;
    duration?: number;
};

const SubSectionArea = ({ loading, subSection }: { loading: boolean; subSection: any | null }) => {
    if (loading || !subSection) {
        return <Skeleton className="w-full rounded-[30px] xl:h-[520px]" />;
    }

    return (
        <div className="main-rounded w-full xl:h-[520px]">
            {subSection.type === 'video' && subSection.url ? (
                <video className="main-rounded size-full object-cover" src={subSection.url} controls />
            ) : subSection.type === 'book' && subSection.fileUrl ? (
                <div className="main-rounded flex h-full flex-col items-center justify-center gap-y-4 bg-white p-6 text-center">
                    <p className="text-lg font-medium">{subSection.name}</p>
                    <a
                        href={subSection.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
                    >
                        تحميل الملف
                    </a>
                </div>
            ) : subSection.type === 'exam' ? (
                <div className="main-rounded flex h-full flex-col items-center justify-center gap-y-4 bg-white p-6 text-center">
                    <p className="text-lg font-medium">{subSection.name}</p>
                    <button
                        onClick={() => alert(`ابدأ الامتحان: ${subSection.examId || 'غير معروف'}`)}
                        className="rounded-md bg-red-600 px-6 py-2 text-white hover:bg-red-700"
                    >
                        ابدأ الامتحان
                    </button>
                </div>
            ) : (
                <div className="main-rounded flex h-full items-center justify-center text-gray-500">لا يوجد محتوى لعرضه</div>
            )}
        </div>
    );
};

export default SubSectionArea;
