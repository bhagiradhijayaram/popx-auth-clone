import { FaCamera } from "react-icons/fa6";

const Account = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[375px] h-screen bg-gray-100 flex flex-col justify-start shadow-sm">
        <header className="bg-white px-6 py-4 border-b border-gray-200 mb-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Account Settings
          </h2>
        </header>
        <div className="px-4 py-2">
          <div className="flex gap-5">
            <div className="relative w-fit mb-4">
              <img
                src="https://res.cloudinary.com/dasvdkncm/image/upload/v1766558259/Ellipse_114-zkfYxasz_nkqcl4.png"
                alt="profile"
                className="w-18 h-18 rounded-full object-cover border border-gray-300"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs cursor-pointer border border-white shadow-sm">
                <FaCamera />
              </div>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-900">Marry Doe</h3>
              <p className="text-sm text-gray-500">Marry@Gmail.com </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            quibusdam est excepturi voluptate, distinctio sed consequuntur ipsum
            molestias iure ullam quia.
          </p>
          <div className="my-4 border-t border-dashed border-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Account;
