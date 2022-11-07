import { Link } from "react-router-dom";

const Home = () => {
    return ( <> 
        <Link to="/form">
            <h1 style={{textAlign:"center"}}>Form</h1>
        </Link>
        <br />
        <Link to="/map">
            <h1 style={{textAlign:"center"}}>Map</h1>
        </Link>
    </> );
}
 
export default Home;