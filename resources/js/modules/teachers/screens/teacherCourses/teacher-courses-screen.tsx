import CoursesSection from './features/Courses/CoursesSection';

import usePageTitle from '@/shared/hooks/usePageTitle';
import {  motion } from 'framer-motion';
import { animationsVariants } from '../../defaultSettings';

const TeacherCoursesScreen = () => {
    usePageTitle('الكورسات');
    return (
        <div className="container">
                <motion.div
                    variants={animationsVariants} initial="initial" animate="animate" 
                    className="space-y-8"
                >
                    {/* <PageTitle title="اختار الفصل & الشابتر اللي عايز تذاكرة" /> */}
                    <CoursesSection />
                </motion.div>
        </div>
    );
};

export default TeacherCoursesScreen;
