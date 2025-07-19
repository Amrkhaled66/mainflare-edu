import { Icon } from '@iconify/react/dist/iconify.js';
const CloseButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button className="animate flex-center size-9 rounded-xl bg-mainColor text-white hover:drop-shadow-xl" onClick={onClick}>
            <Icon icon="material-symbols:close-rounded" width="24" height="24" />
        </button>
    );
};

export default CloseButton;
