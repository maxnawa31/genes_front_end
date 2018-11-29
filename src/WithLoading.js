import React from 'react';
import Loader from './Loader';
const WithLoading = Component => {
  return function WithLoadingComponent({ loading, ...props }) {
    if (!loading) {
      return <Component {...props} />;
    } else {
      return <Loader />;
    }
  };
};

export default WithLoading;
