import styles from './tab.module.css';

const Tab = ({item, cardList, setCardList, currentCard, setCurrentCard}) => {
    const {tab, over, selected} = styles;
    const tabName = item.text;

    const dragStartHandler = (e, card) => {
        setCurrentCard(card);
    }

    const dragEndHandler = (e) => {
        e.target.classList.remove(over);
    }

    const dragOverHandler = (e) => {
        e.preventDefault();
        e.target.classList.add(over);
    }

    const dropHandler = (e, card) => {
        e.preventDefault();
        e.target.classList.remove(over);

        setCardList(cardList.map(c => {
            if (c.id === card.id) {
                return {...c, order: currentCard.order}
            }
            if (c.id === currentCard.id) {
                return {...c, order: card.order}
            }
            return c;
        }));
    }

    return (
        <div className={tab}
            draggable={true}
            onDragStart={(e) => dragStartHandler(e, item)} // взяли
            onDragLeave={(e) => dragEndHandler(e)} // вышли за пределы
            onDragEnd={(e) => dragEndHandler(e)} // отпустили перемещение
            onDragOver={(e) => dragOverHandler(e)} // находимся над другим объектом
            onDrop={(e) => dropHandler(e, item)} // отпустили карточку, ожидаем действие
        >
            <h2 className="title">{tabName}</h2>    
        </div>
    );
}

export default Tab;