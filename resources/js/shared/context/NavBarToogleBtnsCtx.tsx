import { createContext, ReactNode, useContext, useState } from 'react';

const NavBarToggleBtns = createContext<
    | {
          openCart: boolean;
          toggleCart: () => void;
          reset: () => void;
      }
    | undefined
    >(undefined);

const NavBarToggleBtnsProvider = ({ children }: { children: ReactNode }) => {
    const [openCart, setOpenCart] = useState(false);

    const toggleCart = () => setOpenCart((prev) => !prev);

    const reset = () => {
        setOpenCart(false);
    };

    const ctxValue = {
        openCart,
        toggleCart,
        reset,
    };

    return <NavBarToggleBtns.Provider value={ctxValue}>{children}</NavBarToggleBtns.Provider>;
};

const useNavBarToggleBtns = () => {
    const context = useContext(NavBarToggleBtns);
    if (!context) {
        throw new Error('useNavBarToggleBtns Context');
    }
    return context;
};

export default NavBarToggleBtnsProvider;

export { useNavBarToggleBtns };
