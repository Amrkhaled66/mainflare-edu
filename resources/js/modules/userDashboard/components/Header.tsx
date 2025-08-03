import logo from '@/assets/logo.svg';
import paths from '@/routes/paths';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router';
const Header = ({ onOpen }: { onOpen: () => void }) => {
    const name = 'Amr Khalid';
    return (
        <div className="bg-mainColor-50 fixed top-0 z-20 w-full inset-0 h-fit py-6">
            <div className="flex justify-between px-6">
                <button
                    style={{ backgroundImage: 'var(--color-mainGradient)' }}
                    className="animate rounded-xl p-3 text-2xl text-white hover:drop-shadow-xl xl:hidden"
                    onClick={onOpen}
                >
                    <Icon icon="mdi:menu" className="size-7" />
                </button>
                <Link to="/">
                    <img src={logo} alt="on skill" />
                </Link>
                <div className="mr-8 flex items-center gap-x-3">
                    <div className="hidden space-y-2 font-medium lg:block">
                        <p>{name}</p>
                        <Link className="text-mainColor hover:!underline" to={paths.userDashboard.dashboard.path}>
                            اضغط لعرض الملف الشخصي
                        </Link>
                    </div>
                    <div className="size-14 rounded-full bg-mainColor" />
                </div>
            </div>
        </div>
    );
};

export default Header;
