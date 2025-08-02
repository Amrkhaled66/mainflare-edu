import { Outlet } from 'react-router';
import Header from './components/Header';
import SideBar from './components/SideBar';
const layout = () => {
    return (
        <div dir="rtl" className="overflow-hidden">
            <Header />
            <div className="flex">
                <SideBar />
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default layout;
