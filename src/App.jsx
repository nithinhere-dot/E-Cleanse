import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Nav from "./components/Nav";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import SignUp from "./page/SignUp";
import User from "./page/User";
import Business from "./page/Business";
import AI from "./page/AI";
import Profile from "./page/Profile";
import NotFound from "./page/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
    return (
        <div className="flex flex-col sm:flex-row">
            <Nav />
            <AuthProvider>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/user" element={<User />} />
                    <Route path="/business" element={<Business />} />
                    {/* <Route path="/ai" element={<AI />} /> */}
                    <Route path="/ai" element={<ProtectedRoute><AI /></ProtectedRoute>} />
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AuthProvider>
        </div>
    );
}