import React, { useEffect } from 'react';
import PageTitle from './PageTitle';

const WishDetail = (props) => {
  useEffect(() => {
    console.log(props)
  });
  
  return ( 
    <div>
      <div className="wish-detail">
        <div className="wish-detail__container">
          <h1>WISHDETAIILL</h1>
          {/* <PageTitle title={description}/>
          <div className="wish-detail__contents">
            <img src="http://www.clarksonmotors.co.uk/wp-content/uploads/2015/04/placeholder-600x400.png"></img>
          </div>
          <p className="wish-detail__info">
            <span>wish id: { id }</span>
            <span>created at: { createdAt }</span>
            <span>last updated: { updatedAt }</span>
          </p> */}
        </div>
     </div>
    </div>
  );
}
 
export default WishDetail;