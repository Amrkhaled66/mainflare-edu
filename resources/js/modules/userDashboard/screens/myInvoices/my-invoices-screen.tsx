import SearchBox from '@/shared/components/ui/SearchBox';
import DashBoardContainer from '../../../../shared/components/ui/DashBoardContainer';

import { useCallback, useState } from 'react';
import invoices from './invoices';
import UserInvoices from './features/UserInvoices/UserInvoices';
const MyInvoicesScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onSearch = useCallback((searchTerm_: string) => {
        setSearchTerm(searchTerm_);
    }, []);

    const filteredCInvoices = invoices.filter((invoice) => invoice?.id?.includes(searchTerm.toLowerCase()));

    return (
        <DashBoardContainer>
            <div className="w-full space-y-6">
                <div className="flex flex-col justify-between gap-y-4 lg:flex-row">
                    <div className="space-y-3">
                        <h1 className="text-xl font-semibold">الفواتير</h1>
                        <p className="text-subTitle">تقدر تتابع كل فواتيرك من هنا</p>
                    </div>
                    <SearchBox placeholder="ابخث  بكود الفاتورة" onSearch={onSearch} className="bg-white" />
                </div>
                <UserInvoices invoices={filteredCInvoices} />
            </div>
        </DashBoardContainer>
    );
};

export default MyInvoicesScreen;
