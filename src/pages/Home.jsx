import React from 'react';
import Message from '../components/Message';

export default () => {
  const avatarUrl =
    'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80';

  const date = '16:00';
  const name = 'Василий Пупкин';
  const text = 'еучечечечечеечеч чечече';

  const attachments = [{
    name: "sjsjsj",
    url: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80"

  },
  {name: "sjsjsj",
  url: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80"

},
{name: "sjsjsj",
    url: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80"

  },]

  return (
    <div>
      <div className="message__wrapper">
        <Message 
        isMe={false} avatarUrl={avatarUrl} date={date} name={name} text={text} isReaded={true}
        attachments={attachments}/>
      </div>

      <div >
      <Message
        isMe={true}
        avatarUrl={avatarUrl}
        date={date}
        name={name}
        text={'dbndndddndndnn hjhjh jhjhjhjh hjhjhjhj hjhjhjh jhjhjkjkjkjkjkjkd ndndn'}
        isReaded={false}
        attachments={attachments}
      />
      </div>
    </div>
  );
};
