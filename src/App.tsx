import {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';

function App() {
 const url = "http://20.88.161.39:8080/cosmos";
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
  const getData = async () => {
    try {
      const result = await axios.get('http://20.88.161.39:8080/cosmos')
      console.log("🚀 ~ file: App.tsx ~ line 23 ~ getData ~ result.data()", result.data)  
    } catch (error) {
      console.log("🚀 ~ file: App.tsx ~ line 26 ~ getData ~ error", error)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>NewOne</h1>
        <button
          onClick={getData}
        >
          axios.get()
        </button>
      </header>
    </div>
  );
}

export default App;
