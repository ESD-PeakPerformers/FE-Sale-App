const initialState = {
    locale: 'vi'
}
interface Payload{
    locale: string
}
const LanguageReducer = (state=initialState, {type, payload}:{type:string, payload:Payload}) => {
    switch (type) {
        case "CHANGE_LANGUAGE":
            return{
                ...state, 
                locale: payload.locale, 
            }
        default:
            return state
        }
}

export default LanguageReducer