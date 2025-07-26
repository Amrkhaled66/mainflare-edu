import React from 'react';

const GridView = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`container grid grid-cols-2 lg:grid-cols-3 gap xl:grid-cols-4 ${className}`}>{children}</div>;
};

export default GridView;
