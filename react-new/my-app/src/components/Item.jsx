import Input from "./Input"
import Button from "./Button";
const Item = (props) => {
    return(
        <div className="item">
            <Input value={props.key}>{props.text}</Input>
            <Button>{props.text}</Button>
        </div>

    )
}
export default Item;
