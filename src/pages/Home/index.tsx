import "./home.css"
import GameButton from "../../Components/Buttons/GameButton"
import GameMenu from "../../Components/GameMenu/index"
const Home = () => {
    return (
        <>
            <div className='homepage'>
                <h1 className='homepage__header'>
                    WHO WANTS TO BE MILLIONARE ?
                </h1>
                <GameMenu/>
            </div>

        </>


    )
}

export default Home