import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import CourseSummary from './components/CourseSummary';
import CourseSummarySkeleton from './components/CourseSummarySk';
import TutorInfo from './components/TutorInfo';
import TutorInfoSkeleton from './components/TutorInfoSk';
const CourseInfo = ({
    id,
    img,
    price,
    lecturesLength,
    time,
    name,
    tutor,
    loading,
}: {
    id: number;
    img: string;
    price: number;
    lecturesLength: number;
    time: number;
    name: string;
    tutor: any;
    loading: boolean;
}) => {
    return (
        <div className="flex flex-col justify-between gap-6 lg:flex-row">
            <div className="gap flex flex-col">
                <div className="h-[343px] overflow-hidden rounded-[30px] drop-shadow-lg lg:h-[540px] lg:w-[760px]">
                    {loading ? <Skeleton className="size-full" /> : <img src={img} alt={name} className="size-full object-cover" />}
                </div>
                {loading ? <TutorInfoSkeleton /> : <TutorInfo img={tutor.img} name={tutor.name} subject={tutor.subject} />}
            </div>
            {loading ? <CourseSummarySkeleton /> : <CourseSummary id={id} price={price} lecturesLength={lecturesLength} time={time} />}
        </div>
    );
};

export default CourseInfo;
