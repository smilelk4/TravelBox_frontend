import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';
import { DarkAddIcon } from '../icons/AddIcon';

const DetailContainer = (props) => {
  const [currentWishId, setCurrentWishId] = useState(null);
  const [currentCollectionId, setCurrentCollectionId] = useState(null);

  useEffect(() => {
    if (props.match.params.id) {
      if (window.location.pathname.startsWith('/my-collections/')) {
        setCurrentCollectionId(props.match.params.id);
        setCurrentWishId(null);
      } else if (window.location.pathname.startsWith('/my-wishes')) {
        setCurrentCollectionId(null);
        setCurrentWishId(props.match.params.id);
      }
    }
  })

  return ( 
    <>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="detail-container">
        <div className="detail-container__container">
          <NavLink to={currentCollectionId ? 
          `/my-collections/edit/${currentCollectionId}` :
          `/my-wishes/edit/${currentWishId}`
          }>
            <p>Edit</p>
          </NavLink>
          <NavLink to={currentCollectionId ? 
          `/my-collections/delete/${currentCollectionId}` :
          `/my-wishes/delete/${currentWishId}`
          }>
            <p>Delete</p>
          </NavLink>
          <NavLink to={`/my-wishes/create/${currentCollectionId}`}>
            <DarkAddIcon type='dc'/>
          </NavLink>
          <PageTitle title={props.title}/>
            <div className="detail-container__contents">
              {props.children}
            </div>
        </div>
      </div>
    </>
  );
}
 
export default DetailContainer;