import axios from "axios";

//Capa API que maneja el middleware
const URL_CRYPTO_INFO_FROM_API = 'https://data.messari.io/api/v1/assets'
//const URL_CRYPTO_INFO_FROM_API = 'https://61d85df2e6744d0017ba8aa6.mockapi.io/cryptos'

export const getCryptosFromApi = () => {
    return axios(URL_CRYPTO_INFO_FROM_API)
}