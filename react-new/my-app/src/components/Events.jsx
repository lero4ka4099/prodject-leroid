import {useEffect} from "react";

const Events = () => {
    useEffect(() => {
        const handleClick = () => {
            console.log('Click');
        }
        window.addEventListener('click', handleClick);
    })
    return (
        <div className="box">

        </div>
    )
}
export default Events