import React, { useState } from "react";
import Header from "./header/Header";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:container">
      <div>
        <Header />
      </div>
    </div>
  );
}
