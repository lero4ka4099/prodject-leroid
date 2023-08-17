import Input from "./Input";
import Button from "./Button";

const Item = (props) => {
    const { item, onDelete } = props;
    const handleDelete = () => {
        onDelete(item.id);
    }
    return (
        <div>
            <Input type="checkbox" />
            <h3>{item.title}</h3>
            <Button text="Delete" onClick={handleDelete} />
            <Button text="Edit" />
        </div>
    )
};
export default Item;