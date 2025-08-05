import paths from '@/routes/paths';
import { useNavBarToggleBtns } from '@/shared/context/NavBarToogleBtnsCtx';
import clsx from 'clsx';
import { Link } from 'react-router';
import CloseButton from '../ui/CloseButton';

import cart from '@/shared/data/cart';
import useScrollLock from '@/shared/hooks/useScrollLock';

import priceFormatter from '@/shared/utils/priceFormatter';
const CartCustomCard = ({ product }: { product: any }) => {
    return (
        <div className="flex overflow-hidden rounded-2xl border border-stroke">
            <div className="size-30 overflow-hidden">
                <img className="size-full" src={product.img} alt={product.name} />
            </div>
            <div className="flex-1 space-y-2 p-4">
                <p className="font-medium">{product.grade}</p>
                <p className="line-clamp-2 font-bold">{product.name}</p>
                <div className="flex justify-between">
                    {/* <SelectorView /> */}
                    <p className="mr-auto font-bold">{priceFormatter(product.price)}</p>
                </div>
            </div>
        </div>
    );
};

const CartBar = () => {
    const { toggleCart, openCart } = useNavBarToggleBtns();
    useScrollLock(openCart);
    return (
        <div
            className={clsx(
                'animate fixed top-0 right-0 z-120 h-screen w-full space-y-6 bg-white p-4 sm:w-[420px] sm:p-8',
                openCart ? 'translate-x-0' : 'translate-x-full',
            )}
        >
            <div className="space-y-5 border-b border-b-stroke pb-3">
                <CloseButton onClick={toggleCart} />
                <div className="flex items-center justify-between">
                    <p className="text-lg font-bold">السلة</p>
                    <button className="font-medium hover:underline"> مسح الكل</button>
                </div>
            </div>
            <div className="max-h-[calc(100vh-320px)] space-y-4 overflow-y-auto">
                {cart.items.map((ele) => (
                    <CartCustomCard key={ele.id} product={ele} />
                ))}
            </div>
            <div className="flex flex-col gap-y-4">
                <Link onClick={toggleCart} to={paths.cart.path}>
                    <button className="btn btn-primary w-full">صفحة الدفع</button>
                </Link>
                <button onClick={toggleCart} className="btn-outline w-full">
                    متابعة التسوق
                </button>
            </div>
        </div>
    );
};

export default CartBar;
