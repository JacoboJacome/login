import { useAuth } from "../context/AuthContext";

export function Home() {
  const { logout, user } = useAuth();

  console.log(user);
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4">Welcome {user.displayName || user.email}</p>
        <button
          className="bg-violet-800 hover:bg-violet-500 rounded py-2 px-4 text-white font-medium"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
