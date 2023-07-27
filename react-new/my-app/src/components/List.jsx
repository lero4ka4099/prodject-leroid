import {useEffect, useState} from "react";

const List = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () => {

        // const getProducts = async () => {
        //     try{
        //         setIsLoading(true);
        //         const response = await fetch('https://64b95d8f79b7c9def6c0f1b5.mockapi.io/v1/profile');
        //         const data = await  response.json();
        //
        //         if(!response){
        //             throw new Error('Failed');
        //         }
        //         setProducts(data);
        //     } catch (e) {
        //
        //     }
        //     finally {
        //         setIsLoading(false);
        //     }
        //
        // };
        const getProducts = () => new Promise((resolve,reject) => {
            setIsLoading(true);

            const response =  fetch('https://64b95d8f79b7c9def6c0f1b5.mockapi.io/v1/profile');
            resolve(response);
            reject("Failed");
        });

        getProducts()
            .then((response) => {
            const data =  response.json();
            return data;
        })
            .then((data) => {
                setProducts(data);
                return data;
            })
            .catch((error) => new Error(error) )
            .finally(() => {
                setIsLoading(false);
            });

    }, []);
    return <div>
        <input type="text"/>
        {isLoading && <h1>Loading...</h1>}
        <ul>
            {products && products.map((i) => <li key={i.id}>{i.title}</li>)}
        </ul>
    </div>
};
export default List;