"use client"
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    let [formData, setFormData] = useState({
        Name:"",
        email:"",
        phone:"",
        address:"",
        pincode:"",
        password:""
    })
    let userRegister=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/register/register-user",formData)
        .then((res)=>res.data)
        .then((finalRes)=>{
            console.log(finalRes)
            if(finalRes.keyPattern==undefined){
                alert("! registration successfull !")
            }
            else{
                alert("! email or phone already exist !")
            }
        })
    }
    return (
        <>
            <Header />
            <Container fluid className="py-5">
                <h1 className="text-capitalize text-center fw-bolder mb-5">register page</h1>
                <form className="w-50 mx-auto border border-1 border-black rounded-3 shadow-lg p-4" onSubmit={userRegister}>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Full Name</label>
                        <input type="text" name="Name" value={formData.Name} onChange={(e)=>setFormData({...formData,["Name"]:e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={(e)=>setFormData({...formData,["email"]:e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Phone</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={(e)=>setFormData({...formData,["phone"]:e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Address</label>
                        <input className="w-100" name="address" value={formData.address} onChange={(e)=>setFormData({...formData,["address"]:e.target.value})} />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Pincode</label>
                        <input className="w-100" name="pincode" value={formData.pincode} onChange={(e)=>setFormData({...formData,["pincode"]:e.target.value})} />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={(e)=>setFormData({...formData,["password"]:e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <input type="submit" value={"Register"} className="btn btn-outline-success px-4 py-2 d-block mx-auto fs-5" />
                    </div>
                </form>
            </Container>
        </>
    );
}