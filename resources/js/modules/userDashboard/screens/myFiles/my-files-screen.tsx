import Pagination from '@/shared/components/Pagination';
import DashBoardContainer from '../../../../shared/components/ui/DashBoardContainer';
import CustomMyFileCard from './components/CustomMyFileCard';
import files from './files';
const MyFilesScreen = () => {
    return (
        <DashBoardContainer>
            <div className="flex flex-col gap-y-8">
                <div className="gap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {files.map((file, index) => (
                        <CustomMyFileCard key={index} file={file} />
                    ))}
                </div>
                <Pagination pageCount={1} handlePageClick={() => {}} forcePage={1} />
            </div>
        </DashBoardContainer>
    );
};

export default MyFilesScreen;
