import ComboBox from '@/shared/components/ui/ComboBox';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';

import { useDeliveryInfo } from '@/modules/cart/context/DeliveryInfoFormCtx';

const DeliveryForm = ({ onClose }: { onClose: () => void }) => {
    const { formData, errors, isSubmitting, handleInputChange, handleCitySelect, handleAreaSelect, handleSubmit, isValid } = useDeliveryInfo();

    const onSubmit = async (data: any) => {
        //  logic
        console.log('Submitting:', data);
        onClose();
    };

    return (
        <form
            className="space-y-6"
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit);
            }}
        >
            <FormInputWithLabel
                label="الاسم"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                error={errors.name}
            />
            <div className="grid grid-cols-2 gap-x-6">
                <FormInputWithLabel
                    label="رقم الهاتف"
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    error={errors.phone}
                />
                <FormInputWithLabel
                    label="رقم اخر"
                    type="text"
                    value={formData.alternativePhone}
                    onChange={(e) => handleInputChange('alternativePhone', e.target.value)}
                    error={errors.alternativePhone}
                />
            </div>
            <div className="grid grid-cols-2 gap-x-6">
                <ComboBox
                    label="المدينة"
                    name="city"
                    value={formData.city}
                    options={[{ name: 'القاهرة' }, { name: 'الجيزة' }, { name: 'المنصورة' }]}
                    onSelected={handleCitySelect}
                />
                <ComboBox
                    label="المنطقة"
                    name="area"
                    value={formData.area}
                    options={[{ name: 'المعادي' }, { name: 'مدينة نصر' }, { name: 'الهرم' }]}
                    onSelected={handleAreaSelect}
                />
            </div>
            <FormInputWithLabel
                label="العنوان بالتفصيل"
                type="text"
                value={formData.detailedAddress}
                onChange={(e) => handleInputChange('detailedAddress', e.target.value)}
                error={errors.detailedAddress}
            />
            <button type="submit" className="btn btn-primary w-full">
                اضافة
            </button>
        </form>
    );
};

export default DeliveryForm;
