import { SquareLoader } from "react-spinners";
import "../css/Loader.css";

const Loader = ({text}) => {
    return(
        <div className="loader-container">
            <SquareLoader color="#FFC107" size={60}/>
            <span>{text}</span>
        </div>
    )
}

export default Loader