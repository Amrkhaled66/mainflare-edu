import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const InvoiceMobileCard = ({
    invoice,
    order,
}: {
    invoice: {
        id: string;
        products: string[];
        type: string;
        price: number;
        invoiceStatus: string;
        paidData: { date: string; method: string };
        link: string;
    };
    order: number;
}) => {
    return (
        <div className="flex flex-col gap-y-3 rounded-3xl border border-stroke bg-white p-4 text-xs font-medium">
            <div className="flex items-center justify-between">
                <p>ترتيب الفاتورة: {order}</p>
                <p>رقم الفاتورة: {invoice.id}</p>
            </div>

            <div className="flex gap-x-2">
                <p>المنتجات:</p>
                <ul className="list-disc space-y-1 ps-4 text-start">
                    {invoice.products.map((product, idx) => (
                        <li key={idx}>{product}</li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-2">
                    <p>النوع:</p>
                    <span>{invoice.type}</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <p>السعر:</p>
                    <span>{invoice.price} ج.م</span>
                </div>
                <div className="flex items-center gap-x-2">
                    <p>الحالة:</p>
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            invoice.invoiceStatus === 'مدفوع' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}
                    >
                        {invoice.invoiceStatus}
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <div className="space-x-2">
                    <span>تاريخ الدفع:</span>
                    <span>{invoice.paidData.date || '—'}</span>
                </div>
                <div className="space-x-2">
                    <span>طريقة الدفع:</span>
                    <span>{invoice.paidData.method || '—'}</span>
                </div>
            </div>

            <Link to={invoice.link} target="_blank" rel="noopener noreferrer">
                <button className="btn-outline flex-center w-full gap-1 text-sm">
                    <Icon icon="tabler:link" className="size-4" />
                    عرض الفاتورة
                </button>
            </Link>
        </div>
    );
};

export default InvoiceMobileCard;
