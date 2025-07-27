import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';
const CustomSubject = ({
    img,
    teacherCount,
    subjectId,
    subjectName,
}: {
    img: string;
    teacherCount: number;
    subjectId: number;
    subjectName: string;
}) => {
    return (
        <Link to={`/courses?subject_ids=${subjectId}`}>
            <div className="group animate flex w-full cursor-pointer items-center justify-between rounded-[20px] border border-stroke bg-white p-3 drop-shadow-md hover:translate-y-[-5px] hover:border-mainColor hover:drop-shadow-xl">
                <div className="flex-center gap-x-3">
                    <div className="size-[60px]">
                        <img src={img} alt={subjectName} />
                    </div>
                    <div>
                        <p className="font-bold text-textColor">{subjectName}</p>
                        <p className="text-subTitle">
                            <span>({teacherCount})</span>
                            <span>معلمين</span>
                        </p>
                    </div>
                </div>
                <div className="flex-center animate size-9 rounded-full bg-stroke text-textColor group-hover:bg-mainColor group-hover:text-white">
                    <Icon icon="humbleicons:arrow-left-up" className="size-6" />
                </div>
            </div>
        </Link>
    );
};

export default CustomSubject;
