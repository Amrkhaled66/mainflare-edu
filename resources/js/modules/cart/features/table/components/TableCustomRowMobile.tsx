import priceFormatter from '@/shared/utils/priceFormatter';

import { Icon } from '@iconify/react/dist/iconify.js';
import SelectorView from './QuantitySelector';

const TableCustomRowMobile = ({ id, title, img, quantity, price }: { id: number; title: string; img: string; quantity: number; price: number }) => {
    return (
        <div className="flex flex-col gap-y-3 rounded-2xl bg-mainColor-200 px-4 py-3 font-bold text-textColor *:text-start">
            <div className="flex justify-between">
                <p className="flex gap-x-2.5 overflow-hidden">
                    <img className="size-[60px] rounded-2xl" src={img} alt={title} />
                    <span className="max-w-[200px] h-fit line-clamp-2">{title}{title}{title}{title}</span>
                </p>
                <button>
                    <Icon icon="fluent:delete-24-regular" className="size-6 text-red-600" />
                </button>
            </div>
            <div className="flex justify-between">
                <div className="flex-center">
                    <p>{priceFormatter(price * quantity)}</p>
                </div>
                <div className="flex-center">
                    <SelectorView quantity={quantity} />
                </div>
            </div>
        </div>
    );
};

export default TableCustomRowMobile;
