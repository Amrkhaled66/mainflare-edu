import DashBoardContainer from '@/shared/components/ui/DashBoardContainer';
import DoughnutChart from '@/modules/userDashboard/components/DoughnutChart';
const PerformanceSummaryCustomCard = ({
    label,
    finished,
    shouldFinished,
    chartColor,
    label2,
    chartLabel,
}: {
    label: string;
    chartLabel: string;
    finished: number;
    shouldFinished: number;
    chartColor: string;
    label2?: string;
}) => {
    return (
        <DashBoardContainer className="w-full px-4 py-6 drop-shadow-md">
            <div className="flex-center flex-col gap-y-3">
                <DoughnutChart
                    centerContent={<p className="text-lg font-medium">{finished}%</p>}
                    segments={[
                        { label: chartLabel, value: finished, color: chartColor },
                        {
                            label: 'المتبقي',
                            value: shouldFinished - finished,
                            color: '#E2E8F0',
                        },
                    ]}
                />
                <div className="flex-center flex-col gap-y-4">
                    <p className="text-xl font-medium">{label}</p>
                    <div
                        style={{
                            border: `1px solid ${chartColor}`,
                        }}
                        className="flex w-fit gap-x-2 overflow-hidden rounded-xl pe-4 font-medium"
                    >
                        <span
                            style={{
                                background: chartColor,
                            }}
                            className="rounded-xl px-5 text-white"
                        >
                            {finished} {label2}
                        </span>
                        <span className="font-semibold">من {shouldFinished}</span>
                    </div>
                </div>
            </div>
        </DashBoardContainer>
    );
};

export default PerformanceSummaryCustomCard;
