import { useState } from "react";
import { Loader } from "lucide-react";
import { ToastError } from "../../middleware/toastMessages/ToastMessage";
import { LoginUser } from "../../services/login_services";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterAction } from "../../redux/reducers/Login_reducer";
const LoginForm = () => {
	const dispatch=useDispatch();
	const navigate=useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading,setLoading]=useState(false);
	const handleSubmit = async(e) => {
		setLoading(true);
		try {
			e.preventDefault();

		if(!username || !password)
		{
			ToastError("Please Enter All Fields!...");
		}

		if(username && password)
		{
			const data={
				userNameOrEmailId:username,
				password
			}

			const response=await LoginUser(data);
				if(response.status)
						{
			localStorage.setItem("userLinkedIn",JSON.stringify(response?.token));
			setTimeout(() => {
				navigate("/home");
			}, 800);
			setLoading(false);
						}
	
						dispatch(RegisterAction(response));
			
		}
		} catch (error) {
			setLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit} className='space-y-4 w-full max-w-md'>
			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className='input input-bordered w-full'
				required
			/>
			<input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className='input input-bordered w-full'
				required
			/>

			<button type='submit' className='btn btn-primary w-full'>
				{loading ? <Loader className='size-5 animate-spin' /> : "Login"}
			</button>
		</form>
	);
};
export default LoginForm;
