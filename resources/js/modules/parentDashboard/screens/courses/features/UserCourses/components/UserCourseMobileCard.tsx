import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';
const UserCourseMobileCard = ({ course, order }: { course: any; order: number }) => {
    return (
        <div className="flex flex-col gap-y-3 rounded-3xl border border-stroke bg-white p-4 text-xs font-medium">
            <div className="flex items-center justify-between">
                <p>ترتيب الكورس : {order}</p>
                <p>كود الكورس : {course.courseId}</p>
            </div>
            <div className="flex items-center gap-x-2">
                <p>الكورس : </p>
                <div className="flex items-center gap-x-3">
                    <img className="size-[50px] rounded-2xl" src={course.courseInfo.img} alt={course.name} />
                    <p>{course.courseInfo.name}</p>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <p className="text-nowrap"> تفاصيل الكورس : </p>
                <div className="flex-center flex-wrap gap-2">
                    <div className="flex-center flex-col gap-y-1">
                        <Icon icon={'fluent:video-16-regular'} className="size-4" />
                        <p className="text-[10px] text-nowrap">{course.courseInfo.videosCount} فيديو</p>
                    </div>
                    <div className="flex-center flex-col gap-y-1">
                        <Icon icon={'mynaui:file-solid'} className="size-4" />
                        <p className="text-[10px] text-nowrap">{course.courseInfo.filesCount} ملف</p>
                    </div>
                    <div className="flex-center flex-col gap-y-1">
                        <Icon icon={'bxs:file'} className="size-4" />
                        <p className="text-[10px] text-nowrap">{course.courseInfo.examsCount} امتحان</p>
                    </div>
                    <div className="flex-center flex-col gap-y-1">
                        <Icon icon={'healthicons:i-exam-qualification'} className="size-4" />
                        <p className="text-[10px] text-nowrap">{course.courseInfo.hwCount} واجب</p>
                    </div>
                </div>
            </div>
            <div className="space-y-5">
                <div className="space-y-3">
                    <div className="space-x-2">
                        <span>تاريخ الشراء:</span>
                        <span>{course.paidData.paymentDate}</span>
                    </div>
                    <div className="space-x-2">
                        <span>طريقة الدفع:</span>
                        <span>{course.paidData.paymentMethod}</span>
                    </div>
                </div>
                <Link to={`/courses/${course.courseId}`}>
                    <button className="btn-outline w-full text-sm">عرض الكورس</button>
                </Link>
            </div>
        </div>
    );
};

export default UserCourseMobileCard;
