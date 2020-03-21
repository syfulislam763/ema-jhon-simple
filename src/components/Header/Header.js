import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useAuth } from '../Login/UseAuth';


/*
it will be use in logo image (if you want)
const [count, setCount] = useState(0);
    const usePrevious = value => {
        const prev = useRef();
        useEffect(() => {
            prev.current = value;
        }, [value])
        return prev.current;
    }
    const previous = usePrevious(count);

    <h1>Count: {count} Previous: {previous}</h1>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
*/

const Header = () => {
    const auth = useAuth()
    console.log(auth.user)
    
    //console.log(user)
    return ( 
        <div className = "Header" >
            <img src={logo} alt=""/>
            <nav>
                <a href = "/shop" > Shop </a> 
                <a href = "/order" > Order Review </a> 
                <a href = "/inventory" > Manage Inventory here </a> 
                <a href = "/showoff" > Show Off </a> 
                {
                    auth.user 
                        ? <a href="/login">Sign Out</a>
                        : <a href="/login">Sign in</a>
                }
                {
                    auth.user && <span style={{color:'orange'}}>{auth.user.name}</span>
                }
            </nav> 
        </div>
    );
};

export default Header;