import PasswordInput from '@/modules/auth/components/PasswordInput';
import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
const ResetPassword = () => {
    return (
        <DashBoardContainer>
            <div className="space-y-6">
                <p className="border-b border-b-stroke pb-3 text-xl font-semibold">تغيير كلمة المرور</p>
                <form className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <PasswordInput label="كلمة المرور الحالية" containerClassName="lg:col-span-2" inputClassName="bg-white" />
                    <PasswordInput label="كلمة المرور الجديدة" inputClassName="bg-white" />
                    <PasswordInput label="تأكيد كلمة المرور الجديدة" inputClassName="bg-white" />
                    <div className="col-span-1 flex justify-end lg:col-span-2">
                        <button className="btn btn-primary w-[200px]">حفظ</button>
                    </div>
                </form>
            </div>
        </DashBoardContainer>
    );
};

export default ResetPassword;
