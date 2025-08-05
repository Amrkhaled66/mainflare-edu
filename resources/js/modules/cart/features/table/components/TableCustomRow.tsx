import priceFormatter from '@/shared/utils/priceFormatter';

import { Icon } from '@iconify/react/dist/iconify.js';
import SelectorView from '../../../../../shared/components/ui/QuantitySelector';

const TableCustomRow = ({ id, title, img, quantity, price }: { id: number; title: string; img: string; quantity: number; price: number }) => {
    return (
        <tr className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center rounded-2xl bg-mainColor-200 px-4 py-3 font-bold text-textColor *:text-start">
            <td>
                <p className="flex items-center gap-x-2.5 overflow-hidden">
                    <img className="size-[60px] rounded-2xl" src={img} alt={title} />
                    <span className="lg:max-w-[200px]">{title}</span>
                </p>
            </td>
            <td className="flex-center">
                <SelectorView quantity={quantity} />
            </td>
            <td className="flex-center">
                <p>{priceFormatter(price * quantity)}</p>
            </td>
            <td className="flex-center">
                <button>
                    <Icon icon="fluent:delete-24-regular" className="size-6 text-red-600" />
                </button>
            </td>
        </tr>
    );
};

export default TableCustomRow;
