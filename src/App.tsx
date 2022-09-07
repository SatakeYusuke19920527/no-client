import {useEffect, useState} from 'react';
import './App.css';

function App() {
 const url = "/api/albums";
 const [users, setUsers] = useState([])
  console.log("🚀 ~ file: App.tsx ~ line 9 ~ App ~ users", users)
  useEffect(() => {
   fetch(url, { method: "GET" })
     .then((res) => res.json())
     .then((data) => {
       setUsers(data);
     })
     .catch((err) => {
       console.log(err);
       console.log("err");
     });
 }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>NewOne</h1>
      </header>
    </div>
  );
}

export default App;
