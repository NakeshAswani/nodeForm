"use client"
import { Container } from "react-bootstrap";
import Header from "../common/Header";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    let [formData, setFormData] = useState({
        email:"",
        password:""
    })
    let submitForm=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/login/login-user",formData)
        .then((res)=>res.data)
        .then((finalRes)=>{
            console.log(finalRes)
            if(finalRes.findUser._id!==undefined && finalRes.findUser._id!==""){
                alert("! login successfull !")
                localStorage.setItem("userData",JSON.stringify(finalRes))
            }
            else{
                alert("! email or password not matched !")
            }
        })
    }
    return (
        <>
            <Header />
            <Container fluid className="py-5">
                <h1 className="text-capitalize text-center fw-bolder mb-5">login page</h1>
                <form className="w-50 mx-auto border border-1 border-black rounded-3 shadow-lg p-4" onSubmit={submitForm}>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={(e)=>setFormData({...formData,["email"]:e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3">
                        <label className="d-block fs-6 fw-semibold mb-2">Password</label>
                        <input type="password" name="password" value={formData.password} onChange={(e)=>setFormData({...formData,["password"]:e.target.value})} className="w-75 w-100" />
                    </div>
                    <div className="w-100 mb-3 d-flex justify-content-between align-items-center">
                        <input type="submit" value={"Login"} className="btn btn-outline-success px-4 py-2 fs-5" />
                        <input type="button" value={"ViewUser"} className="btn btn-outline-success px-4 py-2 fs-5" />
                    </div>
                </form>
            </Container>
            <Container fluid>
                <table cellPadding={10} className="table-bordered mx-auto w-75">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Password</th>
                    </tr>
                    <tr>
                        <td>nakesh aswani</td>
                        <td>nakesh270704@gmail.com</td>
                        <td>1234567890</td>
                        <td>abc</td>
                        <td>123456</td>
                        <td>123</td>
                    </tr>
                </table>
            </Container>
        </>
    );
}