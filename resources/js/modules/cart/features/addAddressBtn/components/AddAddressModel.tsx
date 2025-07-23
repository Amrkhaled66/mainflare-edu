import CloseButton from '@/shared/components/ui/CloseButton';
import Model from '@/shared/components/ui/Modal';

import ComboBox from '@/shared/components/ui/ComboBox';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
const AddAddressModel = ({ onClose, isOpen }: { onClose: () => void; isOpen: boolean }) => {
    return (
        <Model isOpen={isOpen} onClose={onClose}>
            <div dir="rtl" className="w-[670px] space-y-10 rounded-2xl bg-white p-10">
                <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold">أضافة عنوان</p>
                    <CloseButton onClick={onClose} />
                </div>
                <form className="space-y-6">
                    <FormInputWithLabel label="الاسم" type="text" />

                    <div className="grid grid-cols-2 gap-x-6">
                        <FormInputWithLabel label="رقم الهاتف" type="text" />
                        <FormInputWithLabel label="رقم اخر" type="text" />
                    </div>

                    <div className="grid grid-cols-2 gap-x-6">
                        <ComboBox
                            label="المدينة"
                            name="city"
                            value=""
                            options={[{ name: 'القاهرة' }, { name: 'الجيزة' }, { name: 'المنصورة' }]}
                            Input={<FormInputWithLabel type="text" placeholder="اختر المدينة" inputClassName="pr-6" />}
                            onSelected={() => {}}
                        />

                        <ComboBox
                            label="المنطقة"
                            name="area"
                            value=""
                            options={[{ name: 'المعادي' }, { name: 'مدينة نصر' }, { name: 'الهرم' }]}
                            Input={<FormInputWithLabel type="text" placeholder="اختر المدينة" inputClassName="pr-6" />}
                            onSelected={() => {}}
                        />
                    </div>

                    <FormInputWithLabel label="العنوان بالتفصيل" type="text" />
                </form>
                <button className="btn btn-primary w-full">اضافة</button>
            </div>
        </Model>
    );
};

export default AddAddressModel;
