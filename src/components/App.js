//import { on } from "events";
import { useState } from "react";
import Logo from "./logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
// 	{ id: 1, description: "Passports", quantity: 2, packed: false },
// 	{ id: 2, description: "Socks", quantity: 12, packed: true },
// 	{ id: 3, description: "Charger", quantity: 1, packed: true },
// ];

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		const confirmed = window.confirm(
			"Are you sure you want to clear your packing list?"
		);
		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAdditems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
