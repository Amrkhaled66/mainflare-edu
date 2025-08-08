import DashBoardContainer  from "@/shared/components/ui/DashBoardContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
interface ActivityDetailsCustomCardProps {
    label: string;
    value: string | number;
    color: string;
    icon: string;
}

const ActivityDetailsCustomCard: React.FC<ActivityDetailsCustomCardProps> = ({ label, value, color, icon }) => {
    return (
        <DashBoardContainer className="px-4 py-6">
            <div className="flex h-full flex-col items-center justify-between gap-y-4 text-center">
                <div className="flex items-center gap-2">
                    <Icon icon={icon} className="h-6 w-6" style={{ color: color }} />
                    <p className="font-medium text-gray-700">{label}</p>
                </div>
                <div
                    style={{ background: color }}
                    className="flex w-fit items-center justify-center rounded-3xl px-6 py-2 text-xl font-bold text-white"
                >
                    {value}
                </div>
            </div>
        </DashBoardContainer>
    );
};

export default ActivityDetailsCustomCard;