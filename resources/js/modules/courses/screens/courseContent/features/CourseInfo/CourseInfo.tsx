import CourseContent from '@/modules/courses/components/CourseContent';
import { useState } from 'react';
import AboutCourse from './components/AboutCourse';

const TABS = [
    { id: 'about', label: 'وصف الكورس' },
    { id: 'content', label: 'المحتوى' },
] as const;

const CourseInfo = ({ loading, course }: { loading: boolean; course: any }) => {
    const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>('about');

    const COMPONENTS = {
        about: <AboutCourse />,
        content: <CourseContent coursePageContent courseContent={course.content} />,
    };

    return (
        <div className="w-full space-y-5 lg:w-[32%] lg:space-y-6">
            <div className="main-rounded gap grid grid-cols-2 bg-bgBackground p-2 font-bold">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`main-rounded animate cursor-pointer bg-white hover:bg-mainColor hover:text-white ${
                            activeTab === tab.id ? 'text-primary btn btn-primary' : 'text-subTitle'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="main-rounded w-full border-stroke bg-bgBackground p-6">{COMPONENTS[activeTab]}</div>
        </div>
    );
};

export default CourseInfo;
