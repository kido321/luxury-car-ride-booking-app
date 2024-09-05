// import { DirectionDataContext } from '@/context/DirectionDataContext';
// import { SelectedCarAmountContext } from '@/context/SelectedCarAmount';
// import CarsList from '@/data/CarsList'
// import Image from 'next/image'
// import React, { useContext, useState } from 'react'
// import { useToast } from "@/components/ui/use-toast"

// function Cars() {
//     const [selectedCar, setSelectedCar] = useState<any>()
//     const { directionData } = useContext(DirectionDataContext);
//     const { selectedCarAmount , setSelectedCarAmount } = useContext(SelectedCarAmountContext)
//     const { toast } = useToast()

//     const getCost = (charges:any) => {
//         if (!directionData || !directionData.routes || directionData.routes.length === 0) {
//           toast({
//             variant: "destructive",
//             title: "Unavailable address",
//             description: "Ride trip location not allowed",
//         })
//             return null;
//         }


//         if (directionData.code !== "Ok") {
//             toast({
//                 variant: "destructive",
//                 title: "Unavailable address",
//                 description: "Ride trip location not allowed",
//             })
//             return null;
//         }

//         return (charges * directionData.routes[0].distance * 0.000621371192).toFixed(2);
//     }

// //     const getSelectedcaramount = (index :any , item:any)=>{

// //       if (directionData.code !== "Ok") {
       
// //        return null
// //     }

// //    setSelectedCarAmount((item.charges * directionData.routes[0].distance * 0.000621371192).toFixed(2))
// // }



    
//     return (
//         <div className='mt-3'>
//             <h2 className='font-medium text-[15px] text-white'>Select Car</h2>
//             <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
//                 {CarsList.map((item, index) => (
//                     <div 
//                         key={index} 
//                         className={`m-2 p-2 border-[3px] rounded-md hover:border-yellow-400 cursor-pointer bg-white
//                             ${selectedCar === index ? 'border-yellow-400 border-[5px]' : ''}`}
//                         onClick={() =>  setSelectedCar(index)}
//                     >
//                         <Image 
//                             src={item.image}
//                             alt={item.name}
//                             width={95}
//                             height={100}
//                             className='w-full'
//                         />
//                         <h2 className='text-[14px] text-black pt-2'>
//                             {item.name}
//                             {getCost(item.charges) !== null && (
//                                 <span className='float-right font-medium text-black'>
//                                     {getCost(item.charges)}$
//                                 </span>
//                             )}
//                         </h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Cars

// import { DirectionDataContext } from '@/context/DirectionDataContext';
// import CarsList from '@/data/CarsList'
// import Image from 'next/image'
// import React, { useContext, useState } from 'react'
// import { useToast } from "@/components/ui/use-toast"

// function Cars() {
//     const [selectedCar, setSelectedCar] = useState<any>()
//     const { directionData, setDirectionData } = useContext(DirectionDataContext);
//     const { toast } = useToast()

//     const getCost = (charges: any) => {
//       if (directionData.routes[0] == undefined) {
//         toast({
//           variant: "destructive",
//           title: "Unavailable address",
//           description: "Ride trip location not allowed",
//         })
//         return 0;
//       } else {
//         return (charges * directionData.routes[0].distance * 0.000621371192).toFixed(2)
//       }
//     }

//     return (
//         <div className='mt-3'>
//             <h2 className='font-medium text-[15px] text-white'>Select Car</h2>
//             <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
//                 {CarsList.map((item, index) => (
//                     <div key={index} 
//                          className={`m-2 p-2 border-[3px] rounded-md hover:border-yellow-400 cursor-pointer bg-white
//                                     ${index == selectedCar ? 'border-yellow-400 border-[5px]' : null}`}
//                          onClick={() => setSelectedCar(index)}>
//                         <Image src={item.image}
//                                alt={item.name}
//                                width={95}
//                                height={100}
//                                className='w-full'
//                         />
//                         <h2 className='text-[14px] text-black pt-2'>
//                             {item.name}
//                             {directionData.routes[0] ?
//                                 <span className='float-right font-medium text-black'>
//                                     {getCost(item.charges)}$
//                                 </span> 
//                             : null}
//                         </h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Cars


// import { DirectionDataContext } from '@/context/DirectionDataContext';
// import CarsList from '@/data/CarsList'
// import Image from 'next/image'
// import React, { useContext, useState } from 'react'
// import { useToast } from "@/components/ui/use-toast"

// function Cars() {
//     const [selectedCar, setSelectedCar] = useState<any>(null)
//     const { directionData } = useContext(DirectionDataContext);
//     const { toast } = useToast()

//     const getCost = (charges:any) => {
//         if (!directionData || !directionData.routes || directionData.routes.length === 0) {
//           console.log("toast")
      
//           toast({
//             variant: "destructive",
//             title: "Unavailable address",
//             description: "Ride trip location not allowed",
//         })
//         return null; 
//         }

    

//         return (charges * directionData.routes[0].distance * 0.000621371192).toFixed(2);
//     }

//     return (
//         <div className='mt-3'>
//             <h2 className='font-medium text-[15px] text-white'>Select Car</h2>
//             <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
//                 {CarsList.map((item, index) => (
//                     <div 
//                         key={index} 
//                         className={`m-2 p-2 border-[3px] rounded-md hover:border-yellow-400 cursor-pointer bg-white
//                             ${selectedCar === index ? 'border-yellow-400 border-[5px]' : ''}`}
//                         onClick={() => setSelectedCar(index)}
//                     >
//                         <Image 
//                             src={item.image}
//                             alt={item.name}
//                             width={95}
//                             height={100}
//                             className='w-full'
//                         />
//                         <h2 className='text-[14px] text-black pt-2'>
//                             {item.name}
//                             {getCost(item.charges) !== null && (
//                                 <span className='float-right font-medium text-black'>
//                                     {getCost(item.charges)}$
//                                 </span>
//                             )}
//                         </h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Cars


// import { DirectionDataContext } from '@/context/DirectionDataContext';
// import CarsList from '@/data/CarsList'
// import Image from 'next/image'
// import React, { useContext, useState, useCallback } from 'react'
// import { useToast } from "@/components/ui/use-toast"

// function Cars() {
//     const [selectedCar, setSelectedCar] = useState<any>(null)
//     const { directionData } = useContext(DirectionDataContext);
//     const { toast } = useToast()
    
//     const getCost = useCallback((charges: any) => {
//         if (!directionData || !directionData.routes || directionData.routes.length === 0) {
//             toast({
//                 variant: "destructive",
//                 title: "Unavailable address",
//                 description: "Ride trip location not allowed",
//             })
//             return null;
//         }
        
//         return (charges * directionData.routes[0].distance * 0.000621371192).toFixed(2);
//     }, [directionData, toast])

//     return (
//         <div className='mt-3'>
//             <h2 className='font-medium text-[15px] text-white'>Select Car</h2>
//             <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
//                 {CarsList.map((item, index) => (
//                     <div
//                         key={index}
//                         className={`m-2 p-2 border-[3px] rounded-md hover:border-yellow-400 cursor-pointer bg-white
//                             ${selectedCar === index ? 'border-yellow-400 border-[5px]' : ''}`}
//                         onClick={() => setSelectedCar(index)}
//                     >
//                         <Image
//                             src={item.image}
//                             alt={item.name}
//                             width={95}
//                             height={100}
//                             className='w-full'
//                         />
//                         <h2 className='text-[14px] text-black pt-2'>
//                             {item.name}
//                             {getCost(item.charges) !== null && (
//                                 <span className='float-right font-medium text-black'>
//                                     {getCost(item.charges)}$
//                                 </span>
//                             )}
//                         </h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Cars



import { DirectionDataContext } from '@/context/DirectionDataContext';
import { SelectedCarAmountContext } from '@/context/SelectedCarAmount';
import { SelectedCarContext } from '@/context/SelectedCarContext';
import CarsList from '@/data/CarsList'
import Image from 'next/image'
import React, { useContext, useState, useCallback, useMemo, useEffect } from 'react'
import { useToast } from "@/components/ui/use-toast"

function Cars() {
    
    const { directionData } = useContext(DirectionDataContext);
    const {selectedCarAmount,setSelectedCarAmount} = useContext(SelectedCarAmountContext);
    const {selectedCar,setSelectedCar} = useContext(SelectedCarContext);

    const { toast } = useToast()

    const isValidDirection = useMemo(() => {
        return directionData && directionData.routes && directionData.routes.length > 0;
    }, [directionData]);

    useEffect(() => {
        if (!isValidDirection) {
            toast({
                variant: "destructive",
                title: "Unavailable address",
                description: "Ride trip location not allowed",
            });
        }
    }, [isValidDirection, toast]);

    const getCost = useCallback((charges: number) => {
        if (!isValidDirection) return null;
       var mile =  directionData.routes[0].distance * 0.000621371192
       var price  = (charges * mile) ;
       let charge;
  switch (true) {
    case mile <= 10:
      charge = 5;
      break;
    case mile <= 20:
      charge = 4.5;
      break;
    case mile <= 50:
      charge = 4;
      break;
    case mile <= 100:
      charge = 3.5;
      break;
    default:
      charge = 3;
  }
        {
            if ( price < 60 ){
return '65';
            }
            else{
                return (charge * mile).toFixed(2);
            }
            
           
        }

    }, [isValidDirection, directionData]);

    return (
        <div className='mt-3'>
            <h2 className='font-medium text-[15px] text-white'>Select Car</h2>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
                {CarsList.map((item, index) => {
                    const cost = getCost(item.charges);
                    return (
                        <div
                            key={index}
                            className={`m-2 p-2 border-[3px] rounded-md hover:border-yellow-400 cursor-pointer bg-white
                                ${selectedCar === item.name ? 'border-yellow-400 border-[5px]' : ''}`}
                            onClick={() => {setSelectedCar(index)
                              setSelectedCarAmount(getCost(item.charges))
                              setSelectedCar(item.name)
                            }}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={95}
                                height={100}
                                className='w-full'
                            />
                            <h2 className='text-[14px] text-black pt-2'>
                                {item.name}
                                {cost !== null && (
                                    <span className='float-right font-medium text-black'>
                                        {cost}$
                                    </span>
                                )}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Cars