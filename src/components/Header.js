import React from 'react';
import './Header.css';
export default ({black}) => {
  return (
<header className={black ? 'black' : ''}>
  <div className="header--logo">
    <a href="/">
      <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="LoFlix"/>
    </a>
  </div>
  <div className="header--user">
  <a href="/">
      <img src="https://occ-0-2830-3934.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABTg1buRf1F87cnnPNler1qH9DPYEBUWdYY3qk4FBS2tHTwDn26P5mBz1mbu9ZLlY3n1Cdo-yALrDWKR4qgpWYTg.png?r=a41" alt="Usuario"/>
    </a>
  </div>
</header>
  )
}
