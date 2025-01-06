
import BounceLoader from "react-spinners/BounceLoader";
export const Loader=()=>{
    return(
        <>
        <BounceLoader
        color={"red"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </>
    )
}