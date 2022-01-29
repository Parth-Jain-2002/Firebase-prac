import {useState,useEffect} from "react";
import './App.css';
import {db} from './firebase-config'
import {collection,getDocs,addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [users,setUsers] = useState([]);
  const ref = collection(db,"users")

  const createUser = async () =>{
      await addDoc(ref,{Name:newName,Email:newEmail,Credit:10}) 
  };

  const updateUser = async(id,Credit) =>{
     const userDoc = doc(db,"users",id);
     const newFields = {Credit: Credit +1};
     await updateDoc(userDoc,newFields)
  };

  const deleteUser= async(id) =>{
    const userDoc = doc(db,"users",id);
    await deleteDoc(userDoc);
  }

  useEffect(() =>{
     const getUsers = async () => {
        const data = await getDocs(ref);
        console.log(data.docs);
        setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
     };

     getUsers();
  },[])

  return (
    <div className="App">
      <input 
        placeholder="...Name"
        onChange={(e)=>{
          setNewName(e.target.value);
        }}
      />
      <input 
        placeholder="...Age"
        onChange={(e)=>{
          setNewEmail(e.target.value);
        }}
      />

      <button onClick={createUser}>Create New User</button>

      {users.map((user)=>{
        return(
        <div>
        {" "}
        <h1>Name : {user.Name}</h1>
        <h1>Email: {user.Email}</h1>
        <h1>Credit: {user.Credit}</h1>
        <button onClick={()=>updateUser(user.id,user.Credit)}>Increase Credit</button>
        <button onClick={()=>deleteUser(user.id)}>Delete User</button>
        </div>
      )})}
    </div>
  );
}

export default App;
