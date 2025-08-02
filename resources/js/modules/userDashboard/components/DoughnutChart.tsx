import { ArcElement, Chart as ChartJS, ChartOptions, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


type DoughnutChartProps = {
    value: number;
    total: number;
    label: string;
    color: string;
};

type CenterTextPluginConfig = {
    text: string;
    font?: string;
    color?: string;
};

const createCenterTextPlugin = (config: CenterTextPluginConfig) => ({
    id: 'centerText',
    beforeDraw(chart: ChartJS<'doughnut'>) {
        const { ctx } = chart;
        const { text, font = 'bold 20px sans-serif', color = '#000000' } = config;

        ctx.restore();
        ctx.font = font;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = color;

        const { x, y } = chart.getDatasetMeta(0).data[0];
        ctx.fillText(text, x, y);
    },
});

const DoughnutChart = ({ value, total, label, color }: DoughnutChartProps) => {

    const data = {
        labels: [label, 'Remaining'],
        datasets: [
            {
                data: [value, Math.max(0, total - value)],
                backgroundColor: [color, '#E5E7EB'],
                borderWidth: 0,
            },
        ],
    };

    const options: ChartOptions<'doughnut'> = {
        cutout: '70%',
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (context) => `${context.raw}%`,
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="relative h-40 w-40">
            <Doughnut data={data} options={options} className='bg-white rounded-full overflow-visible' plugins={[createCenterTextPlugin({ text: `${value}%` })]} />
        </div>
    );
};
export default DoughnutChart