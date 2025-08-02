import logo from '@/assets/logo.svg';
import paths from '@/routes/paths';
import { Link } from 'react-router';

const Header = () => {
    const name = 'Amr Khalid';
    return (
        <div className="bg-mainColor-50 py-6">
            <div className="px-6 flex justify-between">
                <Link to="/">
                    <img src={logo} alt="on skill" />
                </Link>
                <div className="mr-8 flex items-center gap-x-3">
                    <div className="space-y-2 font-medium">
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
