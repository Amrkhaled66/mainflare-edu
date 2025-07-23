import { Icon } from '@iconify/react/dist/iconify.js';
import { user } from '../../cart';

function UserInfoItem({ icon, text, spanFull = false }: { icon: string; text: string; spanFull?: boolean }) {
    return (
        <p className={`flex items-center gap-x-2 ${spanFull ? 'col-span-2' : ''}`}>
            <Icon icon={icon} className="size-4" />
            {text}
        </p>
    );
}
const DeliveryInfo = () => {
    return (
        <div className="space-y-6 rounded-2xl border border-stroke bg-bgBackground p-5 text-center text-textColor">
            <p className="font-bold text-lg">سيتم التوصيل الي</p>
            <div className="grid grid-cols-2 gap-y-1 text-start text-sm">
                <UserInfoItem icon="solar:user-linear" text={user.name} />
                <UserInfoItem icon="solar:phone-linear" text={user.phone} />
                <UserInfoItem icon="tdesign:map-location" text={user.city} />
                <UserInfoItem icon="ph:map-pin-area-fill" text={user.town} />
                <UserInfoItem icon="solar:home-linear" text={user.address} spanFull />
            </div>

            <button className="btn-outline flex-center w-full font-bold">تعديل</button>
        </div>
    );
};

export default DeliveryInfo;
