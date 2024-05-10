import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="h-screen flex justify-center md:items-center pt-20 bg-circle dark:bg-circle-2 bg-no-repeat bg-cover">
            <div>
                <div className="card shrink-0 max-w-sm shadow-2xl bg-white/30 bg-opacity-30 backdrop-blur-lg">
                    <div>
                    </div>
                    <form onSubmit={handleLogin} className="card-body md:w-96 w-80">
                        <h1 className="text-3xl text-center font-bold">Login Now</h1>

                        <p className="text-center text-[#747474] dark:text-[#181818] ">Enter Your Information Here</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered text-[#181818] dark:bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-[#181818] dark:bg-white" required />
                            <label className="label">
                                <a href="#" className="-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primary-color hover:bg-[#10a5ca] border-none text-white font-medium">Login</button>
                        </div>
                        <p className="text-center pb-3">Don,t have account ? <Link to={'/register'} className="hover:text-blue-600 hover:underline">Register</Link> </p>
                        <div className="border-t-2 pt-4 border-[#737373]">
                            <p className="btn w-full bg-[#073b4c] hover:bg-[#073b4c] text-white border-none"><FcGoogle size={20} /> Login with Google</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;