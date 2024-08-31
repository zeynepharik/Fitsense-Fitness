import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const BlogListCard = React.memo(({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value.toLowerCase());
  };

  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm) || 
    blog.description.toLowerCase().includes(searchTerm)
  );
  const recentPosts = blogs.slice(0, 3);
  return (
    <section className="one-column-blog">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="pq-blog pq-blog-col-1">
              {filteredBlogs.map(blog => (
                <div className="col-lg-12" key={blog.id}>
                  <div className="pq-blog-post">
                    <div className="pq-post-media">
                      <img decoding="async" src={blog.image} alt={blog.title} />
                    </div>
                    <div className="pq-blog-contain">
                      <div className="pq-post-category">
                        <a href={blog.link}>{blog.category}</a>
                      </div>
                      <div className="pq-post-meta">
                        <ul>
                          <li className="pq-post-meta">
                            <a href={blog.link}>{blog.date}</a>
                          </li>
                          <li className="pq-post-comment">
                            <a href={blog.link}>{blog.comments} Comments</a>
                          </li>
                        </ul>
                      </div>
                      <h5 className="pq-blog-title">
                        <Link to={`/blog/${blog.link}`}>{blog.title}</Link>
                      </h5>
                      <p>{blog.description}</p>
                      <Link to={`/blog/${blog.link}`} className="pq-button pq-button-flat">
                        <span className="pq-button-text">Read More</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget widget_search">
                <form className="search-form" onSubmit={handleSearch}>
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      className="search-field"
                      placeholder="Search …"
                      name="search"
                    />
                  </label>
                  <button type="submit" className="search-submit">
                    <span className="screen-reader-text">Search</span>
                  </button>
                </form>
              </div>
              
              <div className="pq-widget-menu widget">
                <h2 className="widget-title">Recent Post</h2>
                <div className="pq-footer-recent-post">
                  {recentPosts.map(blog => (
                    <div key={blog.id} className="pq-footer-recent-post">
                      <div className="pq-footer-recent-post-media">
                        <Link to={`/blog/${blog.link}`}>
                          <img decoding="async" src={blog.image} alt={blog.title} />
                        </Link>
                      </div>
                      <div className="pq-footer-recent-post-info">
                        <h6>
                          <Link to={`/blog/${blog.link}`}>{blog.title}</Link>
                        </h6>
                        <Link to={`/blog/${blog.link}`} className="pq-post-date">
                          {blog.date}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
                
                <div className="widget widget_block">
                  <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
                    <div className="wp-block-group__inner-container">
                      <h2 className="wp-block-heading">Tags</h2>
                      <p className="wp-block-tag-cloud">
                        <a href="#" className="tag-cloud-link">Fitness</a>
                        <a href="#" className="tag-cloud-link">Gym</a>
                        <a href="#" className="tag-cloud-link">Sport</a>
                        <a href="#" className="tag-cloud-link">Success</a>
                        <a href="#" className="tag-cloud-link">Wild</a>
                        <a href="#" className="tag-cloud-link">Yoga</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      
    </section>
  );
});

export default BlogListCard;
