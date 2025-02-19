import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

	const {
		order,
		tip,
		setTip,
		addItem,
		subTotal,
		removeFromOrder,
		subTotalAmount,
		tipAmount,
		totalAmount,
		placeOrder,
	} = useOrder()

	return (
		<>
			<header className=" bg-teal-400 py-5">
				<h1 className=" text-center text-4xl font-black">Calculadora de propinas y Consumo</h1>
			</header>

			<main className=" max-w-7xl mx-auto md:grid md:grid-cols-2 py-20">
				<div className="p-5">
					<h2 className="text-4xl font-black">Menú</h2>
					<div className=" space-y-3 mt-10">
						{menuItems.map( item => (
							<MenuItem
								key={item.id}
								item={item}
								addItem={addItem}
							/>
						))}
					</div>
				</div>

				<div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
			
					{order.length ? (
						<div>
							<OrderContents
								order={order}
								subTotal={subTotal}
								removeFromOrder={removeFromOrder}
							/>	
			
							<TipPercentageForm
								setTip={setTip}
								tip={tip}
							/>

							<OrderTotals
								subTotalAmount={subTotalAmount}
								tipAmount={tipAmount}
								totalAmount={totalAmount}
								placeOrder={placeOrder}
							/>	
						</div>
						)
						:
						(
							<p className="text-center text-2xl">La orden esta vacia</p>
						)
						}
				</div>
			</main>
		</>
	)
}

export default App