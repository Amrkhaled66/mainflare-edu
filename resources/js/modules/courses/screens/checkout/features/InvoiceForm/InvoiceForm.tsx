import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';

export const InvoiceForm = () => {
    return (
        <div className="main-rounded flex-1 space-y-6 border border-stroke lg:space-y-10 bg-bgBackground p-6 drop-shadow-sm">
            <h2 className="text-2xl font-bold">تفاصيل الفاتورة</h2>
            <form className="gap grid grid-cols-1 lg:grid-cols-2">
                <FormInputWithLabel inputClassName="bg-white" label="الاسم الاول" name="firstName" placeholder="الاسم الاول" />
                <FormInputWithLabel inputClassName="bg-white" label="الاسم الاخير" name="lastName" placeholder="الاسم الاخير" />
                <FormInputWithLabel inputClassName="bg-white" label=" رقم الهاتف" name="phone" placeholder="رقم الهاتف" />
            </form>
        </div>
    );
};
