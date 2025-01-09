import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import PostCreation from '../PostCreation'
import Post from '../Post'
import { Users } from "lucide-react";
import RecommendedUser from '../RecommendedUser';
import { useDispatch, useSelector } from 'react-redux';
import { UserIdAction } from '../../redux/reducers/Login_reducer';
import { getPost_actions } from '../../redux/apicallActions/Post_Action_apis';

function Home() {
	const dispatch=useDispatch();
	const state=useSelector((state)=>state?.login);
	const postsData=useSelector((state)=>state?.posts?.posts);

	console.log(postsData,"kalaiposts")

	useEffect(()=>{
dispatch(UserIdAction());
dispatch(getPost_actions());
	},[]);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
			<div className='hidden lg:block lg:col-span-1'>
				<Sidebar user={"authUser"} />
			</div>

			<div className='col-span-1 lg:col-span-2 order-first lg:order-none'>
				<PostCreation user={"authUser"} />

				{postsData?.map((post) => (
					<Post key={post} post={post} />
				))}

{true && (
					<div className='bg-white rounded-lg shadow p-8 text-center'>
						<div className='mb-6'>
							<Users size={64} className='mx-auto text-blue-500' />
						</div>
						<h2 className='text-2xl font-bold mb-4 text-gray-800'>No Posts Yet</h2>
						<p className='text-gray-600 mb-6'>Connect with others to start seeing posts in your feed!</p>
					</div>
				)}
				
			</div>
			{true && (
				<div className='col-span-1 lg:col-span-1 hidden lg:block'>
					<div className='bg-secondary rounded-lg shadow p-4'>
						<h2 className='font-semibold mb-4'>People you may know</h2>
						{Array(10).fill("kalai")?.map((user) => (
							<RecommendedUser key={user._id} user={user} />
						))}
					</div>
				</div>
			)}
		</div>
  )
}

export default Home