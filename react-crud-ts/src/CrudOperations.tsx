import React, {useState}from 'react';
import axiosClient from './api/axiosClient';
import { User } from './types/User';

const CrudOperations: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [formData, setFormData] = useState<User>({
        name:"",
        email:"",
        phone:"",
 });
 const [selectedId, setSelectedId] = useState<number | null>(null);

 // get all users
 const handlerFetchUsers = async () =>{
    try {
        const res = await axiosClient.get<User[]>("/Users");
        setUsers(res.data);
        console.log("Fetched users:",res.data);
    } catch (err) {
        console.log("Error fetching users",err);
    }
};

// post(add) user
const handleAddUser = async () =>{
    try{
        const res = await axiosClient.post<User>("/users", formData);
        setUsers([...users, res.data]);
        console.log("User Added:",res.data);
        setFormData({ name:"", email:"",phone:""});
    } catch (err) {
        console.log("Error Adding user", err);
    }
};

// put (update)user
const handleUpdateUser = async() =>{
    if(!selectedId) return alert("Select a user ID to update");
    try{
        const res = await axiosClient.put<User>(`/users/${selectedId}`, formData)
        setUsers(
            users.map((u) => (u.id === selectedId ? { ...u,...formData}:u))
        );
        console.log("user updated:", res.data);
        setSelectedId(null);
        setFormData({  name: "", email:"", phone:""});
     } catch (err){
         console.log("Error update user", err)

     }

};

// delete User
const handleDeleteUser = async(id:number) =>{
    try{
        await axiosClient.delete(`/users/${id}`);
        setUsers(users.filter((u) => u.id !== id));
        console.log(`user with Id ${id} deleted`);
    } catch (err){
        console.log("Error delete user", err)
    }
};

// handle input  changes 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  // load user data into form  for edit \
   const handleEditClick = (user: User) =>{
    setSelectedId(user.id!);
    setFormData({ name: user.name, email: user.email, phone: user.phone});
   };

return(
    <div style={{ padding: 30 }}>
    <h1> React+ Typescript CRUD (Axios)</h1>

    {/* CRUD Buttons */}
<div style={{ marginBottom: 20 }}>
    <button onClick={handlerFetchUsers}>Get All users</button>
</div>

{/* Form */}
<div style={{  display: "flex", gap: 10, marginBottom: 10}}>
     <input
     name="name"
     placeholder="Name"
     value={formData.name}
     onChange={handleChange}
     />
     <input
     name="email"
     placeholder="Email"
     value={formData.email}
     onChange={handleChange}
     />
       <input
     name="phone"
     placeholder="Phone"
     value={formData.phone}
     onChange={handleChange}
     />
     {selectedId ? (
        <button onClick={handleUpdateUser}>Update User</button>
     ): (
        <button onClick={handleAddUser}> Add user</button>
        )}
    </div>
{/* User Table*/}
 { users.length > 0 &&(
    <table border={1} cellPadding={8} style={{ width:"100%"}}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users.map((u) =>(
                <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.name}</td>
                     <td>{u.email}</td>
                      <td>{u.phone}</td>
                     <td>
                  <button onClick={() => handleEditClick(u)}>Edit</button>
                  <button onClick={() => handleDeleteUser(u.id!)}>Delete</button>
                </td>   
                </tr>
            ))}
        </tbody>
        </table>
 )}
    </div>

   );
};
export default CrudOperations
 