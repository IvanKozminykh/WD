import BlogData from "../mockData/BlogData";

export const BlogHeader = ({ text }) => {
  return (
    <div className="Head_Text">
      <h6>{text}</h6>
    </div>
  );
};

export const BlogLeft = ({ blog }) => {
  return (
    <div className="Blog_Left">
      <img className={blog.img_classname} src={blog.img_src} alt={blog.img_alt} />
      <div className="text_left_back">
        <div className={blog.class_name_1}>
          <h7 className={blog.classname_text_1}>{blog.text_1}</h7>
        </div>
        <div className={blog.class_name_2}>
          <h3 className={blog.classname_text_2}>{blog.text_2}</h3>
        </div>
        <div className={blog.class_name_3}>
          <a href={blog.href_3} className={blog.classname_text_3}>
            {blog.text_3}
          </a>
        </div>
      </div>
    </div>
  );
};

export const BlogRight = ({ blogs }) => {
  return (
    <div className="Blog_Right">
      {blogs.map((blog, index) => (
        <div key={index} className={blog.container_class}>
          <img className={blog.img_classname} src={blog.img_src} alt={blog.img_alt} />
          <div className={blog.text_container_class}>
            <h7 className={blog.date_classname}>{blog.date_text}</h7>
            <h3 className={blog.title_classname}>{blog.title_text}</h3>
            <a href={blog.link_href} className={blog.link_classname}>
              {blog.link_text}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const Blog = () => {
  return (
    <section className="section Blog">
      <BlogHeader text={BlogData.header[0].text} />
      <div className="Blog_Bottom">
        <BlogLeft blog={BlogData.left_blog[0]} />
        <BlogRight blogs={BlogData.right_blog} />
      </div>
    </section>
  );
};

export default Blog;
