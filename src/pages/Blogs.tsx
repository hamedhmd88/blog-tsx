import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { COOKIE_NAMES } from "../enums/public.enums";
import { IBlog } from "../types/blog.types";
import { useApiGet } from "../functions/Fetchapi";
import BlogsList from "../components/BlogList";

export default function BlogPage(){
    const {data, getAPIData, status} = useApiGet();
    const [cookies] = useCookies([COOKIE_NAMES.ACCESS_TOKEN])
    const token = cookies.accessToken
    const [blogs, setBlogs] = useState<IBlog[]>([]);
    useEffect(() => {
        getAPIData("/blog", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        setBlogs(data?.data?.blogs || [])
    }, [status])
    
    return (
        <>
            {token? <BlogsList blogs={blogs}/>: <h1 className="text-center p-3">unAuthorization</h1>}
        </>
    )
}