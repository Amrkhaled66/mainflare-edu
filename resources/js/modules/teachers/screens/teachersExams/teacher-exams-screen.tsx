import { motion } from 'framer-motion';
import { animationsVariants } from '../../defaultSettings';

import CustomCard from '@/shared/components/CustomCard';
import { Link } from 'react-router';
import exams from './exams';
const TeacherBooksScreen = () => {
    return (
        <div>
            <motion.div variants={animationsVariants} initial="initial" animate="animate" className="flex flex-col gap-x-6 gap-y-8 lg:flex-row">
                {exams.map((exam) => {
                    const isSubscribed = true;
                    return (
                        <CustomCard
                            img={exam.courseInfo.img}
                            key={exam.id}
                            title={exam.grade}
                            subTitle={exam.name}
                            footer={
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <p className="rounded-md border-r-4 border-s-mainColor ps-1">الاسئلة : {exam.questionCount}</p>
                                        <p className="font-medium text-mainColor">نسبة النجاح المطلوبة : {exam.successPercentage}%</p>
                                    </div>
                                    {isSubscribed && (
                                        <Link to={`/user-dashboard/exams/${exam.id}`}>
                                            <button className="btn btn-primary w-full">بدء الاختبار</button>
                                        </Link>
                                    )}
                                </div>
                            }
                        />
                    );
                })}
            </motion.div>
        </div>
    );
};

export default TeacherBooksScreen;
