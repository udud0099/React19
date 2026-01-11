import React from "react";

const GrandChild = () => {
  const isOpen = JSON.parse(localStorage.getItem("is-open"));
  return (
    <div>
      {isOpen.name} - {isOpen.age} - {isOpen.email}
    </div>
  );
};

export default GrandChild;
