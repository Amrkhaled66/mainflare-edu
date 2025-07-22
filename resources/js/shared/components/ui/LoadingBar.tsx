import { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';

import '../../../../css/loadingBar.css';

const LoadingBar = () => {
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        if (navigation.state === 'loading') {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [navigation.state]);
    console.log(navigation.state);
    return (
        <div className={`${loading ? 'loading-bar' : 'loading-hidden'} fixed inset-x-0 top-0 z-50 h-1 w-full transition-all duration-100`}>
            <div className="loading-bar inset-0 h-full w-full transition-all duration-100"></div>
        </div>
    );
};

export default LoadingBar;
