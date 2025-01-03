import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signInError } from "../../redux/slices/authSlice";
import { signinApi } from "../../api/authApi";
import { RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/signin.svg";
import FormButton from "../../components/FormButton";
import { useState } from "react";

const authSchema = z.object({
  email: string().email({ message: "Invalid email" }),
  password: string().min(1, {message: "Password shouldnt be empty"}),
});

type authType = Zod.infer<typeof authSchema>;

function Signin() {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const disptach = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<authType>({
    mode: "onBlur",
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (signinData: any) => {
    const response = await signinApi(signinData);
    const {accessToken} = response?.data;
    if (response?.data) {
      
      localStorage.setItem("user", accessToken)
      disptach(signIn(accessToken))
      navigate("/");
    } else {
      disptach(signInError(response?.error));
    }
  };

  const signinErr = useSelector((store: RootState) => store.auth.signInError);
  return (
    <section className="h-dvh">
      <div className=" flex  h-dvh justify-center items-center">
        <div className="container  px-6 py-6 w-2/3 shadow-lg">
          <h1 className="text-4xl font-logo pb-6">dressrossa</h1>
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 hidden lg:block">
              <img src={image} className="w-full" alt="Phone image" />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <h1 className="text-3xl">Hey there!</h1>
              <p className="pb-7">Welcome to the shop ;)</p>
              {/* <!-- Email input --> */}
              {<div className="text-red-500">{signinErr?.message}</div>}

              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("email")}
                  className="mb-2 shadow-sm p-2.5"
                  fullWidth={true}
                  label="Email address"
                  margin="dense"
                  type="email"
                  variant="outlined"
                  size="small"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm">
                    {errors.email?.message}
                  </div>
                )}
                {/* <!--Password input--> */}
                <div>
                  <TextField
                    {...register("password")}
                    className="mb-6 shadow-sm p-2.5"
                    fullWidth={true}
                    label="Password"
                    margin="dense"
                    type="password"
                    variant="outlined"
                    size="small"
                  />
                  {errors.password && (
                    <div className="text-red-500 text-sm">
                      {errors.password?.message}
                    </div>
                  )}
                </div>

                {/* <!-- Remember me checkbox --> */}

                <div className="mb-6 flex items-center justify-between">
                  {/* <!-- Forgot password link --> */}
                  <Link
                    to={"/enter-mobile"}
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* <!-- Submit button --> */}

                <FormButton
                  isSubmit={isSubmit}
                  setIsSubmit={setIsSubmit}
                />

                {/* <!-- Divider --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>

                {/* <!-- Social login buttons --> */}
                <a
                  className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#"
                  role="button"
                >
                  {/* <!-- Facebook --> */}
                  Get an OTP
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signin;
