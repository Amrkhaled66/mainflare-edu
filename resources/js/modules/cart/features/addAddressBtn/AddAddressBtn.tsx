const AddAddressBtn = ({ openModal }: { openModal: () => void }) => {

    return (
            <button onClick={openModal} className="btn btn-primary w-full">
                أضافة عنوان
            </button>
    );
};

export default AddAddressBtn;
