import {Link} from "react-router-dom"

function Navbar(){
return (
    <nav style={{display:"flex", gap:"10px", padding:"10px", background:"#ccc",justifyContent:"space-between"}}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
    </nav>
)
}

export default Navbar