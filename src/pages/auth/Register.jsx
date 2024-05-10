import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import UseAuth from './../../hooks/UseAuth';
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
    const {createUser}=UseAuth()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(displayName,photoURL, email, password)
        createUser(email,password)
        .then(result =>{
            toast.success('Register Successfully',{duration:4000})
            updateProfile(result.user,{
                displayName,photoURL
            })
            .then(()=>{
                console.log('updated')
            })
            .catch(error=>{
                console.error(error)
            })
        })
        .catch(error =>{
            console.error(error)
            toast.error(error.message, {duration:5000})
        })
    }
    return (
        <div className="h-screen flex justify-center py-10 pt-20 bg-circle dark:bg-circle-2 bg-no-repeat bg-cover">
            <div>
                <div className="card shrink-0 shadow-2xl bg-white/30 bg-opacity-30 backdrop-blur-lg">
                    <div>
                    </div>
                    <form onSubmit={handleRegister} className="card-body w-80 md:w-auto">
                        <h1 className="text-3xl text-center font-bold">Register Now</h1>

                        <p className="text-center text-[#747474] dark:text-[#181818] ">Enter Your Information Here</p>
                        {/* Row-1 */}
                        <div className="md:flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered text-[#181818] dark:bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Photo</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered text-[#181818] dark:bg-white" required />
                            </div>
                        </div>

                        {/* Row-2 */}
                        <div className="md:flex gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered text-[#181818] dark:bg-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered text-[#181818] dark:bg-white" required />
                                <label className="label">
                                    <a href="#" className="-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-primary-color hover:bg-[#10a5ca] border-none text-white font-medium">Register</button>
                        </div>
                        <p className="text-center pb-3">Already have account ? <Link to={'/login'} className="hover:text-blue-600 hover:underline">Login</Link> </p>
                        <div className="border-t-2 pt-4 border-[#737373]">
                            <p className="btn w-full bg-[#073b4c] hover:bg-[#073b4c] text-white border-none"><FcGoogle size={20} /> Login with Google</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;