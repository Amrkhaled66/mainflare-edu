import CompletedExams from './features/completedExams/CompletedExams';
import PendingExams from './features/pendingExams/PendingExams';

import exams from '@/modules/teachers/screens/teachersExams/exams';
const ExamsScreen = () => {
    const pending = exams.filter((exam) => exam.status === 'pending');
    const completed = exams.filter((exam) => exam.status === 'completed');
    return (
        <div className="space-y-6">
            <PendingExams data={pending} />
            <CompletedExams data={completed} />
        </div>
    );
};

export default ExamsScreen;
