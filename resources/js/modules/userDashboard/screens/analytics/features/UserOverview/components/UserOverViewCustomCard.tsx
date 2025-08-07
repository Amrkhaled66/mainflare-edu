import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import { Icon } from '@iconify/react/dist/iconify.js';
const UserOverViewCustomCard = ({ icon, title, value }: { icon: string; title: string; value: string|number }) => {
    return (
        <DashBoardContainer className=" w-full cursor-pointer hover:drop-shadow-lg drop-shadow-sm hover:translate-y-[-10px] animate  !py-5 !px-4">
            <div className="flex gap-x-3">
                <div className="flex-center size-20 rounded-3xl btn btn-primary">
                    <Icon icon={icon} className=" text-white size-10" />
                </div>
                <div className="space-y-3">
                    <p className="text-lg font-medium">{title}</p>
                    <p className="text-2xl font-semibold">{value}</p>
                </div>
            </div>
        </DashBoardContainer>
    );
};

export default UserOverViewCustomCard;
