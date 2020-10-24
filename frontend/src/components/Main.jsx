import React from 'react';
import PageTitle from './PageTitle';
import Card from './Card';

const Main = () => {
  return ( 
    <main className='main'>
      <PageTitle title='MyBox' />
      <div className='main__content'>
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
 
export default Main;