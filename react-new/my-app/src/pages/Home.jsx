import {createContext} from 'react';
import MainHome from '../components/dz-6/MainHome'
import Counter from "../components/dz-8/Counter";
import Products from "../components/dz-9/Products";

export const UserContext = createContext(null);


const Home = () => {
    const users = [
        {id: 1, name: "User 1"},
        {id: 2, name: "User 2"},
        {id: 3, name: "User 3"},
        {id: 4, name: "User 4"},

    ];
    console.log(users, 'users');
    return (
        <div>
            <h1>Home</h1>
            <UserContext.Provider value={{items: users}}>
                <MainHome />
            </UserContext.Provider>

            <div></div>
            <Counter />
            <Products />

        </div>

    )
}
export default Home