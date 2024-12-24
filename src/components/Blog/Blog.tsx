import { useGetAllBlogsQuery } from "@/redux/features/blog/blogApi";
import BlogCard from "./BlogCard";

const Blog = () => {
  const { data: BlogsData } = useGetAllBlogsQuery("");
  const blogs = BlogsData?.data;
  console.log(blogs, "blogs");
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-semibold text-white mb-8">
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs?.map((blog: any) => (
            <BlogCard blog={blog} key={blog?._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
