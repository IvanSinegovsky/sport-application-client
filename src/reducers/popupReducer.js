export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

const defaultState = {
    counter: 1
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case INCREMENT:
            if (state.counter === 20) {
                return {
                    ...state,
                    counter: state.counter
                }
            }
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            if (state.counter === 1) {
                return {
                    ...state,
                    counter: state.counter
                }
            }
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}


export const increment = (inputsCounter) => ({type: INCREMENT})
export const decrement = (inputsCounter) => ({type: DECREMENT})
