import axios from "axios";
import React from "react";

const DiscordLogin = () => {
  const handleLogin = async () => {
    const response = await axios.get(
      "http://18.132.57.22:9001/api/native/discord"
    );

    console.log(response.data);
  };
  return (
    <div className="App">
      <button onClick={handleLogin}>Login with discord</button>
    </div>
  );
};

export default DiscordLogin;
