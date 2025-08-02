import DashBoardContainer from '@/modules/userDashboard/components/DashBoardContainer';

const ActivityDetailsCustomCard = ({ label, value, color }: { label: string; value: number; color: string }) => {
    return (
        <DashBoardContainer className="px-4">
            <div className="flex-center  drop-shadow-md  flex-col gap-y-4">
                <p className="font-medium">{label}</p>
                <p style={{ background: color }} className="flex-center w-fit rounded-3xl px-6 py-1 font-medium text-white">
                    {value} مرة
                </p>
            </div>
        </DashBoardContainer>
    );
};

export default ActivityDetailsCustomCard;
