import Pagination from '@/shared/components/Pagination';
import UserCourseMobileCard from './components/UserCourseMobileCard';
import UserCourseTable from './components/UserCoursesTable';
const UserCourses = ({ courses }: { courses: any }) => {
    return (
        <>
            <div className="hidden lg:block">
                <UserCourseTable courses={courses} />
            </div>
            <div className="flex-center flex-col lg:hidden gap-y-6">
                <div className="gap grid w-full sm:grid-cols-2">
                    {courses.map((course: any, index: number) => (
                        <UserCourseMobileCard order={index + 1} key={course.id} course={course} />
                    ))}
                </div>
                <Pagination forcePage={1} handlePageClick={() => {}} pageCount={1} />
            </div>
        </>
    );
};

export default UserCourses;
