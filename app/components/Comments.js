import React from 'react';

const Comments = (props) => {
  return (
    <div className='comment'>
      <div className='row'>
        <div className='col-xs-2'>
          <div className='avatar'></div>
        </div>
        <div className='col-xs-10 pl-small'>
          <h5 className='name'>You</h5>
          <p className='content'>
            <button onClick={props.delComment} className='delete'><i className='ion-android-close'></i></button>
            {props.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
