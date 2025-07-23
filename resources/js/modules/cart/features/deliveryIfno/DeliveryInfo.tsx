import { Icon } from '@iconify/react/dist/iconify.js';
import { user } from '../../cart';

import { useDeliveryInfo } from '../../context/DeliveryInfoFormCtx';

function UserInfoItem({ icon, text, spanFull = false }: { icon: string; text: string; spanFull?: boolean }) {
    return (
        <p className={`flex items-center gap-x-2 ${spanFull ? 'col-span-2' : ''}`}>
            <Icon icon={icon} className="size-4" />
            {text}
        </p>
    );
}
const DeliveryInfo = ({ openModal }: { openModal: () => void }) => {
    const { formData } = useDeliveryInfo();

    return (
        <div className="space-y-6 rounded-2xl border border-stroke bg-bgBackground p-5 text-center text-textColor">
            <p className="text-lg font-bold">سيتم التوصيل الي</p>
            <div className="grid grid-cols-2 gap-y-2 text-start text-sm">
                <UserInfoItem icon="solar:user-linear" text={formData.name} />
                <UserInfoItem icon="solar:phone-linear" text={user.phone} />
                <UserInfoItem icon="solar:phone-linear" text={formData.alternativePhone} />
                <UserInfoItem icon="tdesign:map-location" text={formData.city} />
                <UserInfoItem icon="ph:map-pin-area-fill" text={formData.area} />
                <UserInfoItem icon="solar:home-linear" text={formData.detailedAddress} spanFull />
            </div>

            <button onClick={openModal} className="btn-outline flex-center w-full font-bold">
                تعديل
            </button>
        </div>
    );
};

export default DeliveryInfo;
