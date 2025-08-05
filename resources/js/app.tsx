import AppRouter from '@/routes/AppRouter';
import NavBarToggleBtnsProvider from './shared/context/NavBarToogleBtnsCtx';

export default function App() {
    return (
        <>
            <NavBarToggleBtnsProvider>
                <AppRouter />
            </NavBarToggleBtnsProvider>
        </>
    );
}
