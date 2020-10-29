import React from 'react';
import PageTitle from './PageTitle';

const DetailContainer = props => {
  return ( 
    <div className="collection-detail">
      <div className="collection-detail__container">
        <PageTitle title='hihihi'/>
          <div className="collection-detail__contents">
            {props.children}
          </div>
      </div>
    </div>
  );
}
 
export default DetailContainer;