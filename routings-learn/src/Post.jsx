import {  Routes,Route,  useParams } from "react-router-dom";

<Routes>
    <Route path="/posts/:id" element={<Post/>}/>
</Routes>
function Post(){
    const {id}=useParams();
    return <h2>Post ID:{id}</h2>
}

export default Post