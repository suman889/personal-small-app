import React, { useState, useRef } from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import ctl from "@netlify/classnames-template-literals";

const Login = () => {

    const [show, setShow] = useState(false)
    const symbolRef = useRef(null);
    const upperCaseRef = useRef(null);
    const latinRef = useRef(null);

    const defaultStyle = {
        color: "black",
      };

    const valid = (item, v_icon,) => {
        let validIcon = document.querySelector(`#${v_icon}`)
        validIcon.style.color = "red"
    }

    const invalid = (item, v_icon) => {
        // let text = document.querySelector(`#${item}`);
        // text.style.color = "green";
        let inValidIcon = document.querySelector(`${v_icon}`)
        inValidIcon.style.color = "black"
    }



    const handleInputChange = e => {
        const text = e.target.value;
        if (text.match(/[A-Z]/) != null) {
            valid("upperCase", "checkIcon_upper",)
        }else if (!text){
            document.querySelector(`#checkIcon_upper`).style = defaultStyle;
        }
        if (text.match(/[a-z]/) != null) {
            valid("lowerCase", "lowerIcon")
        }
        else if (!text){
            document.querySelector(`#lowerIcon`).style = defaultStyle;
        }
        if (text.match(/[0-9]/) != null) {
            valid("number", "numIcon")
        }
        if (text.match(/[!@#$%^&*()]/) != null) {
            valid("symbol", "checkIcon_one")
        }
        if (text.match(/[a-zà-ÿ]/) != null) {
            valid("litinCase", "checkIcon_latin")
        }
        if (text.length > 7) {
            valid("8Char", 'eight_CharIcon')
        }

    }

    const showHide = () => {
        setShow(!show)
    }


    return (
        <>
            <from className="p-4 max-w-md mx-auto bg-white border-t-8 border-indigo-700 mt-10 rounded">
                <h1 className="font-medium text-3xl text-center py-4 text-gray-800">Sign in to App</h1>

                <label className="font-medium block mb-1 mt-6 text-gray-700" for="username">
                    Username or Email
                </label>
                <input className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight 
                border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-70
                 focus:bg-white text-gray-700 pr-16 font-mono"
                    id="username"
                    type="text"
                    autoComplete="off"
                    autofocus />

                <label className="font-medium block mb-1 mt-6 text-gray-700" for="username">
                    Password
                </label>
                <div className="flex relative">

                    <input
                        type={show ? "text" : "password"}
                        className={inputBox}
                        placeholder="enter your password"
                        onChange={handleInputChange}
                    />
                    <IoEyeOutline id="show_hide" onClick={showHide} className="cursor-pointer absolute right-4 top-4" />
                </div>

                <div className="flex">
                    <div className="p-4">
                        <p id="number" className="flex">
                            <FaCheck id="numIcon" size={18} />
                            <span>One Number</span>
                        </p>
                        <p id="lowerCase" className="flex">
                            <FaCheck id="lowerIcon" size={18} />
                            <span>One Lowercase letter</span>
                        </p>
                        <p id="8Char" className="flex">
                            <FaCheck id="eight_CharIcon" size={18} />
                            <span>Use 8-50 characters</span>
                        </p>
                    </div>
                    {/* ###### */}
                    <div className="p-4">
                        <p id="symbol" className="flex">
                            <FaCheck id='checkIcon_one' size={18} ref={symbolRef} />
                            <span>One Symbol</span>
                        </p>
                        <p id="upperCase" className="flex">
                            <FaCheck id='checkIcon_upper' size={18} ref={upperCaseRef} />
                            <span>One uppercase letter</span>
                        </p>
                        <p id="litinCase" className="flex">
                            <FaCheck id='checkIcon_latin' size={18} ref={latinRef} />
                            <span>Only Latin lettrs</span>
                        </p>
                    </div>
                </div>
            </from>
        </>
    )
}

const inputBox = ctl(`
appearance-none 
border-2 rounded 
w-full py-3 px-3 

border-gray-300 
bg-gray-100 
focus:outline-none focus:border-indigo-700 
focus:bg-white 
text-gray-700 pr-16 
font-mono 

`)

const checkIcon = ctl(`
fill-green-800
`)
export default Login