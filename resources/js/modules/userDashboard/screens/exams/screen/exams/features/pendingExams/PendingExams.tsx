import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import Table from '@/modules/userDashboard/components/Table';
import columns from '../columns';
import ExamMobileCard from '../../components/ExamMobileCard';
const PendingExams = ({ data }: { data: any[] }) => {
    return (
        <DashBoardContainer>
            <div className="space-y-6">
                <p className="border-b border-b-stroke pb-3 text-xl font-semibold">التدريبات اللي مطلوبة منك</p>
                <div className="grid sm:grid-cols-2 gap lg:hidden">
                    {data.map((exam) => (
                        <ExamMobileCard key={exam.id} exam={exam}  />
                    ))}
                </div>
                <div className="hidden lg:block">
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </DashBoardContainer>
    );
};

export default PendingExams;
