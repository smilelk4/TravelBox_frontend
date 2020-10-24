import React from 'react';
import PageTitle from './PageTitle';

const Main = () => {
  return ( 
    <main className='main'>
      <PageTitle title='MyBox' />
      <div className='main__content'></div>
    </main>
  );
}
 
export default Main;