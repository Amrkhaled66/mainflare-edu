import cart from '../../cart';
import TableCustomRow from './components/TableCustomRow';
import TableHeader from './components/TableHeader';
const Table = () => {
    return (
        <table className="flex flex-1 flex-col gap-y-6">
            <TableHeader />
            <tbody className="flex flex-col gap-y-4">
                {cart.items.map((item) => (
                    <TableCustomRow key={item.id} img={item.img} title={item.title} quantity={item.quantity} price={item.price} id={item.id} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
