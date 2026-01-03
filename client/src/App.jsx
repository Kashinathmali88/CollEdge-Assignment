import React from "react";
import AllContact from "./components/AllContact";
import AddNewContact from "./components/AddNewContact";

const App = () => {
  return (
    <div className="flex-center bg-manhattan-300 h-screen w-full">
      <div className="bg-manhattan-100 w-96 min-h-96 p-4 rounded-md">
        <AddNewContact />
        <AllContact />
      </div>
    </div>
  );
};

export default App;
