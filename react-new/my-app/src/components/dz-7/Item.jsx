import Input from "./Input";
import Button from "./Button";

const Item = (props) => {
    const { item, onDelete, onCheck, onEdit } = props;
    const handleDelete = () => {
        onDelete(item.id);
    }
    const handleCheck = () => {
        onCheck(item.id)
    }
    const handleEditTodo = () => {
        onEdit(item)
    }
    return (
        <div>
            <Input type="checkbox" onChange={handleCheck} checked={item.checked} />
            <h3>{item.title}</h3>
            <Button text="Delete" onClick={handleDelete} />
            <Button text="Edit" onClick={handleEditTodo} />
        </div>
    )
};
export default Item;