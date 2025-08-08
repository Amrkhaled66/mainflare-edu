// Types and Interfaces
interface ParentAnalyticsData {
    childName: string;
    childGrade: string;
    totalChildren: number;
    activeCourses: number;
    monthlySpent: number;
    avgGrade: number;
    studyStats: { completed: number; total: number };
    attendanceStats: { present: number; total: number };
    homeworkStats: { submitted: number; total: number };
    weeklyStudyHours: number;
    assignmentsCompleted: number;
    parentMeetings: number;
    lastLoginDays: number;
}


// Mock data for demonstration
const parentAnalytics: ParentAnalyticsData = {
    childName: 'أحمد محمد',
    childGrade: 'الصف الثالث الثانوي',
    totalChildren: 2,
    activeCourses: 5,
    monthlySpent: 850,
    avgGrade: 85,
    studyStats: { completed: 78, total: 100 },
    attendanceStats: { present: 92, total: 100 },
    homeworkStats: { submitted: 88, total: 100 },
    weeklyStudyHours: 24,
    assignmentsCompleted: 15,
    parentMeetings: 3,
    lastLoginDays: 2,
};

export default parentAnalytics;