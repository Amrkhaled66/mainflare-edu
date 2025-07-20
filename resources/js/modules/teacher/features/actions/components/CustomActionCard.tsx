import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';

const CustomActionCard = ({
    icon,
    bg,
    color,
    title,
    subTitle,
    to,
}: {
    icon: string;
    bg: string;
    color: string;
    title: string;
    subTitle: string;
    to: string;
}) => {
    return (
        <Link to={to}>
            <div
                style={{
                    background: bg,
                }}
                className="animate flex h-[100px] !w-full lg:min-w-[400px] cursor-pointer items-center gap-x-4 rounded-2xl px-4 drop-shadow-sm hover:translate-y-[-9px] hover:drop-shadow-xl"
            >
                <div style={{ background: color }} className="flex-center relative size-[70px] rounded-[20px]">
                    <Icon icon={icon} className="relative size-[50px] text-white" />
                </div>
                <div className='space-y-2'>
                    <p className="text-xl font-semibold text-textColor">{title}</p>
                    <p className="text-subTitle">{subTitle}</p>
                </div>
            </div>
        </Link>
    );
};

export default CustomActionCard;
