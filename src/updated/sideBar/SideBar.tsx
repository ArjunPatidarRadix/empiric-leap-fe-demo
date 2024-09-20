import React from "react";
import "./SideBar.css";
import { RiDashboardFill } from "react-icons/ri";
import { FaChartSimple } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";

export default function SideBar() {
  return (
    <div
      className="px-3 h-100
                    bg-green-500 flex flex-col justify-center space-y-10"
    >
      <button>
        <RiDashboardFill color="var(--accent-color)" size="45px" />
      </button>
      <button>
        <FaChartSimple color="var(--text-color)" size="45px" />
      </button>
      <button>
        <IoIosSettings color="var(--accent-color)" size="45px" />
      </button>
    </div>
  );
}
