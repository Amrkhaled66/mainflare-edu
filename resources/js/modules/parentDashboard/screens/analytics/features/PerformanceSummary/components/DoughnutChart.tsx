interface ChartSegment {
    label: string;
    value: number;
    color: string;
}

interface DoughnutChartProps {
    segments: ChartSegment[];
    centerContent: React.ReactNode;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ segments, centerContent }) => {
    const total = segments.reduce((sum, segment) => sum + segment.value, 0);
    let cumulativePercentage = 0;

    return (
        <div className="relative h-32 w-32">
            <svg viewBox="0 0 42 42" className="h-full w-full -rotate-90 transform">
                <circle cx="21" cy="21" r="15.915" fill="transparent" stroke="#E2E8F0" strokeWidth="3" />
                {segments.map((segment, index) => {
                    const percentage = (segment.value / total) * 100;
                    const strokeDasharray = `${percentage} ${100 - percentage}`;
                    const strokeDashoffset = -cumulativePercentage;
                    cumulativePercentage += percentage;

                    return (
                        <circle
                            key={index}
                            cx="21"
                            cy="21"
                            r="15.915"
                            fill="transparent"
                            stroke={segment.color}
                            strokeWidth="3"
                            strokeDasharray={strokeDasharray}
                            strokeDashoffset={strokeDashoffset}
                            className="transition-all duration-300"
                        />
                    );
                })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">{centerContent}</div>
        </div>
    );
};


export default DoughnutChart;