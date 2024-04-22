import { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Menu from '../../components/menu/menu/Menu';
import Splash from '../splash/Splash';


export default function Home() {
    const [user, setUser] = useState([]);
    const [sos, setSos] = useState();
    // const [id, setId] = useState();
  console.log("dato sos",sos)

    const idUser = () => {

      const userId = localStorage.getItem("userId")

        getUserbyId(userId);
        console.log("dentro",userId)
    }

    const idSosContact = () => {
        const userSosContactId = localStorage.getItem("idSos")
        getSosContactbyId(userSosContactId)
    }

    const getUserbyId = async (id) => {
        const data = await axios.get(`https://node-basic-wheat.vercel.app/user/${id}`)
        
        setUser(data)
             
    }

    const getSosContactbyId = async (id) => {

        const data = await axios.get(`https://node-basic-wheat.vercel.app/sosContact/${id}`)
        console.log("sosContact",data)
         setSos(data.data.data.numberPhone)
    }
        
    const handleCall = () => {
    const phoneNumber = sos;
     window.location.href = `tel:${phoneNumber}`;
  };
  
 
          
    useEffect(() => {
        idSosContact();
        idUser();
        getSosContactbyId();
      
    }, []);
  
  

  console.log(user)

  return (
    
      <div className='home-container'>
          <div className='home-profile'>
              <div className='photo-profile'>
                <img src={user.data?.data.coverImage} alt='profile'></img>  
              </div>
                 <h2 className='name-profile'>Hello, {user.data?.data.name}</h2>  
          </div>
          
          <div className='home-buttons'>
           <Link to="/scanner" className='enlace'><div className='scan-button'>
                  <span className="material-symbols-outlined">qr_code_scanner</span>
                  <h2 className='enlaces'>Scan</h2>
                  
          </div></Link>
           <div className='search-button'>
            <Link to="/buscar" className='enlace'>
              <span className="material-symbols-outlined">search</span>
              <h2>Search</h2>
            </Link>
                  
              </div>

              <div className='sos-button' onClick={handleCall} >
                <a className='sosbutton'  href={`tel:${sos}`}>
                <span className="material-symbols-outlined">sos</span>
                <h2 className='enlaces'>SOS</h2>
                </a>
              </div> 
            <Link to="/diary" className='enlace'><div className='diary-button'>
                  <span className="material-symbols-outlined">menu_book</span>
                  <h2>Diary</h2>
                  
              </div></Link>
          </div>
          

      <Menu></Menu>
      </div>
      
    )
}
