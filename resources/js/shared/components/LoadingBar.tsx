import { useEffect, useState } from 'react';
import {  useNavigation } from 'react-router-dom';

import '../../../css/loadingBar.css';

const LoadingBar = () => {
    const [loading, setLoading] = useState(false); 
    const navigation = useNavigation();

    useEffect(() => {
        if (navigation.state === "loading") {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [navigation.state]); 
console.log(navigation.state)
    return (
        <div
            className={`${
                loading ? 'loading-bar' : 'loading-hidden'
            } transition-all fixed duration-100 inset-x-0 top-0 z-50 h-1 w-full`}
        >
            <div className="loading-bar transition-all  duration-100 inset-0 h-full w-full"></div>
        </div>
    );
};

export default LoadingBar;
