
   

"use client";

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/sign-in");
}

/* Legacy auth UI below:
import { useState } from "react";
import { authClient } from "../lib/auth-client";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function HomeLegacy() {
  const { data: session, isPending } = authClient.useSession();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setMessage("");

    if (!email.trim() || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    if (!isLogin && !name.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await authClient.signIn.email({
          email,
          password,
        });

        if (error) {
          setMessage(error.message || "Login failed.");
        } else {
          setMessage("Login successful!");
        }
      } else {
        const { error } = await authClient.signUp.email({
          name,
          email,
          password,
        });

        if (error) {
          setMessage(error.message || "Signup failed.");
        } else {
          setMessage("Signup successful!");
        }
      }
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return <div className="p-4">Loading...</div>;
  }

  if (session) {
    return (
      <div className="flex flex-col gap-y-4 p-4">
        <h1 className="text-xl font-bold">Welcome!</h1>
        <p>Logged in as {session.user.email}</p>
        <Button onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      </div>
    );
  }
*/
/* Legacy JSX:
    <div className="flex max-w-sm flex-col gap-y-4 p-4">
      <h1 className="text-2xl font-bold">
        {isLogin ? "Login" : "Create Account"}
      </h1>

      {!isLogin && (
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button onClick={onSubmit} disabled={loading}>
        {loading
          ? "Please wait..."
          : isLogin
            ? "Login"
            : "Create Account"}
      </Button>

      {message && <p role="status">{message}</p>}

      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"}
      </p>

      <Button
        variant="outline"
        onClick={() => {
          setIsLogin(!isLogin);
          setMessage("");
        }}
      >
        {isLogin ? "Sign Up" : "Login"}
      </Button>
    </div>
  );
}
*/