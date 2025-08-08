import FilterBar from '@/modules/teachers/components/FilterBar';
import CoursesSection from './features/Courses/CoursesSection';

import { motion } from 'framer-motion';
import { animationsVariants } from '../../defaultSettings';

import { useFilterBar } from '@/modules/teachers/hooks/useFilterBar';
import { grades } from '../../grades';
import courses from './courses';

const TeacherCoursesScreen = () => {
    const { options, handleOptionChange } = useFilterBar();

    const filteredCourses =
        options.grade_ids.length === 0 ? courses : courses.filter((book: any) => options.grade_ids.includes(book.grade.id.toString()));
    return (
        <div>
            <motion.div variants={animationsVariants} initial="initial" animate="animate" className="flex flex-col gap-x-6 gap-y-8 lg:flex-row">
                {/* <PageTitle title="اختار الفصل & الشابتر اللي عايز تذاكرة" /> */}
                <FilterBar data={grades} onOptionChange={handleOptionChange} options={options} loading={false} />
                <CoursesSection data={filteredCourses} />
            </motion.div>
        </div>
    );
};

export default TeacherCoursesScreen;
