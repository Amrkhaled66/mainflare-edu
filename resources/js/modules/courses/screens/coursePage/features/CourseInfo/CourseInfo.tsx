import CourseContent from '../CourseInfo/components/CourseContent';
import clsx from 'clsx';
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
            <div className="main-rounded grid grid-cols-2 gap-x-3 bg-bgBackground p-2 font-bold">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={clsx(`animate cursor-pointer rounded-[50px] bg-white hover:bg-mainColor hover:text-white`, {
                            'text-primary btn btn-primary': activeTab === tab.id,
                            'text-subTitle': activeTab !== tab.id,
                        })}
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
