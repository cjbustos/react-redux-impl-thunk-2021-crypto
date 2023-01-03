import { SET_CRYPTOS, SET_CRYPTO_TO_VIEW } from "./types";

export const crytosReducer = (state, action) => {

    console.log('reducer -> cryptoReducer', state, action)

    //Verificamos de qué acción se trata -->
    switch (action.type) {
        case SET_CRYPTOS:
            return {
                ...state, cryptos: action.cryptos
            }
        case SET_CRYPTO_TO_VIEW:
            return {
                ...state, selectedOption: action.selectedOption
            }
        default:
            return state
    }
}