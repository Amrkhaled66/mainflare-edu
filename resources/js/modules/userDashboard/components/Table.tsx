import DataTable from 'react-data-table-component';

export default function Table({ ...props }) {
    return (
        <DataTable
            columns={[]}
            data={[]}
            {...props}
            responsive
            fixedHeader
            className="table-scrollbar  overflow-hidden   !rounded-3xl"
            pointerOnHover
            paginationRowsPerPageOptions={[5, 30, 50, 100, 500, 1000]}
            noDataComponent={<div className="w-full rounded-lg bg-gray-400/70 py-5 text-center font-mainFont font-bold">لا توجد بيانات</div>}
            customStyles={{
                table: {
                    style: {
                        tableLayout: 'auto', // This is crucial for fitting content
                    },
                },
                headCells: {
                    style: {
                        padding: '12px 26px',
                        backgroundColor: '#393962',
                        fontWeight: '400',
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems:"center",
                        fontSize: '15px',
                        textWrap: 'wrap',
                        backgroundColor: '#393962',
                        color: 'white',
                        whiteSpace: 'normal',
                    },
                },
                rows: {
                    style: {
                        transition: 'ease .2s',
                        fontWeight: '500',
                        // '&:hover': {
                        //     backgroundColor: '#7a7a96',
                        //     color: '#fff',
                        // },
                    },
                },
                cells: {
                    style: {
                        padding: '15px',
                        fontSize: '16px',
                        textAlign: 'center',
                        whiteSpace: 'normal',
                        wordBreak: 'break-word',
                        overflow: 'visible',
                        textOverflow: 'unset', // Changed from 'clip' to 'unset'
                        maxWidth: 'unset', // Remove max-width restrictions
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        border:"none"
                      
                    },
                },
            }}
        />
    );
}