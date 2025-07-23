import cart from '../../cart';
import TableCustomRow from './components/TableCustomRow';
import TableCustomRowMobile from './components/TableCustomRowMobile';
import TableHeader from './components/TableHeader';
const Table = () => {
    return (
        <table className="flex flex-1 flex-col gap-y-6">
            <TableHeader />
            <tbody className="hidden flex-col gap-y-4 lg:flex">
                {cart.items.map((item) => (
                    <TableCustomRow key={item.id} img={item.img} title={item.title} quantity={item.quantity} price={item.price} id={item.id} />
                ))}
            </tbody>
            <tbody className="flex flex-col gap-y-4 lg:hidden">
                {cart.items.map((item) => (
                    <TableCustomRowMobile key={item.id} img={item.img} title={item.title} quantity={item.quantity} price={item.price} id={item.id} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
