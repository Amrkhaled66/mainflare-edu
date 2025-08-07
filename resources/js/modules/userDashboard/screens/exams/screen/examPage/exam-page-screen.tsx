
// ExamPageScreen.tsx - Updated to use ExamProvider
import QuestionNavigator from './features/QuestionNavigator/QuestionNavigator';
import QuestionSection from './features/QuestionSection/QuestionSection';
import exam from './exam';
import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import { ExamProvider } from './context/ExamContext';

const ExamPageScreen = () => {
    return (
        <DashBoardContainer>
            <ExamProvider initialExam={exam}>
                <div className="gap flex lg:flex-row flex-col justify-between">
                    <QuestionSection />
                    <QuestionNavigator />
                </div>
            </ExamProvider>
        </DashBoardContainer>
    );
};
export default ExamPageScreen;
