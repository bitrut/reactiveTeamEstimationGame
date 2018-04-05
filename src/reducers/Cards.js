const Cards = (state = {}, action) => {
    switch(action.type){
        case "ADD_CARD": {
            const { cardId, cardObject} = action.payload
            return {
                ...state, 
                [cardId]: cardObject
            }
        }
        case "EDIT_CARD": {
            const { cardId, cardObject } = action.payload
            return {
                ...state,
                [cardId]: cardObject
            }
        }
        case "DELETE_CARD": {
            const { cardId } = action.payload;
            const { [cardId]: deletedCard, ...restOfCards } = state;
            return restOfCards;
        }
        case "DELETE_LIST": {
            const {cards: cardsIds} = action.payload;
            return Object.keys(state).filter(cardId => !cardsIds.includes(cardId)).reduce((newState, cardId) => ({...newState, [cardId]:state[cardId]}), {})
        }
        default:
            return state;
    }
};

export default Cards;