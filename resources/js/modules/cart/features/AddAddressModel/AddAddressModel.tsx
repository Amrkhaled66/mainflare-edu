import CloseButton from '@/shared/components/ui/CloseButton';
import Model from '@/shared/components/ui/Modal';

import DeliveryForm from './components/DeliveryForm';
const AddAddressModel = ({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) => {
    return (
        <Model isOpen={isOpen} onClose={onClose}>
            <div dir="rtl" className="w-[670px] space-y-10 rounded-2xl bg-white p-10">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">أضافة عنوان</p>
                    <CloseButton onClick={onClose} />
                </div>
                <DeliveryForm onClose={onClose} />
            </div>
        </Model>
    );
};

export default AddAddressModel;
