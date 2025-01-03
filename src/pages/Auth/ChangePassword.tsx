import { ChangeEvent,useState } from "react";
import {
  Navigate,
  useLocation,
} from "react-router-dom";
import { updatePasswordApi } from "../../api/authApi";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [err, setErr] = useState("");
  const location = useLocation();
  const uniqueId = useSelector((store: RootState) => store.auth.otpLogin);
  if (!uniqueId)
    return <Navigate to={"/404"} state={{ from: location }} replace />;

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      return setErr("Password does not match");
    }
    const payload = { uniqueId, newPassword };
    const result = await updatePasswordApi(payload);
    console.log(result);
  };

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
              <header className="mb-8">
                <h1 className="text-2xl font-bold mb-1">Reset Password</h1>
                <p className="text-[15px] text-slate-500">
                  Enter your new password
                </p>
              </header>

              <form className="" onSubmit={handleSubmit}>
                {err && <p>{err}</p>}
                <input
                  id="contactNumber"
                  className="w-full bg-transparent placeholder:text-slate-400 my-2 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Enter new password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNewPassword(e.target.value)
                  }
                />

                <input
                  id="contactNumber"
                  className="w-full bg-transparent placeholder:text-slate-400 my-2 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="confirm password"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setConfirmPassoword(e.target.value)
                  }
                />

                <button
                  type="submit"
                  className="w-full rounded-lg my-1 bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ChangePassword;
