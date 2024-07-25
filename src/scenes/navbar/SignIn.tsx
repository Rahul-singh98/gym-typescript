import { useState } from "react";

type Props = {
  setIsUserSignedIn: (value: boolean) => void;
  onClose: (value: boolean) => void;
};

const SignInSignUp = ({ setIsUserSignedIn, onClose }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastName] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json(); // Assuming the token is in the response JSON
        localStorage.setItem("access_token", data.accessToken);
        localStorage.setItem("refresh_token", data.refreshToken);
        setIsUserSignedIn(true);
        onClose(false);
      } else {
        const errorData = await response.json();
        console.error("Sign In Error:", errorData.message);
      }
    } catch (error) {
      console.error("Sign In Error:", error);
    }
  };

  const handleSignUp = async () => {
    console.log(
      JSON.stringify({
        username,
        email,
        password,
        first_name,
        last_name,
      })
    );
    try {
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          first_name,
          last_name,
        }),
      });

      if (response.ok) {
        handleSignIn();
      } else {
        const errorData = await response.json();
        console.error("Sign Up Error:", errorData.message);
      }
    } catch (error) {
      console.error("Sign Up Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="bg-gray-50 p-8 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-1" htmlFor="username">
              Name
            </label>
            <input
              type="text"
              id="username"
              className={inputStyles}
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {!isSignIn && (
            <div>
              <label className="block mb-1" htmlFor="first_name">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                className={inputStyles}
                placeholder="Enter your first name"
                value={first_name}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
          )}
          {!isSignIn && (
            <div>
              <label className="block mb-1" htmlFor="last_name">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                className={inputStyles}
                placeholder="Enter your last name"
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          )}
          {!isSignIn && (
            <div>
              <label className="block mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={inputStyles}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div>
            <label className="block mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={inputStyles}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {isSignIn ? (
            <button
              type="button"
              className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          ) : (
            <button
              type="button"
              className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          )}
        </form>
        <p className="mt-4 text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInSignUp;
