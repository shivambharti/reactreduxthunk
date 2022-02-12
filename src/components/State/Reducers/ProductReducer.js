
const initialstate = {
    product: [],
    error: " "
}
const productRediucer = (state = initialstate, action) => {
    switch (action.type) {
        case "FETCHPRODUCTLIST":
            return {
                ...state, product: action.payload, error: action.error
            }

        case "DELETEPRODUCT":
            return {
                ...state
            }

        default:
            return state;
    }

}

export default productRediucer;