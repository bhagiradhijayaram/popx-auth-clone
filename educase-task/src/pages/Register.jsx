import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[375px] h-screen bg-gray-100 px-6 py-8 flex flex-col justify-start shadow-sm">
        <div className="mb-6">
          <h1 className="text-[25px] font-bold text-gray-900 mb-2 max-w-[200px]">
            Create your PopX account
          </h1>
        </div>
        <form
          className="flex flex-col justify-between h-full"
          onSubmit={formHandler}
        >
          <div className="space-y-5">
            <div className="relative">
              <label className="absolute -top-2.5 left-3 px-1 text-[13px] font-medium text-violet-600 bg-gray-100 leading-none">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                required
                className="w-full px-4 pt-3 pb-2 text-sm border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2.5 left-3 px-1 text-[13px] font-medium text-violet-600 bg-gray-100 leading-none">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                required
                className="w-full px-4 pt-3 pb-2 text-sm border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2.5 left-3 px-1 text-[13px] font-medium text-violet-600 bg-gray-100 leading-none">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="w-full px-4 pt-3 pb-2 text-sm border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
            <div className="relative">
              <label className="absolute -top-2.5 left-3 px-1 text-[13px] font-medium text-violet-600 bg-gray-100 leading-none">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                required
                minLength={6}
                className="w-full px-4 pt-3 pb-2 text-sm border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>

            <div className="relative">
              <label className="absolute -top-2.5 left-3 px-1 text-[13px] font-medium text-violet-600 bg-gray-100 leading-none">
                Company Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                placeholder="Enter company name"
                required
                className="w-full px-4 pt-3 pb-2 text-sm border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
              />
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Are you an Agency? <span className="text-red-500">*</span>
              </p>

              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="yes"
                    className="accent-violet-600 w-4 h-4"
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="agency"
                    value="no"
                    className="accent-violet-600 w-4 h-4"
                    required
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full text-center bg-violet-600 text-white py-2 rounded-md text-md font-medium hover:bg-violet-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
