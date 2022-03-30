import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({residents}) => {
  return (
    <div>
      {
        residents?.map((resident) =>(
          <ResidentInfo
            residentUrl={resident}
            key={resident.id}
          />
        ))
      }
    </div>
  )
}

export default ResidentsList