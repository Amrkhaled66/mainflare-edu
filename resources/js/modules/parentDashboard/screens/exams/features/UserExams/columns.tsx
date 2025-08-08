const parentExamsColumns = (onShowResult: (exam: any) => void) => [
    {
        name: 'اسم الامتحان',
        selector: (row: { examName: string }) => <p className="text-nowrap">{row.examName} </p>,
        wrap: true,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'المادة',
        selector: (row: { subject: string }) => row.subject,
        wrap: true,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'تاريخ إنشاء الامتحان',
        selector: (row: { examCreatedDate: string }) => row.examCreatedDate,
        sortable: true,
        width: '200px',
    },
    {
        name: 'تاريخ التسليم',
        selector: (row: { submitDate: string | null }) => row.submitDate || '—',
        sortable: true,
        width: '150px',
    },
    {
        name: 'الحالة',
        cell: (row: { status: string }) => (
            <span
                className={`rounded-full px-3 py-1 text-sm font-medium text-nowrap ${
                    row.status === 'تم الحل' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
            >
                {row.status}
            </span>
        ),
        sortable: true,
        width: 'auto',
    },
    {
        name: 'الوقت المستغرق',
        selector: (row: { takenTime: string }) => row.takenTime,
        wrap: true,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'الدرجة',
        selector: (row: { mark: number }) => `${row.mark}`,
        wrap: true,
        sortable: true,
        width: 'auto',
    },
    {
        name: 'عرض النتيجة',
        cell: (row: any) => (
            <button onClick={() => onShowResult(row)} className="animate text-nowrap hover:underline">
                عرض النتيجة
            </button>
        ),
        width: 'auto',
    },
];

export default parentExamsColumns;
