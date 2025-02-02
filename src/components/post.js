import oval from '../assets/oval.svg';
import './post.css';

function Post({ post }) {
  return (
    <div className="post-item">
      <img
        src={post.img}
        srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
        className="post-img"
        alt={post.title}
      />
      <div className="post-content">
        <div className="post-category">{post.tags}</div>
        <h2 className="post-title">{post.title}</h2>
        <div className="post-meta">
          <span className="post-author">By {post.autor}</span>
          <img src={oval} className="post-meta-oval" alt="oval" />
          <span className="post-date">{post.date}</span>
          <img src={oval} className="post-meta-oval" alt="oval" />
          <span className="post-views">{post.views} views</span>
        </div>
        <p className="post-text">{post.text}</p>
      </div>
    </div>
  );
}

export default Post;
