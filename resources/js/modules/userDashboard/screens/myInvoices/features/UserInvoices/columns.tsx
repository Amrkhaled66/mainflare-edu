import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

const columns = [
    {
        name: 'رقم الفاتورة',
        selector: (row: { id: string }) => row.id,
        wrap: true,
        width: 'auto',
        sortable: true,
    },
    {
        name: 'المنتجات',
        cell: (row: { products: string[] }) => (
            <ul className="list-disc space-y-1 ps-4 text-sm">
                {row.products.map((item, idx) => (
                    <li className="line-clamp-1" key={idx}>
                        {item}
                    </li>
                ))}
            </ul>
        ),
        width: '250px',
        wrap: true,
    },
    {
        name: 'حالة الفاتورة',
        selector: (row: { invoiceStatus: string }) => row.invoiceStatus,
        cell: (row: { invoiceStatus: string }) => (
            <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                    row.invoiceStatus === 'مدفوع' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
            >
                {row.invoiceStatus}
            </span>
        ),
        sortable: true,
        width: 'auto',
    },
    {
        name: 'النوع',
        selector: (row: { type: string }) => row.type,
        wrap: true,
        sortable: true,
    },
    {
        name: 'تاريخ الدفع',
        cell: (row: { paidData: { date: string | null } }) => <span>{row.paidData?.date || '—'}</span>,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'طريقة الدفع',
        cell: (row: { paidData: { method: string | null } }) => <span>{row.paidData?.method || '—'}</span>,
        wrap: true,
        width: 'auto',
    },
    {
        name: 'السعر',
        selector: (row: { price: number }) => `${row.price} ج.م`,
        wrap: true,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'رابط الفاتورة',
        cell: (row: { link: string }) => (
            <Link to={row.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-mainColor hover:underline">
                <Icon icon="tabler:link" className="size-5" />
                عرض
            </Link>
        ),
        width: 'auto',
    },
];

export default columns;
