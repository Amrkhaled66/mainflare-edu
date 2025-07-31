import PageTitle from '@/shared/components/ui/PageTitle';
import { InvoiceForm } from './features/InvoiceForm/InvoiceForm';
import InvoiceSummary from './features/InvoiceSummary/InvoiceSummary';
const CheckoutScreen = () => {
    return (
        <div className="container space-y-8">
            <PageTitle title="الفاتورة" />

            <div className="flex gap-y-8 flex-col gap-x-10 lg:flex-row">
                <InvoiceForm />
                <InvoiceSummary />
            </div>
        </div>
    );
};

export default CheckoutScreen;
