import React from 'react';
import editIcon from '../img/icons/edit.png';
import deleteIcon from '../img/icons/delete.png';

export default ({ isMe, avatarUrl, date, name, text }) => {
  return ( 
    <div className="message__wrapper"> 
    <div className="message">
      <div className="message__avatar">
        <img src={avatarUrl} alt="avatar" />
      </div>
      <div className="message__content">
        <h4>{name}</h4>
        <div className="message__payload .message__payload--done">
          <p>{text}</p>
          <time>{date}</time>
        </div>
      </div>
      {isMe && (
        <div className="message__control">
          <img src={editIcon} width="22" height="22" alt="editIcon" />
          <img src={deleteIcon} width="17" height="22" alt="deleteIcon" />
        </div>
      )}
    </div>  
    </div>    
  );
};
