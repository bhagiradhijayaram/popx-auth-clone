import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[375px] h-screen bg-gray-100 px-6 py-8 flex flex-col justify-end shadow-sm">
        <div className="mb-6">
          <h1 className="text-[25px] font-bold text-gray-900 mb-2">
            Welcome to PopX
          </h1>
          <p className="text-md text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="space-y-3">
          <Link
            to="/register"
            className="block w-full text-center bg-violet-600 text-white py-2 rounded-md text-md font-medium hover:bg-violet-700 transition"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="block w-full text-center bg-violet-300 text-violet-900 py-2 rounded-md text-md font-medium hover:bg-violet-400/40 transition"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Welcome;
