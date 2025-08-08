import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import { Icon } from '@iconify/react/dist/iconify.js';
interface ParentOverviewCustomCardProps {
    icon: string;
    title: string;
    value: string | number;
    color?: string;
}

const ParentOverviewCustomCard: React.FC<ParentOverviewCustomCardProps> = ({ icon, title, value, color = '#3B82F6' }) => {
    return (
        <DashBoardContainer className="w-full cursor-pointer p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="flex gap-x-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl" style={{ backgroundColor: color }}>
                    <Icon icon={icon} className="h-10 w-10 text-white" />
                </div>
                <div className="space-y-3">
                    <p className="text-lg font-medium text-gray-700">{title}</p>
                    <p className="text-2xl font-semibold text-gray-900">{value}</p>
                </div>
            </div>
        </DashBoardContainer>
    );
};

export default ParentOverviewCustomCard;