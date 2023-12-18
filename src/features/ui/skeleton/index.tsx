import Skeleton from "react-loading-skeleton"; 
import "react-loading-skeleton/dist/skeleton.css"

export const SkeletonLoading = ()=> {
return (
    <>
        <h2>{"undefined" || <Skeleton />} </h2>
        <p>{"undefined" || <Skeleton/> }</p>
        <Skeleton count={1} />
    </>
    )
}