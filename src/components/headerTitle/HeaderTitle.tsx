import React from "react";
import "./HeaderTitle.css";

export default function HeaderTitle({ title }: { title: string }) {
  return (
    <div>
      <span className="header-title">{title}</span>
    </div>
  );
}
