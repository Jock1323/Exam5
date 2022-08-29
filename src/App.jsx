import React, { useEffect, useState } from "react";
import get from "./API/GET/Get";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import dataContext from "./Context/DataContext";
function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [userName, setUserName] = useState("Jock1323");
  const userData = async () => {
    setLoad(false);
    const user = await get.getUser(userName);
    const ans = user.data;
    setData(ans);
    setLoad(true);
  };
  useEffect(() => {
    userData();
  }, [userName]);
  console.log(data);
  return (
    <>
      <Header setUserName={setUserName} userData={userData} />
      {load ? (
        <dataContext.Provider value={data}>
          <Main />
        </dataContext.Provider>
      ) : (
        "erroe"
      )}
    </>
  );
}

export default App;
