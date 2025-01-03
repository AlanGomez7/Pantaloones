import AuthForm from "../../components/Auth/AuthForm";

function OtpSignin() {

  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">
            <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
              <header className="mb-8">
                <h1 className="text-2xl font-bold mb-1">Forgot password ?</h1>
                <p className="text-[15px] text-slate-500">
                  Enter registered phone number
                </p>
              </header>

              <AuthForm />

              <div className="text-sm text-slate-500 mt-4" hidden={true}>
                Didn't receive code?{" "}
                <a
                  className="font-medium text-indigo-500 hover:text-indigo-600"
                  href=""
                >
                  Resend
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default OtpSignin;
