import BooksSection from './features/BooksSection/BooksSection';

import usePageTitle from '@/shared/hooks/usePageTitle';
import {  motion } from 'framer-motion';
import { animationsVariants } from '../../defaultSettings';

const TeacherBooksScreen = () => {
    usePageTitle('الكتب');
    return (
        <div className="container">
                <motion.div variants={animationsVariants} initial="initial" animate="animate"  className="space-y-8">
                    {/* <PageTitle title="اختار الكتاب اللي عايزة" /> */}
                    <BooksSection />
                </motion.div>
        </div>
    );
};

export default TeacherBooksScreen;
