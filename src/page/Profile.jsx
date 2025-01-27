import React from "react";
import { authRedirect } from "../auth/authRedirect";

export default function Profile(){
    authRedirect();
    return(
        <div className="w-full sm:ml-16 p-4">
            <h1 className="bg-zinc-900 text-yellow-400 text-2xl p-4">Profile</h1>
        </div>
    );
}