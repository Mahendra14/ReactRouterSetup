import { Link, useNavigate } from "react-router-dom";

interface HomeProps {
    
}
 
const Home: React.FunctionComponent<HomeProps> = () => {
    const navigate = useNavigate();
    return ( 
        <div>
            <p>This is the home page.</p>
            <p>
                <Link to="/about">Go to the About Page!</Link>
            </p>
            <button onClick={() => navigate('/layout/55')}>Go to layout, with a number</button>
        </div>
     );
}
 
export default Home;