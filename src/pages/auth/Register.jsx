import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from './../../hooks/UseAuth';
import { updateProfile } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
    const [show, setShow] = useState(false)
    const { googleLogin } = UseAuth()
    const navigate = useNavigate()
    const { createUser } = UseAuth()
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            return toast.error('password contains at least 6 character')
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('password contains at least one capital letter')
        }
        else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
            return toast.error('password contains at least one special character.')
        }
        if (!/[0-9]/.test(password)) {
            return toast.error('password contains at least one numeric characters')
        }
        createUser(email, password)
            .then(result => {
                toast.success('Register Successfully', { duration: 4000 })
                navigate('/')
                updateProfile(result.user, {
                    displayName, photoURL
                })
                .then(() => {
                    console.log('updated')
                    form.reset()
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message, { duration: 5000 })
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                toast.success(`${result.user.displayName} Login Successfully`, { duration: 4000 })
                navigate('/')
            })
            .catch(error => {
                console.error(error)
                toast.error(error.message, { duration: 5000 })
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
                                <div className="relative">
                                    <input type={show ? "text" : "password"} name="password" placeholder="Password" className="input input-bordered text-[#181818] dark:bg-white " required />
                                    <p onClick={() => setShow(!show)} className="absolute right-3 top-[30%] hover:cursor-pointer">{show ? <FaRegEyeSlash size={20} /> : <FaRegEye size={20} />}</p>
                                </div>

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
                            <p onClick={handleGoogleLogin} className="btn w-full bg-[#073b4c] hover:bg-[#073b4c] text-white border-none"><FcGoogle size={20} /> Login with Google</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;