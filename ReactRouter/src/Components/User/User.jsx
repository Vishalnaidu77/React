import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
    const {userid} = useParams()
    return (
        <>
            <h1 className="text-center text-3xl font-medium bg-gray-500 text-white py-8">User: {userid}</h1>
        </>
    )
}