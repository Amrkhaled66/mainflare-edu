import React from 'react';

const DashBoardContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`p-6 ${className} rounded-lg border border-stroke bg-bgBackground `}>{children}</div>;
};

export default DashBoardContainer;
