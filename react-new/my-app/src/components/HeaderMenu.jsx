import Button from "./dz-7/Button";

const HeaderMenu = () => {
    const textButton = 'Main';
    return(
        <div>
            <Button text={textButton} />
            <Button text='Click' />
            <Button text='Cancel' />
        </div>
    )
}
export default HeaderMenu;