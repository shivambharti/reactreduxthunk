import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, deleteproduct } from "./State/Action-creator";

const Home = () => {

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const products = useSelector(state => state.productRediucer.product);
    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(deleteproduct())

    }
    const error = useSelector(state => state.productRediucer.error);
    
    return (
        <div className="container">
            {error!=false ?
                <div style={{color:"red"}}>You are in offline mode</div>
                :null 
            }

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Post</th>
                    </tr>
                </thead>


                <tbody>
                    {products.map((product, index) => (

                        <tr key={index}>
                            <th scope="row">{product.id}</th>
                            <td>{product.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

// const MyMap = React.memo(Home);
// export default MyMap;
export default Home;