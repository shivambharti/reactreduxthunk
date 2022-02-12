import axios from "axios"

const success = (data, type) => {
    return {
        type: type,
        payload: data,
        error: false
    }
}

const error = (error, type) => {
    // Offline Mode data start
    let data = localStorage.getItem('user');
    let datas = JSON.parse(data);
    //Offline mode data end
    return {
        type: type,
        payload: datas,
        error: error
    }
}

export const fetchProduct = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // const data=response.data.data;
                localStorage.setItem('user', JSON.stringify(response.data))
                dispatch(success(response.data, 'FETCHPRODUCTLIST'))
                // dispatch({
                //     type:"FETCHPRODUCTLIST",
                //     payload:response.data.data,
                //     error:false
                // })
            }).catch((err) => {
                dispatch(error(err, 'FETCHPRODUCTLIST'))
                // dispatch({
                //     type:"FETCHPRODUCTLIST",
                //     payload:[],
                //     error:err
                // }) 
            })
    }
}

// export const fetchProduct=()=>{
//         axios.get('http://localhost/admin/api/productlist')
//         .then((response)=>{
//            return{
//                 type:"FETCHPRODUCTLIST",
//                 payload:response.data.data
//             }

//     });
// }
export const deleteproduct = () => {
    return (dispatch) => {
        axios.get('http://localhost/admin/api/deleteproduct')
        .then((response) => {
        dispatch({
         type: "DELETEPRODUCT",
        })
        dispatch(fetchProduct());
        })
    }
}