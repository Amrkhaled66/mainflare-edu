import BooksSection from './features/BooksSection/BooksSection';

import FilterBar from '@/modules/teachers/components/FilterBar';
import usePageTitle from '@/shared/hooks/usePageTitle';
import { motion } from 'framer-motion';
import { animationsVariants } from '../../defaultSettings';

import { useFilterBar } from '@/modules/teachers/hooks/useFilterBar';
import { grades } from '../../grades';
import books from './books';

const TeacherBooksScreen = () => {
    usePageTitle('الكتب');

    const { options, handleOptionChange } = useFilterBar();

    const filteredBooks = options.grade_ids.length === 0 ? books : books.filter((book: any) => options.grade_ids.includes(book.grade.id.toString()));

    return (
        <div >
            <motion.div variants={animationsVariants} initial="initial" animate="animate" className="gap-y-8 gap-x-6 flex flex-col lg:flex-row">
                {/* <PageTitle title="اختار الكتاب اللي عايزة" /> */}
                <FilterBar data={grades} onOptionChange={handleOptionChange} options={options} loading={false} />
                <BooksSection data={filteredBooks} />
            </motion.div>
        </div>
    );
};

export default TeacherBooksScreen;
