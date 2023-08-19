import Input from "./Input";
import Button from "./Button";
import {useState} from "react";

const EditForm = (props) => {
    const {editedTodo, onUpdate} = props;
    const [updateTitle, setUpdateTitle] = useState(editedTodo.title);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onUpdate({...editedTodo, title: updateTitle})
    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <Input value={updateTitle} onChange={setUpdateTitle}/>
                <Button text="Save" type="submit"/>
            </form>
        </>
    )
}
export default EditForm;