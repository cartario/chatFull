import React from 'react';
import editIcon from '../img/icons/edit.png';
import deleteIcon from '../img/icons/delete.png';
import classnames from 'classnames';

export default ({ isMe=false, avatarUrl, date, name, text, isReaded=false , attachments}) => {
  return ( 
    
    <div className="message">
      <div className="message__avatar">
        <img src={avatarUrl} alt="avatar" />
      </div>
      <div className="message__content">
        <h4>{name}</h4>
        <div className={classnames({
          message__payload: true,
          "message__payload--readed": isReaded
        })}>
          <div>{text}
          <div className="message__attachments">
        
        {
          attachments&&attachments.map((img, i)=> <div className="message__img" key={i}><img 
          src={img.url}
          alt="atachmentsImg" width="40" height="40"
          
          /></div>)
        }
      </div>
          </div>
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
       
  );
};
