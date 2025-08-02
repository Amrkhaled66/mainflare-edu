import { Icon } from '@iconify/react/dist/iconify.js';
import  arabicPlural from "@/shared/utils/arabicPlural"
const AnalyticIcon = ({ label, icon, className }: { label: string; icon: string; className: string }) => {
    return (
        <li className={`flex-center w-fit gap-x-2 rounded-full px-6 py-1 text-nowrap drop-shadow-sm ${className}`}>
            <Icon className="size-6" icon={icon} />
            <span>{label}</span>
        </li>
    );
};

const CourseDetails = ({ courseName, statics, createdAt, updatedAt }: { courseName: any; statics: any; createdAt: any; updatedAt: any }) => {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold lg:text-4xl">{courseName}</h1>
            <div className="space-y-3">
                <p className="text-xl font-bold">محتوي الكورس</p>
                <ul className="flex flex-wrap gap-x-3 gap-y-4">
                    <AnalyticIcon label={`${arabicPlural(statics.videos, 'فيديو')}`} icon="tabler:video-filled" className="bg-[#FFE4E4] text-rose" />
                    <AnalyticIcon label={`${arabicPlural(statics.files, 'ملف')}`} icon="mynaui:file-solid" className="bg-[#FFF5D8] text-[#EAB30A]" />
                    <AnalyticIcon label={` ${arabicPlural(statics.homeWork, 'واجب')}`} icon="bxs:file" className="bg-[#D9D9FF] text-mainColor" />
                    <AnalyticIcon
                        label={` ${arabicPlural(statics.exams, 'اختبار')}`}
                        icon="healthicons:i-exam-qualification"
                        className="bg-[#C8F7FF] text-[#06B6D4]"
                    />
                </ul>
            </div>
            <div className="flex gap-x-5">
                <div className="flex gap-x-2">
                    <div className="flex-center size-10 rounded-2xl bg-mainColor text-white">
                        <Icon icon="ri:time-fill" className="size-6" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <p>تاريخ انشاء الكورس</p>
                        <p className="text-subTitle">{createdAt}</p>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    <div className="flex-center size-10 rounded-2xl bg-mainColor text-white">
                        <Icon icon="tabler:reload" className="size-6" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <p>اخر تحديث للكورس</p>
                        <p className="text-subTitle">{updatedAt}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
