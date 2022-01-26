import { useEffect, useState } from 'react';


export const REQUEST_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILURE: 'failure'
}


const useRequestDelay = ( delayTime = 1000, initialData = [] ) => {

  const [data, setData] = useState(initialData);
  // const [isLoading, setIsLoading] = useState(true);
  // const [hasError, setHasError] = useState(false);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState('');
  
  const delay = (ms) => new Promise( resolve => setTimeout(resolve, ms) );
  
  useEffect( () => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        // throw 'had error!';
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData( data );
        
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(error);
      }
    }
  
    delayFunc();
  }, [])

  
  const updateRecord = ( recordUpdated, doneCallback ) => {

    const originalRecords = [ ...data ];

    const newRecords = data.map( rec => {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    const delayFunction = async () => {
      try {
        await delay( delayTime );
        if ( doneCallback ) doneCallback();

        setData( newRecords );

      } catch (error) {
        console.log(error);

        if (doneCallback) {
          doneCallback();
        }

        setData(originalRecords);
      }
    }

    delayFunction();
  }
 
  
  return {
    data,
    requestStatus,
    error,
    updateRecord
  }

}


export default useRequestDelay;