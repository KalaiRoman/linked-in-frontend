import { useState } from "react";
import { Loader } from "lucide-react";
import { RegisterFormData } from "./FormData";
import { ToastError } from "../../middleware/toastMessages/ToastMessage";
const SignUpForm = () => {
	const [user,setUser]=useState(RegisterFormData);
	const handleChange=(e,id)=>{
		const findSingleLabel=user?.map((item)=>{
			if(item?.id===id)
			{
				return {...item,value:e.target.value}
			}
			else{
				return item;
			}
		});
		setUser(findSingleLabel)
	}

	const handleSignUp = (e) => {
		e.preventDefault();
		let showTrue;
		user?.map((item,index)=>{
			if(!item?.value?.length) return showTrue=true;
		})
		if(showTrue) ToastError("Please Enter All Fields!..");

		
	};

	return (
		<div  className='flex flex-col gap-4'>
			{/* <input
				type='text'
				placeholder='Full name'
				value={name}
				onChange={(e) => setName(e.target.value)}
				className='input input-bordered w-full'
				required
			/>
			<input
				type='text'
				placeholder='Username'
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				className='input input-bordered w-full'
				required
			/>
			<input
				type='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				className='input input-bordered w-full'
				required
			/>
			<input
				type='password'
				placeholder='Password (6+ characters)'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				className='input input-bordered w-full'
				required
			/> */}


			{user?.map((item,index)=>{
				return(
					<>
					<label>{item?.label}</label>
					
					<input
				type={item?.type}
				placeholder={item?.placeholder}
				value={item?.value}
				onChange={(e)=>handleChange(e,item?.id)}
				className='input input-bordered w-full'
				required
			/> 
					
					</>
				)
			})}

			<button type='submit'
			//  disabled={false} 
			onClick={handleSignUp}
			className='btn btn-primary w-full text-white'>
				{false ? <Loader className='size-5 animate-spin' /> : "Agree & Join"}
			</button>
		</div>
	);
};
export default SignUpForm;
