import {useContext} from "react";
import {UserContext} from "../../pages/Home";

const NewList = () => {
    const usersData = useContext(UserContext);
    usersData.items.push({id: 55, name: 'item 55'})
    return (
        <div>
            <h1>NewList</h1>
            <ul>{usersData.items && usersData.items.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
        </div>

    )
}
export default NewList