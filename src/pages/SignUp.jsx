import { ChevronDown, Loader, Mail, Lock } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SocialAuthButton from "../components/auth/SocialAuthButton";
import { motion, AnimatePresence } from "framer-motion";
import PasswordField from "../components/auth/PasswordField";
import { Link, useNavigate } from "react-router-dom";
import AnimatedInput from "../components/auth/AnimatedInput";
import api from "../config/axios";

const SignUp = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "User",
    },
  });
  const navigate = useNavigate();
  const roles = ["User", "Admin", "Co-Admin"];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const wrapperRef = useRef(null);
  const userRef = useRef(null);
  const passRef = useRef(null);
  const conPassRef = useRef(null);
  const socialProviders = [
    {
      id: "google",
      icon: "/images/Auth/google.png",
      alt: "Google login",
      onClick: () => console.log("Google Login"),
    },
    {
      id: "github",
      icon: "/images/Auth/github.png",
      alt: "GitHub login",
      onClick: () => console.log("GitHub Login"),
    },
    {
      id: "facebook",
      icon: "/images/Auth/facebook.png",
      alt: "Facebook login",
      onClick: () => console.log("Facebook Login"),
    },
  ];

  const handleFocus = (ref) => {
    ref.current?.classList.add(
      "border-[#01509C]",
      "ring-2",
      "ring-[#01509C]/30"
    );
  };
  const handleBlur = (ref) => {
    ref.current?.classList.remove(
      "border-[#01509C]",
      "ring-2",
      "ring-[#01509C]/30"
    );
  };
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setErrorMessage("");
    console.log("Form submitted with data:", data);
    
    // Validate confirm password matches password
    if (data.password !== data.confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Sending registration request...");
      const response = await api.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role.toLowerCase(),
      });
      
      console.log("Registration response:", response.data);
      
      // Store token in localStorage
      localStorage.setItem("token", response.data.tokens.accessToken);
      localStorage.setItem("refreshToken", response.data.tokens.refreshToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      
      console.log("Redirecting to dashboard...");
      // Redirect to dashboard
      navigate("/user-dashboard");
    } catch (err) {
      console.error("Registration error:", err);
      setErrorMessage(err.response?.data?.message || "Signup failed. Please try again.");
      setIsSubmitting(false);
    }
  };
  const onError = (error) => {
    console.log(error);
  };
  return (
    <div
      class="bg-[radial-gradient(ellipse_60%_70%_at_center,#4a9df0_0%,#01509C_65%,#013b73_100%)]
 w-full min-h-screen flex items-center justify-center overflow-hidden  "
    >
      <motion.div
        className="relative flex items-center justify-center w-[90%] md:w-[80%] lg:w-3/4 page-2xl:w-1/2"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          duration: 1,
        }}
      >
        <div
          className="absolute -bottom-5 -right-6 md:-bottom-11 md:-right-11 z-20 size-20 md:size-25 rounded-full bg-linear-to-bl 
 from-[#868686] to-[#ECECEC]"
        />
        <div
          className="absolute -top-5 -left-6 md:-top-11 md:-left-11 z-20 size-20 md:size-25 rounded-full bg-linear-to-bl 
 from-[#0050FF] to-[#0040CC]"
        />
        <div className="rounded-4xl lg:rounded-r-none  relative z-100  w-full px-7 py-33.5 bg-[#ECECEC] hidden lg:flex flex-col items-center justify-center">
          <div className="bg-[#A6A6A621] border border-[#7B9CE242] h-95 w-2/3 rounded-4xl" />
          <div className="absolute z-60 -right-27 xl:top-15 2xl:top-1  2xl:-right-28 page-2xl:top-12 top-15 ">
            <img
              src="/images/Auth/signup.png"
              alt=""
              className="object-fill scale-65"
            />
          </div>
        </div>
        <div className="rounded-4xl lg:rounded-l-none z-80 py-5 px-10 xl:px-20 pr-5 xl:pr-15  w-full bg-[#2461E6] flex flex-col items-center justify-center">
          <h1 className="text-[#FFFFFF] text-2xl font-bold">Create Account</h1>
          {errorMessage && (
            <div className="w-full mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
              {errorMessage}
            </div>
          )}
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="space-y-2 w-full mt-1"
          >
            <div className="relative flex flex-col items-start justify-center gap-1.5 ">
              <label className="text-[#FFFFFF] text-base font-medium">
                Full Name
              </label>
              <div className="flex flex-col items-start justify-center w-full gap-1 ">
                <AnimatedInput
                  type="text"
                  placeholder="John Doe"
                  iconType="user"
                  fieldName="name"
                  register={register}
                  wrapperRef={userRef}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-center gap-1.5 ">
              <label className="text-[#FFFFFF] text-base font-medium">
                Email Address
              </label>
              <div className="flex flex-col items-start justify-center w-full gap-1 ">
                <AnimatedInput
                  type="email"
                  placeholder="Email"
                  iconType="mail"
                  fieldName="email"
                  register={register}
                  wrapperRef={wrapperRef}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                />
              </div>
            </div>
            <div className="relative flex flex-col items-start justify-center w-full gap-1.5 ">
              <label className="text-[#FFFFFF] text-base font-medium">
                Password
              </label>
              <div className="flex flex-col items-start justify-center w-full gap-1 ">
                <PasswordField
                  register={register}
                  handleFocus={handleFocus}
                  handleBlur={handleBlur}
                  passRef={passRef}
                />
              </div>
            </div>

            <div className="relative flex flex-col items-start justify-center w-full gap-1.5 ">
              <label className="text-[#FFFFFF] text-base font-medium">
                Confirm Password
              </label>
              <div className="flex flex-col items-start justify-center w-full gap-1 ">
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="w-full"
                >
                  <div
                    ref={conPassRef}
                    className="bg-[#F8F8F8]  w-full px-4 py-2 flex items-center gap-2
                    border border-transparent rounded-md transition-all duration-200"
                  >
                    <Lock className="text-black size-6" />

                    <motion.input
                      type="password"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                      })}
                      onFocus={() => handleFocus(conPassRef)}
                      onBlur={() => handleBlur(conPassRef)}
                      whileFocus={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      className="text-black text-sm placeholder:text-black bg-transparent outline-none w-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="relative flex flex-col items-start justify-center w-full gap-1.5 ">
              <label className="text-[#FFFFFF] text-base font-medium">
                Role
              </label>
              <div className="w-full">
                <Controller
                  name="role"
                  control={control}
                  rules={{ required: "Role is required" }}
                  render={({ field }) => (
                    <div ref={dropdownRef} className="relative">
                      {/* FIELD */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => setOpen((prev) => !prev)}
                        className="flex cursor-pointer items-center justify-between
                         rounded-md border border-blue-600
                         bg-white px-4 py-2 text-sm w-full"
                      >
                        {/*  selected value shown */}
                        <span className="text-black" >{field.value}</span>

                        <motion.span
                          animate={{ rotate: open ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-black"
                        >
                          <ChevronDown/>
                        </motion.span>
                      </motion.div>

                      {/* DROPDOWN */}
                      <AnimatePresence>
                        {open && (
                          <motion.ul
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute z-10 mt-1 w-full overflow-hidden
                             rounded-md border bg-white shadow-lg"
                          >
                            {roles.map((role) => (
                              <li
                                key={role}
                                onClick={() => {
                                  field.onChange(role);
                                  setOpen(false);
                                }}
                                className="cursor-pointer text-black px-4 py-2 text-sm
                                 hover:bg-blue-50"
                              >
                                {role}
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                />
              </div>
            </div>
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.25)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0px 6px 15px rgba(0,0,0,0.2)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="relative flex items-start justify-center w-full mt-5 rounded-md bg-[#E3E3E3] py-2 px-3"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ y: -1 }}
                whileTap={{ y: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="text-[#000000] font-bold text-lg"
              >
                {isSubmitting ? (
                  <Loader className="size-5 text-[#000000] animate-spin" />
                ) : (
                  " Create Account"
                )}
              </motion.button>
            </motion.div>
            <div className="flex relative items-center justify-center w-full top-2 ">
              <span className="h-0.5 bg-[#FFFFFF]  w-full" />
              <h1 className="absolute -top-2.5  bg-[#2461E6] px-2 text-white text-sm font-bold flex-1/3">
                OR
              </h1>
            </div>
            <div className="flex items-center justify-center w-full gap-4 mt-8 ">
              {socialProviders.map((provider) => (
                <SocialAuthButton
                  key={provider.id}
                  icon={provider.icon}
                  alt={provider.alt}
                  onClick={provider.onClick}
                />
              ))}
            </div>
            <div className="flex items-center justify-center w-full gap-1 ">
              <span className="text-[#FFFFFF] text-base font-semibold">
                Already have an account?{" "}
              </span>
              <Link
                to={"/sign-in"}
                className="flex items-center justify-center"
              >
                <span className="text-white hover:underline text-xl font-semibold">
                  {" "}
                  Login
                </span>
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
