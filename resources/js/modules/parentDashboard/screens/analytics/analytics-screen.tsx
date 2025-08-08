import React from 'react';
import parentAnalytics from './parent-analytics';

import FinancialSummary from './features/FinancialSummary/FinancialSummary';

import ActivityDetails from './features/ActivityDetails/ActivityDetails';
import ParentOverview from './features/ParentOverview/ParentOverview';
import PerformanceSummary from './features/PerformanceSummary/PerformanceSummary';

const ParentAnalyticsScreen: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mx-auto max-w-7xl space-y-8">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-gray-900">لوحة تحكم ولي الأمر</h1>
                    <p className="text-gray-600">متابعة شاملة لأداء ابنك الأكاديمي</p>
                </div>

                {/* Parent Overview */}
                <div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">نظرة عامة</h2>
                    <ParentOverview
                        childName={parentAnalytics.childName}
                        childGrade={parentAnalytics.childGrade}
                        totalChildren={parentAnalytics.totalChildren}
                        activeCourses={parentAnalytics.activeCourses}
                        monthlySpent={parentAnalytics.monthlySpent}
                    />
                </div>

                {/* Performance Summary */}
                <div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">ملخص الأداء</h2>
                    <PerformanceSummary
                        avgGrade={parentAnalytics.avgGrade}
                        studyStats={parentAnalytics.studyStats}
                        attendanceStats={parentAnalytics.attendanceStats}
                        homeworkStats={parentAnalytics.homeworkStats}
                    />
                </div>

                {/* Activity Details */}
                <div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">تفاصيل الأنشطة</h2>
                    <ActivityDetails
                        weeklyStudyHours={parentAnalytics.weeklyStudyHours}
                        assignmentsCompleted={parentAnalytics.assignmentsCompleted}
                        parentMeetings={parentAnalytics.parentMeetings}
                        lastLoginDays={parentAnalytics.lastLoginDays}
                    />
                </div>

                {/* Financial Summary */}
                <div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-800">الملخص المالي</h2>
                    <FinancialSummary monthlySpent={parentAnalytics.monthlySpent} />
                </div>
            </div>
        </div>
    );
};

export default ParentAnalyticsScreen;
