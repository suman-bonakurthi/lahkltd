"use client";

import { useEffect, useState } from "react";
import { getCookie, setCookie } from "../utils/cookies";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = getCookie("acceptedCookies");
    if (!accepted) setVisible(true);
  }, []);

  const handleAccept = () => {
    setCookie("acceptedCookies", "true", 365);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800/80 backdrop-blur-sm text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm sm:text-base text-white flex-1">
          We use cookies to improve your experience. By using our site, you agree to our{" "}
          <a href="/privacy-policy" className="underline font-medium text-primary">
            Privacy Policy
          </a>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-primary text-white font-medium px-4 py-2  text-sm sm:text-base hover:bg-primary-dark transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
