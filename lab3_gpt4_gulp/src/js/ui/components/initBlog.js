import BlogData from "../../mockData/BlogData.js";
import { BlogTemplate } from "../templates/BlogTemplate.js";

const initBlog = (BlogNode) => {
  BlogNode.insertAdjacentHTML(
    "beforeend",
    BlogTemplate(BlogData)
  );
};

export default initBlog;