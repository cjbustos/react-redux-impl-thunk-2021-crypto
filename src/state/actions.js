import { getCryptosFromApi } from "./api"
import { SET_CRYPTOS, SET_CRYPTO_TO_VIEW, } from "./types"

export const actionSetCryptos = cryptos => {
    console.log('3) action -> actionSetCryptos', cryptos)
    //La acción posee lo que hay que hacer y contiene los datos
    return {
        type: SET_CRYPTOS,
        cryptos: cryptos
    }
}

export const actionChoiceCryptoToView = selectedOption => {
    console.log('2) action -> actionChoiceCryptoToView', selectedOption)
    return {
        type: SET_CRYPTO_TO_VIEW,
        selectedOption
    }
}

export const getCryptos = () => async dispatch => {
//ATENCIÓN: El async tiene que ir lo más cerca de la última función que se llame
    try {
        let { data: cryptos } = await getCryptosFromApi()
        //Llama al 'dispatch()' con una acción ya hecha para después empujarla al 'reducer' correspondiente
        console.warn('2) In the middleware', cryptos)
        dispatch(actionSetCryptos(cryptos))
    }
    catch (error) {
        console.error('Error en la carga')
    }

}