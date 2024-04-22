import './onBoarding.css'
import SlidesOnBoard from '../../components/slides/SlidesOnBoard/SlidesOnBoard'
// import Btn_home from "../../components/bttns/btn_home/Btn_home"
import { Link } from 'react-router-dom'

export default function OnBoarding() {

  return (

    <div>
      <section className='onBoardingContainer'>
        <SlidesOnBoard></SlidesOnBoard>
      </section>
      <Link className='a' to="/register"><button className='home-butt' >Siguiente</button></Link>
      
    </div>
  )
}
