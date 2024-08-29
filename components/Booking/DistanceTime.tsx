// import { DirectionDataContext } from '@/context/DirectionDataContext';
// import React, { useContext } from 'react'

// function DistanceTime() {
//   const {directionData, setDirectionData} 
//   = useContext(DirectionDataContext);

//   return directionData?.routes&&(
//     <div className='bg-yellow-500 p-3'>
//         {/* <h2 className='text-gray-500 text-[13px]'>
//         Distance:<span className='font-medium text-black'>
//             {(directionData.routes[0].distance*0.000621371192)
//             .toFixed(2)} Miles</span>
//         Duration:<span className='font-medium text-black'>
//         {directionData.routes[0].duration/60} Min </span>
//         </h2> */}

// <h2 className='text-yellow-100 opacity-80 text-[15px]'>
//         Distance:<span className='font-bold mr-3 text-black'>
//         {(directionData.routes[0].distance*0.000621371192)
//             .toFixed(2)} Miles</span>
//          Duration:<span className='font-bold text-black'>
//          {(directionData.routes[0].duration/60).toFixed(2)} Min </span>
//         </h2>
        
//     </div>
//   )
// }

// export default DistanceTime


import { DirectionDataContext } from '@/context/DirectionDataContext';
import React, { useContext } from 'react';

function DistanceTime() {
  const { directionData } = useContext(DirectionDataContext);

  // Check if directionData and directionData.routes exist and have at least one route
  if (!directionData?.routes?.[0]) {
    return null; // or return a placeholder/loading component
  }

  const { distance, duration } = directionData.routes[0];
  const distanceMiles = (distance * 0.000621371192).toFixed(2);
  const durationMinutes = (duration / 60).toFixed(2);

  return (
    <div className='bg-yellow-500 p-3'>
      <h2 className='text-yellow-100 opacity-80 text-[15px]'>
        Distance:<span className='font-bold mr-3 text-black'>{distanceMiles} Miles</span>
        Duration:<span className='font-bold text-black'>{durationMinutes} Min</span>
      </h2>
    </div>
  );
}

export default DistanceTime;