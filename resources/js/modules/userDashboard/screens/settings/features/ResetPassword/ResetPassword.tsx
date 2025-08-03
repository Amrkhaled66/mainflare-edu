import PasswordInput from '@/modules/auth/components/PasswordInput';
import DashBoardContainer from '@/modules/userDashboard/components/DashBoardContainer';
const ResetPassword = () => {
    return (
        <DashBoardContainer>
            <div className="space-y-6">
                <p className="border-b border-b-stroke pb-3 text-xl font-semibold">تغيير كلمة المرور</p>
                <form className="gap grid grid-cols-2">
                    <PasswordInput label="كلمة المرور الحالية" containerClassName="col-span-2" inputClassName="bg-white" />
                    <PasswordInput label="كلمة المرور الجديدة" inputClassName="bg-white" />
                    <PasswordInput label="تأكيد كلمة المرور الجديدة" inputClassName="bg-white" />
                    <div className="col-span-2 flex justify-end">
                        <button className="btn btn-primary w-[200px]">حفظ</button>
                    </div>
                </form>
            </div>
        </DashBoardContainer>
    );
};

export default ResetPassword;
