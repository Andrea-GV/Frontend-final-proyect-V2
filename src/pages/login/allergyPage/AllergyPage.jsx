import React, { useEffect, useState } from 'react'
import './allergyPage.css'
import axios from 'axios'
import Bttn_Back from '../../../components/bttns/bttn_Back/Bttn_Back';
import { useNavigate } from 'react-router-dom';
import { get } from 'jquery';


export default function AllergyPage() {

  const [allergies, setAllergies] = useState([]);

  const [arrAllergies, setArrAllergies] = useState([]);

  console.log(arrAllergies);

  const dataUser = JSON.parse(localStorage.getItem('userDataString'));

  const dataContactSOS = JSON.parse(localStorage.getItem('contactSOSDataString'));

  const navigate = useNavigate();


  const getAllAllergy = async () => {

    axios.get(`https://node-basic-wheat.vercel.app/allergy`)
      .then(res => setAllergies(res.data.data))

  }

  const createUser = async () => {


    const SOSdataContact = await
      axios.post(`https://node-basic-wheat.vercel.app/sosContact/register`, dataContactSOS);

    const idSosContact = SOSdataContact.data.data._id;

    Object.defineProperties(dataUser, {
      sosContact: {
        value: idSosContact,
        writable: true,
        enumerable: true,
        configurable: true
      },
      allergy: {
        value: arrAllergies,
        writable: true,
        enumerable: true,
        configurable: true
      }
    })

    await axios.post("https://node-basic-wheat.vercel.app/user/register", dataUser)

    navigate("/login");

  }


  const handleAllergy = (element) => {

    const arrData = [...arrAllergies];

    arrData.push(element.target.title);

    setArrAllergies(arrData);

    console.log(element.target.className);
    element.target.classList.add("selected")

  }






  const reset = () => {

    //console.log("dentro", arrAllergies);
    const delet = arrAllergies.splice(0, arrAllergies.length)
    //console.log("boor", delet);
    // console.log("segunda", arrAllergies);
    //console.log("etnro");
    setArrAllergies(arrAllergies)

    const allSelect = document.querySelectorAll('.allergy');

    for (let item of allSelect) {
      console.log(allSelect);
      item.classList.remove("selected")
    }
  }


  useEffect(() => {

    getAllAllergy()

  }, []);


  // console.log(users)
  return (
    <>
      <div className='allergies-body'>
        <div className='w-100 pb-3'>
          <Bttn_Back />
        </div>

        <div className='text-h1'>
          <h1>Confirma tu selección</h1>
        </div>

        <div className="text-p">
          <p>Los elementos marcados serán identificados en tus búsquedas
            como <strong>peligrosos</strong></p>
        </div>


        <div className='allergies-buttons'>
          {allergies.map((allergy, index) => (

            <button
              className='allergy'
              key={index}
              onClick={(e) => handleAllergy(e)}
              title={allergy._id}
            >{allergy.name}

              {/* <img src={`IMG/` + allergy.image} alt={allergy.name}></img> */}
            </button>))}

        </div>

        <button
          className='confirmation-button'
          onClick={() => reset()}>Reset</button>

        <button
          className='confirmation-button'
          onClick={createUser}
        >
          Confirmar
        </button>

      </div>
    </>

  )
}