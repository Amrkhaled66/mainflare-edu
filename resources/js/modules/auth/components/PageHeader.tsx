import logo from '@/assets/logo.svg';
import React from 'react';
import { Link } from 'react-router';
const PageHeader = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div dir="rtl" className="hidden items-center justify-between py-8 lg:flex">
            <Link to='/'>
                <img src={logo} alt="onSkill" />
            </Link>
            {children}
        </div>
    );
};

export default PageHeader;
