import useFetch from "./useFetch";

const Products = () => {
    const [data, error,isLoading] = useFetch('https://64b95d8f79b7c9def6c0f1b5.mockapi.io/v1/profile');
    return (
        <>
            <input type="text"/>
            {error && <h1>{error}</h1>}
            {isLoading && <h1>Loading...</h1>}
            <ul>
                {data && data.map((i) => <li key={i.id}>{i.title}</li>)}
            </ul>
        </>
    )
}
export default Products;