const Overlay = ({ onClick, isOpen }: { onClick?: () => void; isOpen?: boolean }) => {
    return (
        <div
            onClick={onClick}
            className={`fixed top-0 left-0 z-50 size-full animate bg-black/50 ${isOpen ? 'opacity-50' : 'pointer-events-none opacity-0'} `}
        ></div>
    );
};

export default Overlay;
