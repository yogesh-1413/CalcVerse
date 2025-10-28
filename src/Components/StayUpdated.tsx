import React, { useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // adjust path as needed

const StayUpdated: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) return alert("Please enter your email");

    try {
      setLoading(true);

 

      // ✅ save email
      await addDoc(collection(db, "subscribers"), {
        email,
        createdAt: new Date().toISOString(),
      });

      alert("🎉 Subscribed successfully!");
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">
      <h5 className="font-medium text-white mb-3 break-words">Stay Updated</h5>
      <div className="flex flex-col sm:flex-row gap-0">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="flex-1 px-4 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 min-w-0"
        />
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="px-6 py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-all duration-200 font-medium whitespace-nowrap disabled:opacity-50"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
    </div>
  );
};

export default StayUpdated;
