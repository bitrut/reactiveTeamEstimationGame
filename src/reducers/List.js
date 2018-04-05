const Lists = (state = {}, action) => {
    switch (action.type) {
        case "ADD_CARD": {
            const { listId, cardId } = action.card;
            return {
                ...state,
                [listId]: { ...state[listId], cards: [...state[listId].cards, cardId] }
            };
        }
        case "MOVE_CARD": {
            const {
                oldCardIndex,
                newCardIndex,
                sourceListId,
                destListId
            } = action.payload;
            // Move within the same list
            if (sourceListId === destListId) {
                const newCards = Array.from(state[sourceListId].cards);
                const [removedCard] = newCards.splice(oldCardIndex, 1);
                newCards.splice(newCardIndex, 0, removedCard);
                return {
                    ...state,
                    [sourceListId]: { ...state[sourceListId], cards: newCards }
                };
            }
            // Move card from one list to another
            const sourceCards = Array.from(state[sourceListId].cards);
            const [removedCard] = sourceCards.splice(oldCardIndex, 1);
            const destinationCards = Array.from(state[destListId].cards);
            destinationCards.splice(newCardIndex, 0, removedCard);
            return {
                ...state,
                [sourceListId]: { ...state[sourceListId], cards: sourceCards },
                [destListId]: { ...state[destListId], cards: destinationCards }
            };
        }
        case "DELETE_CARD": {
            const { cardId: newCardId, listId } = action.payload;
            return {
                ...state,
                [listId]: {
                    ...state[listId],
                    cards: state[listId].cards.filter(cardId => cardId !== newCardId)
                }
            };
        }
        case "ADD_LIST":{
            const { listId, listTitle } = action.payload;
            return {
                ...state,
                [listId]: { id: listId, title: listTitle, cards: [] }
            };
        }
        case "CHANGE_LIST_NAME": {
            const { listId, listTitle } = action.payload;
            return {
                ...state,
                [listId]: {...state[listId], title: listTitle}
            };
        }
        case "DELETE_LIST":{
            const {listId} = action.payload;
            const { [listId]: deletedList, ...restOfList } = state;
            return restOfList;
        }
        default:
            return state;
    }
}

export default Lists;