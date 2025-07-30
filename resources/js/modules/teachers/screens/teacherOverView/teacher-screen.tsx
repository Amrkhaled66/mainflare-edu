import Actions from './features/actions/Actions';
import TeacherOverView from './features/teacherOverView/TeacherOverView';

import usePageTitle from '@/shared/hooks/usePageTitle';
import teacher from './teacher';

import { motion } from 'framer-motion';
import { animationsVariants } from '../../defaultSettings';

const TeacherScreen = () => {
    usePageTitle('تفاصيل المدرس');
    return (
        <motion.div variants={animationsVariants} initial="initial" animate="animate" exit="exit" className="container">
            <TeacherOverView teacher={teacher} />
            <Actions id={teacher.id} />
        </motion.div>
    );
};

export default TeacherScreen;
