import React from 'react';

const Navbar = () => {
  const handleScroll = e => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 10) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('initial');
    } else {      
      navbar.classList.remove('scrolled');
      navbar.classList.add('initial');
    }
  }

  window.addEventListener('scroll', e => {
    handleScroll(e);
  });

  return ( 
    <nav className='navbar initial'>
      <h1 className='navbar__title'>Travel Box</h1>
      <div className='navbar__hamburger'>X</div>
    </nav>
  );
}
 
export default Navbar;