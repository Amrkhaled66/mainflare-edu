import ParentOverviewCustomCard from '../../components/ParentOverviewCustomCard';

interface FinancialSummaryProps {
    monthlySpent: number;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ monthlySpent }) => {
    return (
        <div className="grid gap-6 lg:grid-cols-2">
            <ParentOverviewCustomCard icon="mdi:currency-usd" title="المصروفات الشهرية" value={`${monthlySpent} جنيه`} color="#EF4444" />
        </div>
    );
};

export default FinancialSummary;
