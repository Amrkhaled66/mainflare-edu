import PageTitle from '@/shared/components/ui/PageTitle';
import AddAddressBtn from './features/addAddressBtn/AddAddressBtn';
import AddAddressModel from './features/AddAddressModel/AddAddressModel';
import DeliveryInfo from './features/deliveryIfno/DeliveryInfo';
import OrderSummary from './features/orderSummary/OrderSummary';
import Table from './features/table/Table';

import { DeliveryInfoProvider } from './context/DeliveryInfoFormCtx';

import { useState } from 'react';
import { user } from './cart';

const CartContent = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
    const openModal = () => setShowModal(true);
    return (
        <div className="container space-y-8">
            <PageTitle title="عربة التسوق" />

            <div className="flex flex-col justify-between gap-x-10 gap-y-8 lg:flex-row">
                <Table />
                <div className="flex flex-col gap-y-6 lg:w-[400px]">
                    {Object.entries(user).length > 0 ? (
                        <>
                            <DeliveryInfo openModal={openModal} />
                            <OrderSummary />
                        </>
                    ) : (
                        <AddAddressBtn openModal={openModal} />
                    )}
                </div>
            </div>
            <AddAddressModel isOpen={showModal} onClose={closeModal} />
        </div>
    );
};

const CartScreen = () => {
    return (
        <DeliveryInfoProvider initialValues={user}>
            <CartContent />
        </DeliveryInfoProvider>
    );
};

export default CartScreen;
