import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const isValid = formData.email && formData.password;

  const formHandler = (e) => {
    e.preventDefault();
    navigate("/account");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[375px] h-screen bg-gray-100 px-6 py-8 flex flex-col justify-start shadow-sm">
        <div className="mb-6">
          <h1 className="text-[25px] font-bold text-gray-900 mb-2 max-w-[200px]">
            Signin to your PopX account
          </h1>
          <p className="text-md text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <form className="space-y-5" onSubmit={formHandler}>
          <div className="relative">
            <label className="absolute -top-2.5 left-3 px-1 text-[13px] font-medium text-violet-600 bg-gray-100 leading-none">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              minLength={6}
              className="w-full px-4 pt-3 pb-2 text-sm border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-violet-500"
            />
          </div>
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2.5 rounded-md text-sm font-medium ${
              isValid
                ? "bg-violet-600 text-white"
                : "bg-gray-300 text-white cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
