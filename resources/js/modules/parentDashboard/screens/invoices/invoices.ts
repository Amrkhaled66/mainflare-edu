const invoices = [
    {
        id: 'inv_001',
        products: ['كورس الفصل الاول'],
        invoiceStatus: 'مدفوع', // أو "غير مدفوع"
        type: 'دفع كورس',
        paidData: {
            isPaid: true,
            method: 'Visa',
            date: '2025-07-01',
            transactionId: 'txn_ahmed_123',
        },
        price: 350,
        link: 'https://example.com/invoices/inv_001',
    },
    {
        id: 'inv_002',
        products: ['كتاب مستر عبد المعبود - كيمياء', 'ملزمة أسئلة بنك المعرفة'],
        invoiceStatus: 'غير مدفوع',
        type: 'شراء كتب',
        paidData: {
            isPaid: false,
            method: null,
            date: null,
            transactionId: null,
        },
        price: 220,
        link: 'https://example.com/invoices/inv_002',
    },
    {
        id: 'inv_003',
        products: ['كورس الفصل التاني'],
        invoiceStatus: 'مدفوع',
        type: 'دفع كورس',
        paidData: {
            isPaid: true,
            method: 'Vodafone Cash',
            date: '2025-06-15',
            transactionId: 'txn_sami_456',
        },
        price: 500,
        link: 'https://example.com/invoices/inv_003',
    },
];

export default invoices;
