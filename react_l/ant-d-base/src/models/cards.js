import { func } from 'prop-types';

require('../../mock/puzzlecards');
const axios = require('axios');

export default {
    namespace: 'cards',
    state: {
        cardsList: [],
        cardsLoading: false,
        counter: 0
    },
    reducers: {
        initList(state, {payload: cardList}){
            return {
                cardsList: cardList
            }
        }
    },
    effects: {
        *queryList(_, {call, put}){
            const url = '/api/urls';

            const res = yield call(axios.get, url);
            
            // yield put({type: 'initList', payload: JSON.parse(res.data)});
            yield put({type: 'initList', payload: JSON.parse(res.data)});
            return res;
        }
    }
}
