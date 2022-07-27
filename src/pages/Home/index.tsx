import "./home.css"
import GameButton from "../../components/Buttons/GameButton"
import GameMenu from "../../components/GameMenu/index"


const Home = () => {
    return (
        <>
            <div className='homepage'>
                <h1 className='homepage__header'>
                    WHO WANTS TO BE MILLIONARE ?
                </h1>
                <GameMenu/>
            </div>
            <audio src="/sounds/lets play.mp3" autoPlay></audio>
        </>


    )
}

export default Home