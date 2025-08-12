"use client";

import React from "react";
import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      {/* Logo or Site Title */}
      <div className="text-lg font-semibold text-gray-800">Scaffold-Lisk</div>

      {/* Search Bar */}
      <div className="relative flex-1 max-w-md mx-4">
        <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Notification Icon */}
      <div className="flex items-center">
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
      </div>

      {/* 
<div className="ml-4">
<RainbowKitCustomConnectButton />
</div>
*/}
    </header>
  );
}
