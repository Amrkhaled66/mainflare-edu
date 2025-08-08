import Table from '@/modules/userDashboard/components/Table';
import Pagination from '@/shared/components/Pagination';
import { useState } from 'react';
import columns from './columns';
import InvoiceMobileCard from './components/InvoiceMobileCard';
import InvoiceModel from './components/InvoiceModel';

import { useCallback } from 'react';
const UserInvoices = ({ invoices }: { invoices: any }) => {
    const [activeInvoice, setActiveInvoice] = useState(null);

    const onInvoiceClick = useCallback((invoice: any) => {
        setActiveInvoice(invoice);
    }, []);

    const onClose = useCallback(() => {
        setActiveInvoice(null);
    }, []);

    return (
        <>
            <div className="lg:hidden">
                <div className="gap grid grid-cols-1 sm:grid-cols-2">
                    {invoices.map((invoice: any, idx: number) => (
                        <InvoiceMobileCard key={idx} invoice={invoice} order={idx + 1} />
                    ))}
                </div>
                <Pagination pageCount={Math.ceil(invoices.length / 5)} handlePageClick={() => {}} forcePage={1} />
            </div>
            <div className="hidden lg:block">
                <Table data={invoices} columns={columns(onInvoiceClick)} pagination paginationPerPage={5} />
            </div>
            <InvoiceModel invoice={activeInvoice} onClose={onClose} />
        </>
    );
};

export default UserInvoices;
