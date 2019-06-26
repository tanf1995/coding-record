require('../../mock/puzzlecards');
const axios = require('axios');

export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 100
    },
    reducers: {
        addNewCard(state, {payload: newCard}){
            const nextCounter = state.counter + 1;
            const newCardWithId = {...newCard, id: nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter
            }
        },
        initCardList(state, {payload: cardList}){
            let nextCounter = state.counter + 1;
            cardList.forEach(item => {
                item["id"] = nextCounter;
                nextCounter++;
                return item
            })
            return {
                data: cardList,
                counter: nextCounter
            }
        }
    },
    effects: {
        *queryInitCards(_, sagaEffects){
            const {call, put} = sagaEffects;
            const url = '/api/cards';

            const puzzle = yield call(axios.get, url);

            yield put({type: 'initCardList', payload: JSON.parse(puzzle.data)});
        }
    }
}