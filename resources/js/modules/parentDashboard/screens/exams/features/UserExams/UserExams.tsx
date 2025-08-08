import Table from '@/modules/userDashboard/components/Table';
import Pagination from '@/shared/components/Pagination';
import columns from './columns';
import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
const UserExams = ({ exams, onShowResult }: { exams: any; onShowResult: (exam: any) => void }) => {
    return (
        <DashBoardContainer>
            <>
                <div className="lg:hidden">
                    {/* <div className="gap grid grid-cols-1 sm:grid-cols-2">
                    {invoices.map((invoice: any, idx: number) => (
                        <InvoiceMobileCard key={idx} invoice={invoice} order={idx + 1} />
                        ))}
                </div> */}
                    <Pagination pageCount={Math.ceil(exams.length / 5)} handlePageClick={() => {}} forcePage={1} />
                </div>
                <div className="hidden space-y-3 lg:block">
                    <p className="section-header font-medium text-2xl">الامتحانات</p>
                    <Table data={exams} columns={columns(onShowResult)} pagination paginationPerPage={5} />
                </div>
            </>
        </DashBoardContainer>
    );
};

export default UserExams;
