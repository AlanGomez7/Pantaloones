import { ChangeEvent, useState } from "react";
import { getOtpApi, verifyOtpApi } from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { otpLogin } from "../../redux/slices/authSlice";

function AuthForm() {
  const [mobile, setMobile] = useState("");
  const [err, setErr] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpHidden, setIsOtpHidden] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitMobile = async () => {
    if (mobile.length < 10) {
      return setErr("Invalid Mobile");
    }
    const result = await getOtpApi(mobile);
    if (result?.status === 200) {
      setErr("");
      setIsOtpHidden(false);
    } else {
      setErr("something went wrong");
    }
  };

  const submitOtp = async () => {
    const result = await verifyOtpApi({ mobile, otp });
    console.log(result)
    if (result?.status === 200) {
      dispatch(otpLogin(result.data._id));
      navigate("/change-password")
    } else {
      if (result?.error) {
        setErr("invalid otp");
      }
    }
  };

  const otphandler = (event: ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };
  const mobileHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setMobile(event.target.value);
  };

  return (
    <div className="w-full max-w-sm min-w-[200px] mb-6">
      {err && <p className="mb-2 text-red-500">{err}</p>}
      <div hidden={!isOtpHidden}>
        <input
          id="contactNumber"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="+91 9999 9999 90"
          onChange={mobileHandler}
        />

        <button
          type="submit"
          className="w-3/5 mt-4 rounded-lg bg-indigo-500 px-2.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          onClick={() => submitMobile()}
        >
          continue
        </button>
      </div>
      <div hidden={isOtpHidden}>
        <input
          id="contactNumber"
          className=" w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="6 digit otp"
          onChange={otphandler}
        />

        <button
          type="submit"
          className="w-full mt-6 rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
          onClick={() => submitOtp()}
        >
          Submit Otp
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
