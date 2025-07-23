import { useState } from 'react';
import AddAddressModel from './components/AddAddressModel';
const AddAddressBtn = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    return (
        <>
            <button onClick={openModal} className="btn btn-primary w-full">
                أضافة عنوان
            </button>
           <AddAddressModel isOpen={showModal} onClose={closeModal} />
        </>
    );
};

export default AddAddressBtn;
