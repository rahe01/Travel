import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Hero = () => {

    const {me} = useContext(AuthContext)
    return (
        <div>
           <h1>{me}</h1>
          
        </div>
    );
};

export default Hero;