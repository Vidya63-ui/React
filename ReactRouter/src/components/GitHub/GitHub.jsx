import React, { useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';

function GitHub() {
//   const [data, setData] = useState({});

  const data = useLoaderData();

//   useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 text-center">
     <img src={data.avatar_url} alt="GitHub Avatar" className="w-24 h-24 rounded-full shadow-md" />
     <h2 className="mt-4 text-xl font-semibold">{data.name}</h2>
     <p className="text-gray-500">@{data.login}</p>
     <p className="mt-2 text-gray-700">Followers: {data.followers} | Following: {data.following}</p>
     <a href={data.html_url} target="_blank" rel="noreferrer"
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
        View Profile
     </a>
    </div>

    // <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    //   GitHub followers: {data.followers}
    //   <img src={data.avatar_url} alt="Git_Pic" className="mx-auto mt-4 rounded-full w-32 h-32" />
    // </div>
  );
}

export default GitHub;
export const gitHubLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json();
}