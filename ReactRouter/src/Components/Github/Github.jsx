import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {

    const data = useLoaderData(githubInfoLoader)

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/vishalnaidu77')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);   
    //         setData(data)
    //     })
    // }, [])

    return (
        <>
            <div className="text-center m-4 bg-gray-600 p-4 text-white text-4xl font-bold">
                Github Followers: {data.followers}
                <img 
                    className="h-52 mx-auto my-8"
                    src={data.avatar_url} 
                    alt="Profile Image"  />
            </div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/vishalnaidu77')
    return res.json();
}