import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Singin = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse bg-[#E8DFE8] from-slate-300 rounded-3xl">
          <div className="text-center lg:text-left bg-[url('https://iili.io/JrfOFhx.jpg')] bg-cover bg-center h-[300px] md:h-[500px] rounded-3xl">
            <h1 className="text-5xl font-bold text-center text-blue-500 pt-3">Wise Trips</h1>
            <p className="py-6 text-center text-blue-400">
              Travel is the only purchase that enriches you in ways beyond material wealth
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm ">
            <div className="flex items-center justify-center flex-col">
              <img src="https://iili.io/JrfP2se.png" alt="" />
              <h1 className="text-5xl text-blue-500 font-bold">Welcome</h1>
              <p className="font-medium text-slate-500">Singin With Email</p>
            </div>

            <form className="card-body space-y-2 md:space-y-3">
              <TextField
                id="outlined-basic"
                name="email"
                type="email"
                className="w-full"
                label="Email"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                name="password"
                type="password"
                className="w-full"
                label="Password"
                variant="outlined"
              />
              <div className="flex justify-end">
                <Link>
                  <span className="text-sm text-right">
                    Forgot your password?
                  </span>
                </Link>
              </div>
             
              <input type="submit" value="Login" className="btn bg-blue-500" />
             
            </form>
           
            <p className="text-center">-----Or-----</p>
            <div className="flex items-center justify-center">
            <button className="btn btn-ghost"><img src="https://iili.io/Jrfjdmv.png" className="w-10" alt="" /></button>
            <button className="btn btn-ghost"><img src="https://iili.io/Jrfjl2e.png" className="w-10" alt="" /></button>
           </div>
           <div className="flex justify-center items-center">
           <h1>Don{"'"}t have an account?</h1>
           <button className="btn btn-link"><Link to="/singup">SingUp</Link></button>
           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
