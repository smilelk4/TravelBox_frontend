import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PageTitle from './PageTitle';
import DiagonalContainer from './DiagonalContainer';
import { DarkAddIcon } from '../icons/AddIcon';

const DetailContainer = (props) => {
  const [currentCollectionId, setCurrentCollectionId] = useState('');

  useEffect(() => {
    if (props.match.params.id) {
      setCurrentCollectionId(props.match.params.id);
    }
  })

  return ( 
    <>
      <DiagonalContainer type="vertical-1" />
      <DiagonalContainer type="vertical-2" />
      <div className="detail-container">
        <div className="detail-container__container">
          <NavLink to={`/my-collections/edit/${currentCollectionId}`}>
            <p>Edit</p>
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