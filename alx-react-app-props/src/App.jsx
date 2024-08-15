import React from "react";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <ProfilePage userData={userData} />;
};

export default App;
