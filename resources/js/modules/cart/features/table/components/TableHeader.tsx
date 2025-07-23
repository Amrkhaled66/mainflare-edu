const TableHeader = () => {
    return (
        <thead>
            <tr className="hidden w-full grid-cols-[2fr_1fr_1fr_1fr] rounded-2xl bg-mainColor px-4 py-5 text-white *:text-center lg:grid">
                <th className="!text-start">الكتاب</th>
                <th>الكمية</th>
                <th>السعر</th>
                <th>حذف</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
