import { NextResponse } from "next/server";
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"
export async function GET(request:any) {

    const {searchParams}=new URL(request.url);
    const westCoastBbox = "-124.848974,32.528832,-114.131211,49.00237";
    var searchText=searchParams.get('q');
    console.log(searchText);

if(searchText){
    searchText = encodeURIComponent(searchText)
}
    const res=await fetch(
        BASE_URL+'?q='+searchText+'&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363'
    +"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN+'&language=en&limit=10&types=country%2Cregion%2Cdistrict%2Cpostcode%2Clocality%2Cplace%2Cneighborhood%2Caddress%2Cpoi%2Cstreet%2Ccategory&proximity=-115.092872%2C36.147116'
   ,
    {
        headers:{
            "Content-Type": "application/json"
        }
    })



    const searchResult = await res.json();
    return NextResponse.json(searchResult)
    
}

// import { NextResponse } from "next/server";

// const BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

// export async function GET(request: any) {
//     const { searchParams } = new URL(request.url);
//     const searchText = searchParams.get('q');
//     console.log(searchText);
// if(searchText){
   

//     // Bounding box for the West Coast (approximate)
//     // Format: min longitude, min latitude, max longitude, max latitude
//     const westCoastBbox = "-124.848974,32.528832,-114.131211,49.00237";

//     const res = await fetch(
//         `${BASE_URL}${encodeURIComponent(searchText)}.json?` +
//         `bbox=${westCoastBbox}&` +
//         `language=en&` +
//         `limit=6&` +
//         `types=place,address,poi&` +
//         `access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`,
//         {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }
//     );

//     const searchResult = await res.json();
//     return NextResponse.json(searchResult);
// }
// }