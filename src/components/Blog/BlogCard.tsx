import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { TBlog } from "@/types/blog.type";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-5 flex flex-col items-center">
      {/* Blog Image */}
      <img
        src={blog?.image}
        alt={blog?.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      {/* Blog Title */}
      <h3 className="text-lg font-bold mb-2">{blog?.name}</h3>
      {/* Blog Content Preview */}
      <p
        className="text-sm text-gray-300 mb-4 text-center"
        dangerouslySetInnerHTML={{ __html: blog?.blog?.slice(0, 100) }}
      />
      {/* Read More Button */}
      <Link to={`/blogs/${blog?._id}`}>
        <Button>Read More</Button>
      </Link>
    </div>
  );
};

export default BlogCard;
