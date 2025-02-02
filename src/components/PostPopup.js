import React from 'react';
import useOutsideClick from '../hooks/useOutsideClick';
import './PostPopup.css';

function PostPopup({ post, onClose }) {
  const popupRef = useOutsideClick(onClose);

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default PostPopup; 