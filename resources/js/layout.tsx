import Footer from '@/shared/components/layout/Footer';
import Header from '@/shared/components/layout/Header';
import CartBar from './shared/components/layout/CartBar';
import PageNav from './shared/components/layout/PageNav';
import Overlay from './shared/components/ui/Overlay';

import { useNavBarToggleBtns } from './shared/context/NavBarToogleBtnsCtx';

import { Outlet, useLocation } from 'react-router';
import ScrollToTop from './shared/components/ScrollToTop';
import LoadingBar from './shared/components/ui/LoadingBar';
import usePageTitle from './shared/hooks/usePageTitle';
const layout = () => {
    const { pathname } = useLocation();
    const { openCart, toggleCart } = useNavBarToggleBtns();

    usePageTitle();
    return (
        <div dir="rtl">
            <ScrollToTop />
            <Header />
            <CartBar />
            <LoadingBar />
            <main className="pt-[100px]">
                <div className={pathname !== '/' ? 'section-padding' : ''}>
                    <PageNav />
                    <Outlet />
                </div>
            </main>
            <Footer />
            <Overlay onClick={toggleCart} isOpen={openCart} />
        </div>
    );
};

export default layout;
