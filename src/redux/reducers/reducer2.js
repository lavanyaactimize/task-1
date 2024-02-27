const initialState = {
    data2: [],
}
const Reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA2':
            return {
                ...state,
                data2: action.payload,
            }
        default:
            return state;
    }
}
export default Reducer2;