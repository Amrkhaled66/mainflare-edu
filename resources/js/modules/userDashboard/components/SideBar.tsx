import { Icon } from '@iconify/react/dist/iconify.js';
import { NavLink } from 'react-router';
import SideBarLinks from '../data/SideBarLinks';
const SideBar = () => {
    return (
        <div className="h-screen w-1/5 overflow-auto bg-mainColor-50">
            <div className="space-y-3 p-6">
                {SideBarLinks.map((link) => (
                    <NavLink
                        className={({ isActive }) =>
                            `${isActive ? 'bg-mainColor font-medium text-white' : 'text-mainColor'} flex text-lg gap-x-2 rounded-2xl p-3 hover:bg-mainColor animate hover:text-white`
                        }
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
