// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// import styled from 'styled-components';

// import StarwarsCard from './StarwarsCard';

// export default function StarwarsList() {
//     const [names, setNames] = useState();

//     useEffect(() => {
//         axios
//             .get('https://swapi.co/api/people/')
//             .then(data => {
//                 const PrimeName = data.data
//                 console.log(PrimeName)
//                 setNames(PrimeName);

//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }, []);
//     return (
//         <div> <StarwarsCard characterName={names} />
//         </div>
//     );
// }


