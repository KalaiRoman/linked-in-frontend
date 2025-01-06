import Navbar from "./Navbar";
const Layout = ({ children }) => {

	const pathName=window.location.pathname;
	return (
		<div className='min-h-screen bg-base-100'>

			{pathName=="/login" || pathName=="/signup"?<></>:<>
				<Navbar />
			
			</>}
			<main className='max-w-7xl mx-auto px-4 py-6'>{children}</main>
		</div>
	);
};
export default Layout;
