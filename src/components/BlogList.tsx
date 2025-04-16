/* eslint-disable jsx-a11y/img-redundant-alt */

import { FC, JSX } from "react";
import BlogCardComponent from "./BlogCard";
import { PropsBlogs } from "../types/blog.types";

const BlogsList: FC<PropsBlogs> = ({blogs}) => {
    const Cards: JSX.Element[] = blogs.map((blog, key) => (
        <BlogCardComponent blog = {blog} key={key} />
    ))
    return (
        <>
            <div className="grid gap-2 lg:grid-cols-4 p-5">
                {Cards}
            </div>
        </>
    );
}
export default BlogsList