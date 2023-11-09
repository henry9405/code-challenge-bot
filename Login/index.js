import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const toDashboard = () => {
    navigate("dashboard");
  };

  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <button onClick={toDashboard}>TO DASHBOARD </button>
      {/* <Link to="dashboard/add">TO DASHBOARD ADD</Link> */}
    </div>
  );
}

export default Login;
