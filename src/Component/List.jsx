import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Password from './Password'
import { passwordContext } from '../context/context'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import edit from '/edit.svg'
import dele from '/delete.svg'

const List = () => {
    const [passwordArray, setpasswordArray] = useState([])
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const item1 = useContext(passwordContext)

    useEffect(() => {
        let passwords = localStorage.getItem("password")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))

        }
    }, [])

    const editPassword = (id) => {
        item1.setItem(id)

    }

    const deletemassage = ()=>{
        toast.info(' Delete Sucessfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    
      }

    const deletePassword = (id) => {
        deletemassage()
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div className='bg-[#e8f6f9]'>
                <div className='flex'>
                    <div className='w-1/5 h-dvh bg-[#001C27]'>
                        <Navbar />
                    </div>

                    <div className='w-4/5 h-dvh '>
                        <div className='flex flex-col items-center '>
                            <div className='mt-5 text-3xl font-medium'>Password List</div>

                            <div className='h-[70vh] mt-20 overflow-auto'>

                                {passwordArray.length === 0 && <div> no passwords</div>}
                                {passwordArray.length != 0 && <table className='py-5  rounded-[15px]  w-[70vw] table-auto bg-[#ededed]'>
                                    <thead className=''>
                                        <tr className=''>
                                            <th className='py-8 '>Username</th>
                                            <th className='py-8'>Email</th>
                                            <th className='py-8'>Password</th>
                                            <th className='py-8'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className=' bg-[#ffffff] '>
                                        {passwordArray.map((item, index) => {
                                            return <tr key={index} >
                                                <td className='py-3 text-center '>{item.username}</td>
                                                <td className='py-3 text-center cursor-pointer'><a href={item.site} target='_blank'>{item.site}</a></td>
                                                <td className='py-3 text-center'>{item.password}</td>
                                                <td className='py-3 text-center'>
                                                    <Link to="/Create-password">
                                                        <button className='cursor-pointer mx-3' onClick={() => { editPassword(item.id) }}><img src={edit} alt="" /></button>
                                                    </Link>
                                                    <button className='cursor-pointer mx-3' onClick={() => { deletePassword(item.id) }} ><img src={dele} alt="" /></button></td>

                                            </tr>
                                        })}

                                    </tbody>
                                </table>}
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default List
