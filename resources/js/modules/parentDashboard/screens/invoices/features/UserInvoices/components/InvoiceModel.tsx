import Model from '@/shared/components/ui/Modal';

import CloseButton from '@/shared/components/ui/CloseButton';

import priceFormatter from '@/shared/utils/priceFormatter';
import clsx from 'clsx';

import { Icon } from '@iconify/react/dist/iconify.js';
const InvoiceModel = ({ invoice, onClose }: { invoice: any; onClose: () => void }) => {
    return (
        <Model onClose={onClose} isOpen={invoice !== null}>
            <div className="relative w-[80%] rounded-xl bg-white p-6 text-center lg:min-w-[600px]">
                <div className="b-stroke space-y-6">
                    <div className="flex-cneter">
                        <div className="absolute top-4 right-4">
                            <CloseButton onClick={onClose} />
                        </div>
                        <p className="text-center text-xl font-semibold">تفاصيل الفاتورة</p>
                    </div>
                    <div className="space-y-3">
                        <div
                            className={clsx(
                                'flex-center mx-auto size-[70px] rounded-full',
                                invoice?.paidData.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                            )}
                        >
                            <div className={clsx('rounded-full p-1 text-white', invoice?.paidData.isPaid ? 'bg-green-800' : 'bg-red-800')}>
                                {invoice?.paidData.isPaid ? (
                                    <Icon icon="material-symbols:check-rounded" width="24" height="24" />
                                ) : (
                                    <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                                )}
                            </div>
                        </div>
                        <p className="space-x-2">
                            <span>فاتورة بكود</span>
                            <span>{invoice?.id}</span>
                        </p>
                        <p>{priceFormatter(invoice?.price)}</p>
                        <div
                            className={clsx(
                                'mx-auto w-fit rounded-full px-2.5 py-1 text-sm font-medium',
                                invoice?.paidData.isPaid ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800',
                            )}
                        >
                            {invoice?.paidData.isPaid ? 'مدفوع' : 'غير مدفوع'}
                        </div>
                    </div>
                </div>
                <div className="b-stroke space-y-3">
                    <div className="flex items-center justify-between">
                        <p>نوع الطلب</p>
                        <p>{invoice?.type}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>تاريخ الشراء:</p>
                        <p>{invoice?.paidData.date}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>طريقة الدفع</p>
                        <p>{invoice?.paidData.method}</p>
                    </div>
                </div>
                <div className="b-stroke space-y-1 text-start">
                    <p className="font-medium">تفاصيل المشتريات</p>
                    <div className="space-y-2 rounded-xl">
                        {invoice?.products.map((product: string, idx: number) => (
                            <div key={idx} className="flex items-center justify-between">
                                <p>{product}</p>
                                <p>{priceFormatter(invoice?.price / invoice?.products.length)}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-2 pt-3 text-start">
                    <p className="font-medium">رابط الفاتورة</p>
                    <a href={invoice?.link} target="_blank" className="line-clamp-1 hover:underline">
                        {invoice?.link}
                    </a>
                </div>
            </div>
        </Model>
    );
};

export default InvoiceModel;
