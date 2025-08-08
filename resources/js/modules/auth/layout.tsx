import usePageTitle from '@/shared/hooks/usePageTitle';
import { Outlet } from 'react-router';
import FixedLogoSection from './components/FixedLogoSection';
import ResetProvider from './context/resetCtx';
const layout = () => {
    usePageTitle();
    return (
        <ResetProvider>
            <div
                style={{ background: 'linear-gradient(180deg, #393962 2.49%, #7474C8 254.88%)' }}
                className={`flex h-auto min-h-screen w-full flex-col justify-between !overflow-y-auto lg:h-screen lg:flex-row`}
            >
                <div className="relative flex min-h-screen flex-col items-center justify-center overflow-auto lg:w-[55%] lg:justify-start lg:rounded-none lg:bg-white lg:p-0 lg:!pb-8">
                    <Outlet />
                </div>
                <FixedLogoSection />
            </div>
        </ResetProvider>
    );
};

export default layout;
