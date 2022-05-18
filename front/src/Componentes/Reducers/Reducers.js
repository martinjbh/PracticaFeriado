
const initialState = {
    data:["check"],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
 
        default:
            return state
    }
}





/////////////////////////ejemplo////////////////////////////////
// const initialState = {
//     data:["white"], 
// }
// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "AGREGAR_DARK": {
//             return ({
//                 ...state, data: [action.estilo.data],tag:[action.estilo.tagi]
//             })
//         }
//         case "MODIFICAR_PRECIOS": {
//             return ({
//                 ...state, movies: state.movies.map((e, i) => {
//                     if (i + 1 == action.id.id) {
//                         e.priceDay = parseInt(action.id.priceDayModificar)
//                         e.priceNight = parseInt(action.id.priceNightModificar)
//                     }
//                     return e
//                 })
//             })
//         }
//         case "BORRAR_PELICULA": {
//             return ({
//                 ...state, movies: state.movies.filter((e, i) => i + 1 != action.id),
//             })
//         }
//         case "GET_MOVIES": {
//             return ({
//                 ...state, movies: action.data
//             })
//         }
//         default:
//             return state
//     }
// }
