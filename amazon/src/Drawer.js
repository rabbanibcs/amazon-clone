import {Drawer as MyDrawer} from '@material-ui/core';
import React,{useEffect,useState} from 'react'
import { Link} from "react-router-dom";
import axios from 'axios';
import './css/Drawer.css'
import { Avatar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export default function Drawer({open,controlDrawer}) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/categories/')
            .then(res=>setCategories(res.data))
            .catch((err)=>console.log(err));
        // console.log(categories);

        
    },[])
    return (
        <div>
            <MyDrawer anchor='left' open={open}>
            <div className='drawer'>
    
            <div onClick={controlDrawer} className='drawer__cross'><CloseIcon style={{fontSize:40,}}/></div>

                <div className='drawer__header'>
                    <Avatar  style={{ height: '30px', width: '30px' }}/><h4>Hello, Sign in</h4>
                </div>
                <div className='drawer__inner'>
                <h6>Shop By Department</h6>
                    {categories.map((value)=>(
                        <Link key={value.id} onClick={controlDrawer} className='drawer__link' to={`/products/${value.id}`}><p>{value.title}</p></Link>
                    ))}
                </div>
                
            </div>
            </MyDrawer> 
        </div>
    )
}

