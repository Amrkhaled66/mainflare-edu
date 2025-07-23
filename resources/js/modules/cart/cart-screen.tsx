import PageTitle from '@/shared/components/ui/PageTitle';
import AddAddressBtn from './features/addAddressBtn/AddAddressBtn';
import DeliveryInfo from './features/deliveryIfno/DeliveryInfo';
import OrderSummary from './features/orderSummary/OrderSummary';
import Table from './features/table/Table';

const CartScreen = () => {
    return (
        <div className="container space-y-8">
            <PageTitle title="عربة التسوق" />

            <div className="flex flex-col justify-between gap-x-10 gap-y-8 lg:flex-row">
                <Table />
                <div className="flex flex-col gap-y-6 lg:w-[400px]">
                    {false ? (
                        <>
                            <DeliveryInfo />
                            <OrderSummary />
                        </>
                    ) : (
                        <AddAddressBtn />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartScreen;
