import "./Home.css";
import photo from "../../../assets/images/jpg/home-image.jpg"
function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>IKEA Shop Home Page</h2>
            <p>Best Furniture For Home </p>
            <hr />
           <img src={photo} alt="" />
        </div>
    );
}

export default Home;
