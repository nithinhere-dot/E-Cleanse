import React from "react";
import ChatBox from "../components/ChatBox";
// import AuthContext  from "../context/AuthContext";

export default function AI(){
    // AuthContext();
    return(
        <div className="w-full sm:ml-16 p-2 pb-16 sm:p-2 h-screen">
            {/* <h1 className="bg-zinc-900 text-yellow-400 text-2xl p-4">AI</h1> */}
            <ChatBox/>
        </div>
    );
}