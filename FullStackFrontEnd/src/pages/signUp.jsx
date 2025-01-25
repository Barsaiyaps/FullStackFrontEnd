import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent page reload
      if(name=="" || email=="" || password==""){
        alert('Insufficient data');
      }else{

        localStorage.setItem("user",JSON.stringify({name:name,email:email,password:password}));
        let user=JSON.parse(localStorage.getItem("user"))
        console.log(user)
        console.log("Form submitted");
        navigate("/login");
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit} style={{backgroundColor:"skyblue", margin:"50px", padding:"100px"}}>
          <div>
  
            <h1>Welcome to SignUp</h1>
            <label htmlFor="name">Name</label><br />
            <input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /><br />
  
            <label htmlFor="email">Email</label><br />
            <input id="email" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
  
            <label htmlFor="password">Password</label><br />
            <input id="password" placeholder="Enter your password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
  
            <button type="submit">SignUp</button>
            {/* <button onClick={navigate("/signUp")}>Sign Up</button> */}
          </div>
        </form>
      </>
    );
  }
  
  export default SignUp;
  