import ActivityDetails from './features/ActivityDetails/ActivityDetails';
import PerformanceSummary from './features/PerformanceSummary/PerformanceSummary';
import UserOverView from './features/UserOverview/UserOverView';

import analytics from './analytics';
const AnalyticsScreen = () => {
    return (
        <div className="flex flex-col gap-y-6">
            <UserOverView
                userCode={analytics.userCode}
                coursesUserPaid={analytics.coursesUserPaid}
                numberOfTeachersSubscribedWith={analytics.numberOfTeachersSubscribedWith}
            />
            <PerformanceSummary avgExamScore={analytics.avgExamScore} examStats={analytics.examStats} videoStats={analytics.videoStats} />
            <ActivityDetails
                totalLectureWatchTime={analytics.totalLectureWatchTime}
                videoViewCount={analytics.videoViewCount}
                examOpenCount={analytics.examOpenCount}
                examFinishCount={analytics.examFinishCount}
            />
        </div>
    );
};

export default AnalyticsScreen;
