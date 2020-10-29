import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollection } from '../actions/collectionActions'
import CollectionDetail from './CollectionDetail';
import WishDetail from './WishDetail';
import DiagonalContainer from './DiagonalContainer';

const Collection = props => {
  const dispatch = useDispatch();
  const collectionId = props.match.params.id;
  const collection = useSelector(state => state.collections[0]);
  const [isUserLoaded, setisUserLoaded] = useState(false);
  const [ contents, setContents ] = useState(props.match.path);
  console.log(contents)

  useEffect(() => {
    (async () => {
      await dispatch(fetchCollection(collectionId));
      setisUserLoaded(true);
    })()
  }, [])

  if (isUserLoaded) {
    return (
      <>
        <DiagonalContainer type="vertical-1" />
        <DiagonalContainer type="vertical-2" />
      {contents === '/my-collections/:id' ? (
        <CollectionDetail {...collection}/>
      ) : (
        <WishDetail {...collection}/>
      )}
      </>
    );
  }
  return (
    <div>...Loading</div>
  )
}
 
export default Collection;