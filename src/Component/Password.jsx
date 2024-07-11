import React, { useContext, useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import image from '/image 1.png'
import { v4 as uuidv4 } from 'uuid';
import { passwordContext } from '../context/context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Password = () => {
  const ref = useRef()
  const passref = useRef()
  const [form, setform] = useState({ site: "", username: "", password: "" })
  const [passwordArray, setpasswordArray] = useState([])
  const passitem = useContext(passwordContext)


  useEffect(() => {
    let passwords = localStorage.getItem("password")
    if (passwords) {
      setpasswordArray(JSON.parse(passwords))
    }
  }, [])

  useEffect(() => {
    editPassword()
  }, [passitem.item])

  const editPassword = () => {
    let pass = passitem.item
    let passwords = localStorage.getItem("password")

    if (passwords && pass != undefined) {
      try {
        let key = JSON.parse(passwords)
        let filteredPasswords = key.filter(i => i.id === pass);
        setform(filteredPasswords[0])

      } catch (e) {
        console.log(e)
      }
    }
  }

  const showPassword = () => {
    if (ref.current.src.includes('/eye.svg')) {
      ref.current.src = "/mdi_hide.svg"
      passref.current.type = "password"
    } else {
      ref.current.src = '/eye.svg'
      passref.current.type = "text"
    }
  }

  const deletePassword = () => {
    let pass = passitem.item
    let passwords = localStorage.getItem("password")
    let key = JSON.parse(passwords)
    localStorage.setItem("password", JSON.stringify(key.filter(item => item.id !== passitem.item)))
  }

  const savePassword = () => {
    savemassage()
    setpasswordArray([...passwordArray, { ...form, id: uuidv4() }])
    localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
    setform({ site: "", username: "", password: "" })
    deletePassword()
  }

  const savemassage = () => {
    toast('🦄 Save Sucessfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className='lg:w-full w-[766px] lg:h-full h-[1580px] bg-[#e8f6f9]'>
        <div className='flex lg:flex-row flex-col'>
          <div className=' lg:w-1/5 w-full lg:h-dvh bg-[#001C27]'>
            <Navbar />
          </div>

          <div className='lg:w-[80%] sm:w-[full] h-dvh flex '>
            <div className='mx-auto '>
              <img className='mt-16 mx-auto w-[400px] :w-[150px] lg:w-[300px]' src={image} alt="" />
              <div className='mx-[200px] mt-5 text-[20px] font-semibold tracking-widest '>Your own password manager</div>

              <input value={form.site} onChange={handleChange} name='site' className='focus:outline-none border-2 border-[#E6E6E6] focus:border-[#64C4FF]  bg-[#d9f1ff] px-5 my-5 py-2 lg:w-[700px] w-[100%] rounded-[30px]' type="text" placeholder='Enter website URL' />

              <div className='flex lg:flex-row flex-col justify-between mb-5 items-center w-[500px] lg:w-[100%]'>
                <input value={form.username} onChange={handleChange} name='username' className='focus:outline-none border-2 border-[#E6E6E6] focus:border-[#64C4FF] bg-[#d9f1ff] px-5 py-2 w-[250px] lg:w-[340px] rounded-[30px]' type="text" placeholder='Enter Username' />
                <input ref={passref} type="password" value={form.password} onChange={handleChange} name='password' className='focus:outline-none border-2 border-[#E6E6E6] focus:border-[#64C4FF] bg-[#d9f1ff] px-5 py-2 w-[250px] lg:w-[340px] rounded-[30px]' placeholder='Enter Password' /><span onClick={showPassword}><img ref={ref} className='cursor-pointer -ml-16 -mt-2 absolute' src="/mdi_hide.svg" alt="" /></span>
              </div>
              <button type="button" onClick={savePassword} className='delay-150 transition ease-in-out  hover:-translate-y-1 hover:scale-110 hover:form-[#6FBAFF] hover:to-[#2a7bf4]  tracking-widest  p-2 px-14 rounded-[30px] font-semibold mx-[41%] bg-gradient-to-r from-[#6FCBFF] to-[#00A3FF] text-white '>Save</button>

            </div>
            <div>

            </div>
          </div>
        </div>
      </div></>
  )
}

export default Password
