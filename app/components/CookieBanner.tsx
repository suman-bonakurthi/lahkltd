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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-gray-900 text-white p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
      <p className="text-sm sm:text-base">
        We use cookies to improve your experience on our site. By using our site, you agree to our cookie policy.
      </p>
      <button
        onClick={handleAccept}
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm sm:text-base"
      >
        Accept
      </button>
    </div>
  );
}
