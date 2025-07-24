import { Outlet } from 'react-router';
import FixedLogoSection from './components/FixedLogoSection';
const layout = () => {
    return (
        <div
                        style={{ background: 'linear-gradient(180deg, #393962 2.49%, #7474C8 254.88%)' }}

            className={`flex h-auto lg:h-screen !overflow-y-auto  justify-between min-h-screen w-full flex-col lg:flex-row`}
        >
            <FixedLogoSection />
            <div className="relative h-full lg:!pb-8 min-h-fit flex lg:bg-white  w-screen flex-col  justify-center items-center lg:justify-start  lg:container lg:w-[55%] lg:rounded-none lg:p-0">
                <Outlet />
            </div>
        </div>
    );
};

export default layout;
