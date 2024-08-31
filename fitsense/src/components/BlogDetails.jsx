import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Hero from "../components/Hero";
import { getBlogByLink } from '../store/blogSlice';

const BlogDetails = () => {
  const { link } = useParams(); 
  const blogs = useSelector(state => state.blogs.blogs); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = blogs.find(blog => blog.link === link); 
    setBlog(selectedBlog);
  }, [link, blogs]);

  if (!blog) return <div>Loading...</div>; 
  return (
    <>
      <Hero title={blog.title} />
      <section className="blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pq-blog-post">
                <div className="pq-post-media">
                  <img decoding="async" src={blog.image} alt={blog.title} />
                </div>
                <div className="pq-blog-contain">
                  <div className="pq-post-category">
                    <a href="#">{blog.category}</a>
                  </div>
                  <div className="pq-post-meta">
                    <ul>
                      <li className="pq-post-meta">
                        <a href="#">{blog.date}</a>
                      </li>
                      <li className="pq-post-comment">
                        <a href="#">{blog.comments} Comments</a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="pq-blog-title">{blog.title}</h1>
                  <p>{blog.description}</p>
                  <h3 className="pq-title">WHY DO WE FITSENSE.</h3>
                  <p>{blog.content}</p> 
                </div>
              </div>
              <div className="comment-respond">
                {/* Yorum kısmı buraya gelecek */}
              </div>
            </div>
            <div className="col-lg-4">
              {/* Sidebar kodu buraya gelecek */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
