import { useRef } from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

function AuthPage() {
    const containerRef = useRef();

    const handleToggleActiveRightPanel = (e) => {
        // class 'right-panel-active' add to Container -> show left-form and right-overlay
        containerRef.current.classList.toggle('right-panel-active');
    };

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-auth bg-cover bg-center bg-no-repeat">
            {/* Heading */}
            <h1 className="mb-8 font-berkshireSwash text-5xl text-red-500">Welcome to ChatApp</h1>

            {/* Container */}
            <div
                className="group relative min-h-[480px] min-w-[768px] rounded-xl bg-[#ffffff26] shadow-2xl"
                ref={containerRef}
            >
                {/* Form container - Sign in*/}
                <div className="z-2 absolute top-0 left-0 w-1/2 transition-all duration-[600ms] ease-in-out group-[.right-panel-active]:translate-x-[100%] group-[.right-panel-active]:opacity-0">
                    <form className="flex h-full flex-col items-center justify-center p-12">
                        <h1 className="mb-8 text-3xl font-bold text-white">Sign In</h1>

                        {/* Social */}
                        <div className="flex gap-5">
                            <div className="grid cursor-pointer place-content-center rounded-md bg-facebook p-1.5 text-white transition-all ease-linear hover:scale-125">
                                <FaFacebookF size={20} />
                            </div>
                            <div className="grid cursor-pointer place-content-center rounded-md bg-google p-1.5 text-white transition-all ease-linear hover:scale-125">
                                <FaGooglePlusG size={20} />
                            </div>
                            <div className="grid cursor-pointer place-content-center rounded-md bg-linkedin p-1.5 text-white transition-all ease-linear hover:scale-125">
                                <FaLinkedinIn size={20} />
                            </div>
                        </div>

                        {/* Separate */}
                        <div className="my-8 w-full border-y border-solid border-slate-800 p-1 text-center">
                            or login with your account
                        </div>

                        {/* Form Groups */}
                        <div className="relative w-full">
                            <label
                                htmlFor="email"
                                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                            >
                                <FaEnvelope size={18} />
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                name="email"
                                className="w-full bg-[rgba(255,255,255,0.35)] p-1 pl-8 caret-red-500 placeholder:text-[#888]"
                            />
                        </div>
                        <div className="relative mt-4 w-full">
                            <label
                                htmlFor="password"
                                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                            >
                                <FaLock size={18} />
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                className="w-full bg-[rgba(255,255,255,0.35)] p-1 pl-8 caret-red-500 placeholder:text-[#888]"
                            />
                        </div>

                        <div className="mt-3 w-full cursor-pointer text-right text-[#00000080] underline hover:text-black">
                            Forgot password?
                        </div>
                        <div className="mt-8 cursor-pointer rounded bg-orange-500 px-8 py-1.5 text-lg font-bold text-white transition-all hover:bg-white hover:text-orange-500">
                            Sign In
                        </div>
                    </form>
                </div>

                {/* Form container - Sign up*/}
                <div className="z-1 group-[.right-panel-active]:z-3 absolute top-0 left-0 w-1/2 opacity-0 transition-all duration-[600ms] ease-in-out group-[.right-panel-active]:translate-x-[100%] group-[.right-panel-active]:opacity-100">
                    <form className="flex h-full flex-col items-center justify-center p-12">
                        <h1 className="mb-8 text-3xl font-bold text-white">Create Account</h1>

                        {/* Social */}
                        <div className="flex gap-5">
                            <div className="grid cursor-pointer place-content-center rounded-md bg-facebook p-1.5 text-white transition-all ease-linear hover:scale-125">
                                <FaFacebookF size={20} />
                            </div>
                            <div className="grid cursor-pointer place-content-center rounded-md bg-google p-1.5 text-white transition-all ease-linear hover:scale-125">
                                <FaGooglePlusG size={20} />
                            </div>
                            <div className="grid cursor-pointer place-content-center rounded-md bg-linkedin p-1.5 text-white transition-all ease-linear hover:scale-125">
                                <FaLinkedinIn size={20} />
                            </div>
                        </div>

                        {/* Separate */}
                        <div className="my-8 w-full border-y border-solid border-slate-800 p-1 text-center">
                            or use your email for registration
                        </div>

                        {/* Form Groups */}
                        <div className="relative w-full">
                            <label
                                htmlFor="email"
                                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                            >
                                <FaEnvelope size={18} />
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                                id="email"
                                name="email"
                                className="w-full bg-[rgba(255,255,255,0.35)] p-1 pl-8 caret-red-500 placeholder:text-[#888]"
                            />
                        </div>
                        <div className="relative mt-4 w-full">
                            <label
                                htmlFor="password"
                                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                            >
                                <FaLock size={18} />
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                className="w-full bg-[rgba(255,255,255,0.35)] p-1 pl-8 caret-red-500 placeholder:text-[#888]"
                            />
                        </div>
                        <div className="relative mt-4 w-full">
                            <label
                                htmlFor="confirmPassword"
                                className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-500"
                            >
                                <FaLock size={18} />
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full bg-[rgba(255,255,255,0.35)] p-1 pl-8 caret-red-500 placeholder:text-[#888]"
                            />
                        </div>

                        <div className="mt-5 cursor-pointer rounded bg-orange-500 px-8 py-1.5 text-lg font-bold text-white transition-all hover:bg-white hover:text-orange-500">
                            Sign Up
                        </div>
                    </form>
                </div>

                {/* Overlay Container */}
                <div className="z-5 absolute left-1/2 top-0 h-full w-1/2 overflow-hidden transition-all duration-[600ms] ease-in-out group-[.right-panel-active]:-translate-x-[100%]">
                    {/* Overlay: có thể flex chia đôi thay vì mỗi element con absolute 1 nửa, nhớ border-radius bằng với container */}
                    <div className="absolute -left-[100%] top-0 h-full w-[200%] rounded-xl bg-authOverlay text-white transition-all duration-[600ms] ease-in-out group-[.right-panel-active]:translate-x-1/2">
                        {/* Overlay-panel Overlay-left */}
                        <div className="absolute left-0 top-0 flex h-full w-1/2 -translate-x-[20%] flex-col items-center justify-center gap-8 p-10 transition-all duration-[600ms] ease-in-out group-[.right-panel-active]:translate-x-0">
                            <h1 className="text-3xl font-bold">Welcome Back!</h1>
                            <p className="text-center">
                                To keep connected with us please login with your personal info
                            </p>
                            <div
                                className="cursor-pointer rounded-full border border-white px-10 py-2 text-lg font-semibold"
                                onClick={handleToggleActiveRightPanel}
                            >
                                SIGN IN
                            </div>
                        </div>

                        {/* Overlay-panel Overlay-right */}
                        <div className="absolute left-1/2 top-0 flex h-full w-1/2 translate-x-[0] flex-col items-center justify-center gap-8 p-10 transition-all duration-[600ms] ease-in-out group-[.right-panel-active]:translate-x-[20%]">
                            <h1 className="text-3xl font-bold">Hello, Friend!</h1>
                            <p className="text-center">
                                Enter your personal details and stay close to your favourite people.
                            </p>
                            <div
                                className="cursor-pointer rounded-full border border-white px-10 py-2 text-lg font-semibold"
                                onClick={handleToggleActiveRightPanel}
                            >
                                SIGN UP
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
