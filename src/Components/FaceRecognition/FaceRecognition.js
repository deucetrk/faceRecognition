import React from 'react';

const Facerecognition = ({ imageUrl }) => {
    return (
      <div className='center'>
        <img alt='' src={imageUrl} />
      </div>
    );
}

export default Facerecognition