import priceFormatter from '@/shared/utils/priceFormatter';

const OrderSummary = () => {
    return (
        <div className="space-y-6 rounded-2xl border border-stroke bg-bgBackground p-5 text-center text-textColor">
            <div className="space-y-3 font-bold">
                <div className="flex justify-between">
                    <p className="text-subTitle">تكلفة الطلب</p>
                    <p>{priceFormatter(22.98)}</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-subTitle">مصاريف الشحن</p>
                    <p>{priceFormatter(0)}</p>
                </div>

                <div className="flex justify-between">
                    <p>الاجمالي</p>
                    <p>{priceFormatter(22.98)}</p>
                </div>
            </div>
            <button className="btn btn-primary w-full">تأكيد الطلب</button>
        </div>
    );
};

export default OrderSummary;
