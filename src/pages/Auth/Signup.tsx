import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signinApi, signupApi } from "../../api/authApi";
import { signIn, signInError, signUpError } from "../../redux/slices/authSlice";

import { useState } from "react";
import { RootState } from "../../redux/store";

const signupSchema = z.object({
  email: string().email(),
  password: string({ message: "enter a valid password" }).min(8, {
    message: "requires atleast 8 characters",
  }),
  username: string().min(8, {
    message: "Username requires atleast 8 characters",
  }),
  mobile: string().min(10, { message: "Mobile no must contain 10 digits" }),
});

type authType = Zod.infer<typeof signupSchema>;

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // const signInErrMsg = useSelector((store: RootState) => store.auth.signInError);
  const signUpErrMsg = useSelector((store: RootState) => store.auth.signUpError);

  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<authType>({
    mode: "onBlur",
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (userInput: any) => {
    setLoading(true);
    const result = await signupApi(userInput);
    if (result?.error) {
      dispatch(signUpError(result.error))
    }

    if (result?.data) {
      const { email, password } = userInput;
      const response = await signinApi({ email, password });
      
      if(response?.error) {
        dispatch(signInError(response.error));
      }else{
        dispatch(signIn(response?.data));
        navigate("/home")
      }
    }
  };

  return (
    <section className="h-screen">
      <div className="w-dvw flex  h-dvh justify-center items-center">
        <div className="container  px-6  w-2/3 shadow-lg">
          <h1 className="text-4xl font-logo">shop</h1>
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 hidden lg:block">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            {/* <!-- Right column container with form --> */}
            
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <h1 className="text-3xl">Hey there!</h1>
              <p className=" pb-7">Welcome to the shop ;)</p>

              {signUpErrMsg ? (
                <p className="text-rose-500 mb-2">{signUpErrMsg.message}</p>
              ) : (
                <></>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* username input feild */}
                <TextField
                  {...register("username")}
                  className="mb-6 shadow-sm p-2.5"
                  fullWidth={true}
                  label="Username"
                  margin="dense"
                  variant="outlined"
                  size="small"
                ></TextField>

                {errors.username && (
                  <div className="text-red-500 text-xs">{errors.username?.message}</div>
                )}

                {/* Mobile input feild */}

                <TextField
                  {...register("mobile")}
                  className="mb-6 shadow-sm p-2.5"
                  fullWidth={true}
                  label="Mobile"
                  margin="dense"
                  variant="outlined"
                  size="small"
                >
                </TextField>

                {errors?.mobile && (
                  <div className="text-red-500 text-xs">{errors.mobile?.message}</div>
                )}

                {/* <!-- Email input --> */}
                <TextField
                  {...register("email", {})}
                  className="mb-2 shadow-sm p-2.5"
                  fullWidth={true}
                  label="Email address"
                  margin="dense"
                  type="email"
                  variant="outlined"
                  size="small"
                ></TextField>
                {errors.email && (
                  <div className="text-red-500 text-xs">{errors.email?.message}</div>
                )}
                {/* <!--Password input--> */}
                <TextField
                  {...register("password")}
                  className="mb-6 shadow-sm p-2.5"
                  fullWidth={true}
                  label="Password"
                  margin="dense"
                  type="password"
                  variant="outlined"
                  size="small"
                  autoComplete="off"
                ></TextField>
                {errors.password && (
                  <div className="text-red-500 text-xs">{errors.password?.message}</div>
                )}

                {/* <!-- Remember me checkbox --> */}
                <div className="mb-6 flex items-center justify-between">
                  {/* <!-- Forgot password link --> */}
                  <a
                    href="#!"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* <!-- Submit button --> */}

                <button
                  disabled={!isDirty || !isValid}
                  type="submit"
                  className="inline-block w-full rounded bg-blue-600 text-white p-2.5"
                >
                  Sign up
                </button>

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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Continue with Facebook
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
