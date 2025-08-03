import ResetPassword from './features/ResetPassword/ResetPassword';
import UserImage from './features/UserImage/UserImage';
import UserInfo from './features/UserInfo/UserInfo';

import User from './User';

const SettingsScreen = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <UserImage img={User.img} name={User.name} />
                <ResetPassword />
            </div>
            <UserInfo />
        </div>
    );
};

export default SettingsScreen;
