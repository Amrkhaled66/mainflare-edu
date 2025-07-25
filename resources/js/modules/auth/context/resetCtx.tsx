import { createContext, useContext, useState } from 'react';

const ResetContext = createContext({
    phone: '',
    changePhone: (phone: string) => {},
    token: '',
    changeToken: (token: string) => {},
});

export default function ResetProvider({ children }: { children: React.ReactNode }) {
    const [phone, setPhone] = useState('');
    const [token, setToken] = useState('');

    const changePhone = (phone: string) => {
        setPhone(phone);
    };

    const changeToken = (token: string) => {
        setToken(token);
    };

    return (
        <ResetContext.Provider
            value={{
                phone,
                changePhone,
                token,
                changeToken,
            }}
        >
            {children}
        </ResetContext.Provider>
    );
}
export const useReset = () => useContext(ResetContext);
