import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db"

console.log("1");

function App() {
	return (
		<>
			<header className=" bg-teal-400 py-5">
				<h1 className=" text-center text-4xl font-black">Calculadora de propinas y Consumo</h1>
			</header>

			<main className=" max-w-7xl mx-auto md:grid md:grid-cols-2 py-20">
				<div>
					<h2>Menú</h2>
					{menuItems.map( item => (
						<MenuItem
							key={item.id}
							item={item}
						/>
					))}
				</div>

				<div>
					<h2>Consumo</h2>
				</div>
			</main>
		</>
	)
}

export default App