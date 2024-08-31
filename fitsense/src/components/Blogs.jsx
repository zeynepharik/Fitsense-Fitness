import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BlogListCard from '../components/BlogListCard';
import Hero from '../components/Hero';
import { fetchBlogs } from '../store/blogSlice';

const Blogs = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const blogs = useSelector((state) => state.blogs.blogs); 
  const status = useSelector((state) => state.blogs.status);
  const error = useSelector((state) => state.blogs.error);

  
  const filteredBlogs = useMemo(() => 
    blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    ), [blogs, searchTerm]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Hero title="Blog" />
      <div className="blog-container">
        <BlogListCard blogs={filteredBlogs} />
      </div>
    </>
  );
};

export default Blogs;
