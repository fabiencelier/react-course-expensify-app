import React from 'react';
import { Link }from 'react-router-dom';

const NotFoundPage = () => (
  <div>
  <p>Page Not Found</p>
  <Link to='/'>Go back home</Link>
  </div>
);

export default NotFoundPage;
