import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
const ActivityDetailsCustomCard = ({ label, value, color }: { label: string; value: number; color: string }) => {
    return (
        <DashBoardContainer className="px-4">
            <div className="flex h-full flex-col items-center justify-between gap-y-4 text-center drop-shadow-md">
                <p className="font-medium">{label}</p>
                <p style={{ background: color }} className="flex-center w-fit rounded-3xl px-6 py-1 font-medium text-white">
                    {value}
                </p>
            </div>
        </DashBoardContainer>
    );
};

export default ActivityDetailsCustomCard;
