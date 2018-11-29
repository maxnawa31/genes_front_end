import React from 'react';
import Loader from './Loader';
const WithLoading = Component => ({ loading, ...props }) => {
  return !loading ? <Component {...props} /> : <Loader />;
};

export default WithLoading;
