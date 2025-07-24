import logo from '@/assets/logo.svg';
import React from 'react';
const PageHeader = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div dir="rtl" className="hidden items-center justify-between py-8 lg:flex">
            <img src={logo} alt="onSkill" />
            {children}
        </div>
    );
};

export default PageHeader;
