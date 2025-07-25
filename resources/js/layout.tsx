import Footer from '@/shared/components/layout/Footer';
import Header from '@/shared/components/layout/Header';
import PageNav from './shared/components/layout/PageNav';

import { Outlet, useLocation } from 'react-router';
import ScrollToTop from './shared/components/ScrollToTop';
import LoadingBar from './shared/components/ui/LoadingBar';
const layout = () => {
    const { pathname } = useLocation();

    return (
        <div dir="rtl">
            <ScrollToTop />
            <Header />
            <LoadingBar />
            <main className="pt-[100px]">
                <div className={pathname !== '/' ? 'section-padding' : ''}>
                    <PageNav />
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default layout;
