import React from 'react';

const WithLoading = (Component) => {
  return (
    function WithLoadingComponent({loading,...props}){
      if(!loading) {
        return <Component {...props}/>
      }else {
        return <div>Loading.....</div>
      }
    }
  )
}

export default WithLoading;