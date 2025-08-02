import React from 'react';

const DashBoardContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`border p-6 ${className} rounded-3xl  border-stroke bg-bgBackground`}>{children}</div>;
};

export default DashBoardContainer;
