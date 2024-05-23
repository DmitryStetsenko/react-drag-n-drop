import { useState } from 'react';
import Tab from './components/Tab';
import './app.css';

function App() {
	const [cardList, setCardList] = useState([
		{ id: 1, order: 3, text: 'Карточка 3' },
		{ id: 2, order: 1, text: 'Карточка 1' },
		{ id: 3, order: 2, text: 'Карточка 2' },
		{ id: 4, order: 4, text: 'Карточка 4' },
	]);

	const [currentCard, setCurrentCard] = useState(null);

	const cardSort = (a, b) => a.order > b.order ? 1 : -1; 

	const cardsHtml = 
	cardList
		.sort(cardSort)
		.map(item => <Tab 
					key={item.id} 
					item={item} 
					setCardList={setCardList} 
					cardList={cardList}
					currentCard={currentCard}
					setCurrentCard={setCurrentCard}
					/>
				);
	return (
		<div className="app">
			{ cardsHtml }
		</div>
	);
}

export default App;
