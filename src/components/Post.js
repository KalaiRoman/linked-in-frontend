import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader, MessageCircle, Send, Share2, ThumbsUp, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

// import PostAction from "./PostAction";

const Post = ({post}) => {
	const [showComments, setShowComments] = useState(false);
	const [newComment, setNewComment] = useState("");
	const [comments, setComments] = useState([]);



	const handleDeletePost = () => {
		if (!window.confirm("Are you sure you want to delete this post?")) return;
	};

	

	const handleAddComment = async (e) => {
		e.preventDefault();
		if (newComment.trim()) {
			// createComment(newComment);
			setNewComment("");
			setComments([
				...comments,
				{
					content: newComment,
					// user: {
					// 	_id: authUser._id,
					// 	name: authUser.name,
					// 	profilePicture: authUser.profilePicture,
					// },
					createdAt: new Date(),
				},
			]);
		}
	};

	return (
		<div className='bg-secondary rounded-lg shadow mb-4'>
			<div className='p-4'>
				<div className='flex items-center justify-between mb-4'>
					<div className='flex items-center'>
						<Link to={`/profile`}>
							<img
								src={post?.user?.avatar}
								alt={post.user.userName}
								className='size-10 rounded-full mr-3'
							/>
						</Link>

						<div>
							<Link to={`/profile`}>
								<h3 className='font-semibold'>{post.user.userName}</h3>
							</Link>
							<p className='text-xs text-info'>{"post.author.headline"}</p>
							<p className='text-xs text-info'>
                                
								{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
							</p>
						</div>
					</div>
					{/* {isOwner && (
						<button onClick={handleDeletePost} className='text-red-500 hover:text-red-700'>
							{isDeletingPost ? <Loader size={18} className='animate-spin' /> : <Trash2 size={18} />}
						</button>
					)} */}
				</div>
				<p className='mb-4'>{post?.title}</p>
				{post.image && <img src={post.image} alt='Post content' className='rounded-lg w-full mb-4' />}

				<div className='flex justify-between text-info'>
					{/* <PostAction
						icon={<ThumbsUp size={18} className={true ? "text-blue-500  fill-blue-300" : ""} />}
						text={`Like (${0})`}
						// onClick={handleLikePost}
					/>

					<PostAction
						icon={<MessageCircle size={18} />}
						text={`Comment (${0})`}
						onClick={() => setShowComments(!showComments)}
					/>
					<PostAction icon={<Share2 size={18} />} text='Share' /> */}
				</div>
			</div>

			{showComments && (
				<div className='px-4 pb-4'>
					<div className='mb-4 max-h-60 overflow-y-auto'>
						{/* {comments.map((comment) => (
							<div key={comment._id} className='mb-2 bg-base-100 p-2 rounded flex items-start'>
								<img
									src={comment.user.profilePicture || "/avatar.png"}
									alt={comment.user.name}
									className='w-8 h-8 rounded-full mr-2 flex-shrink-0'
								/>
								<div className='flex-grow'>
									<div className='flex items-center mb-1'>
										<span className='font-semibold mr-2'>{comment.user.name}</span>
										<span className='text-xs text-info'>
											{formatDistanceToNow(new Date(comment.createdAt))}
										</span>
									</div>
									<p>{comment.content}</p>
								</div>
							</div>
						))} */}


{Array(10)?.fill("kalai").map((comment) => (
							<div key={comment} className='mb-2 bg-base-100 p-2 rounded flex items-start'>
								<img
									src={comment.user.profilePicture || "/avatar.png"}
									alt={comment}
									className='w-8 h-8 rounded-full mr-2 flex-shrink-0'
								/>
								<div className='flex-grow'>
									<div className='flex items-center mb-1'>
										<span className='font-semibold mr-2'>{comment}</span>
										<span className='text-xs text-info'>
											{/* {formatDistanceToNow(new Date(comment.createdAt))} */}
										</span>
									</div>
									<p>{"comment.content"}</p>
								</div>
							</div>
						))}
					</div>

					<form onSubmit={handleAddComment} className='flex items-center'>
						<input
							type='text'
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							placeholder='Add a comment...'
							className='flex-grow p-2 rounded-l-full bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary'
						/>

						<button
							type='submit'
							className='bg-primary text-white p-2 rounded-r-full hover:bg-primary-dark transition duration-300'
							// disabled={isAddingComment}
						>
							{false ? <Loader size={18} className='animate-spin' /> : <Send size={18} />}
						</button>
					</form>
				</div>
			)}
		</div>
	);
};
export default Post;
