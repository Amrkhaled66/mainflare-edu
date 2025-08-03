import CloseButton from '@/shared/components/ui/CloseButton';
import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { NavLink } from 'react-router';
import SideBarLinks from '../data/SideBarLinks';
const SideBar = ({ menuOpen, onClose }: { menuOpen: boolean; onClose: () => void }) => {
    return (
        <div
            className={clsx(
                'animate fixed top-0 z-100 lg:z-10 min-h-screen min-w-[300px] overflow-auto bg-mainColor-50 lg:w-1/5 xl:relative xl:!translate-x-0',
                menuOpen ? 'translate-x-0' : 'translate-x-full',
            )}
        >
            <div className=" space-y-3 p-6">
                <div className="mr-auto w-fit xl:hidden">
                    <CloseButton onClick={onClose} />
                </div>
                {SideBarLinks.map((link) => (
                    <NavLink
                        className={({ isActive }) =>
                            `${isActive ? 'bg-mainColor font-medium text-white' : 'text-mainColor'} animate flex gap-x-2 rounded-2xl p-3 text-lg hover:bg-mainColor hover:text-white`
                        }
                        onClick={onClose}
                        to={link.path}
                        key={link.name}
                    >
                        <Icon icon={link.icon} className="size-6" />
                        <p>{link.name}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
