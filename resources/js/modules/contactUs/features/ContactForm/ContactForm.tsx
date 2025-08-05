import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
const ContactForm = () => {
    return (
        <form className="space-y-4 rounded-2xl border border-stroke bg-bgBackground p-5 drop-shadow-md">
            <div className="grid gap-y-4 lg:grid-cols-2 gap-x-2">
                <FormInputWithLabel inputClassName="bg-white" label="الاسم بالكامل" name="name" placeholder="الاسم بالكامل" />
                <FormInputWithLabel inputClassName="bg-white" mode="numeric" label="رقم الهاتف" name="phoneNumber" placeholder="رقم الهاتف" />
            </div>
            <FormInputWithLabel inputClassName="bg-white" label="البريد الالكتروني" name="email" placeholder="البريد الالكتروني" />

            <label dir="rtl" className={`flex flex-col !gap-y-4 font-medium text-textColor`}>
                <span className="font-bold">ملاحظات</span>
                <textarea
                    name="note"
                    placeholder={'ملاحظات'}
                    // onChange={onChange}
                    className="rounded-2xl border outline-none focus:outline-mainColor bg-white h-[140px] border-stroke p-4"
                />
                {/* {error && <p className="text-sm text-red-600">{error}</p>} */}
            </label>

            <button className="btn btn-primary mt-2.5 w-[200px]">ارسال</button>
        </form>
    );
};

export default ContactForm;
