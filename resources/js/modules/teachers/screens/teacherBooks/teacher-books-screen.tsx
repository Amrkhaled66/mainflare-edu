import BooksSection from './features/BooksSection/BooksSection';

import FilterBar from '@/modules/teachers/components/FilterBar';
import { motion } from 'framer-motion';
import { animationsVariants } from '../../defaultSettings';

import { useFilterBar } from '@/modules/teachers/hooks/useFilterBar';
import { grades } from '../../grades';
import books from './books';

const TeacherBooksScreen = () => {
    const { options, handleOptionChange } = useFilterBar();

    const filteredBooks = options.grade_ids.length === 0 ? books : books.filter((book: any) => options.grade_ids.includes(book.grade.id.toString()));

    return (
        <div>
            <motion.div variants={animationsVariants} initial="initial" animate="animate" className="flex flex-col gap-x-6 gap-y-8 lg:flex-row">
                {/* <PageTitle title="اختار الكتاب اللي عايزة" /> */}
                <FilterBar data={grades} onOptionChange={handleOptionChange} options={options} loading={false} />
                <BooksSection data={filteredBooks} />
            </motion.div>
        </div>
    );
};

export default TeacherBooksScreen;
