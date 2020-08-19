import React, { useRef } from 'react';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Header() {
  const matches = useMediaQuery('(min-width:768px)');

  return (
    <div className="Header">
      {
        matches?<HeaderDesktop/>:<HeaderMobile/>
      }
    </div>
  );
}

export default Header;