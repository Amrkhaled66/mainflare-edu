import AnimatingFormBody from '@/modules/auth/components/AnimatingFormBody';
import PasswordInput from '@/modules/auth/components/PasswordInput';
import ComboBox from '@/shared/components/ui/ComboBox';
import FormInputWithLabel from '@/shared/components/ui/FormInputWithLabel';
const SignUpForm = () => {
    return (
        <AnimatingFormBody>
            <div className="grid grid-cols-3 gap-x-6">
                <FormInputWithLabel label="الاسم الاول" type="text" name="name" placeholder="اسم المستخدم" />
                <FormInputWithLabel label="الوسط" type="text" name="name" placeholder="اسم المستخدم" />
                <FormInputWithLabel label="الاسم الاخير" type="text" name="name" placeholder="اسم المستخدم" />
            </div>
            <FormInputWithLabel mode="numeric" label="رقم الهاتف" type="text" name="name" placeholder="اسم المستخدم" />

            <PasswordInput label="كلمة المرور" name="name" placeholder="كلمة المرور" />
            <PasswordInput label="تاكيد كلمة المرور" name="name" placeholder="كلمة المرور" />

            <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
                <ComboBox
                    label="الفصل الدراسي"
                    name="grade"
                    value={''}
                    options={[{ name: 'تالتة ثانوي' }, { name: 'تالتة ثانوي' }, { name: 'تالتة ثانوي' }]}
                    onSelected={() => {}}
                />
                <ComboBox label="الشعبة" name="grade" value={''} options={[{ name: 'ادبي' }, { name: 'علمي' }]} onSelected={() => {}} />
            </div>

            <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
                <FormInputWithLabel mode="numeric" label="رقم الهاتف" type="text" name="name" placeholder="اسم المستخدم" />
                <FormInputWithLabel mode="numeric" label="الرقم القومي" type="text" name="name" placeholder="اسم المستخدم" />
            </div>

            <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-2">
                <FormInputWithLabel mode="numeric" label="رقم هاتف الاب" type="text" name="name" placeholder="اسم المستخدم" />
                <FormInputWithLabel mode="numeric" label="رقم هاتف الام" type="text" name="name" placeholder="اسم المستخدم" />
            </div>

            <button className="btn btn-primary mt-4 w-full"> انشاء الحساب</button>
        </AnimatingFormBody>
    );
};

export default SignUpForm;
