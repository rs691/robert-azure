import horizontal from '/horizontal.png'
import logo from '/logo.png'

// import screen from '/screen.svg'
import ImgSVG from "./ImgSVG.jsx";
import icon from '/linkedIn.svg'
import styles from './AddedNav.module.css';





function Education() {
  return (
    <>
    <div>
    <div className={styles.content}>
       <h1>Education</h1>
     </div>
        <a href="https://www.iwcc.edu/" target="_blank">
          <img src={logo} className="logo" alt="pirate logo" />
        </a>
        <a href="https://www.iwcc.edu/" target="_blank">
          <img src={horizontal} className="belle" alt="bellevue logo" />
        </a>
        <div className={styles.background} />
        <ImgSVG />
  
      </div>
     <svg src={icon} className="icon" alt="linkedIn icon" />
      <ImgSVG />
     </>
  )
}

export default Education
