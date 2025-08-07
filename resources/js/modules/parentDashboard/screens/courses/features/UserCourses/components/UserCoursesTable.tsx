import Table from '@/modules/userDashboard/components/Table';
import columns from '../columns';

export default function UserCourseTable({ courses }: { courses: any[] }) {
    return <Table pagination paginationPerPage={5} columns={columns} data={courses} />;
}
