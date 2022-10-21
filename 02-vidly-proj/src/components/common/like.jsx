import React, { useState } from 'react';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

// INTERFACE OF THIS COMPONENT
/* Input Property: liked: boolean
 * Output: onClick event (to be raised)
 */

const Like = (props) => {
  const [icon, setIcon] = useState(props.liked ? 'heartfilled' : 'heart');
  const changeIcon = (state) => {
    if (state === 'heart') {
      return 'heartfilled'; // filled
    } else {
      return 'heart'; // not filled
    }
  };
  return (
    <span onClick={() => setIcon((like) => changeIcon(like))}>
      {icon === 'heartfilled' ? <BsSuitHeartFill /> : <BsSuitHeart />}
    </span>
  );
};

export default Like;
