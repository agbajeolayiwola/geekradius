import React, {useState} from "react";
import styles from '../../styles/pages/spaces/carousel.module.css'
import Link from 'next/link'
import BookSpaceBtn from "./bookspacebtn";


const Carousel = (props) =>{

  //current carrouse in view state
  const [current, setCurrent] =useState(0)
  const [currentDot, setCurrentDot] =useState(false)

  //slider content passed in as props from slider.js
  const length = props.sliderConts.length
//next slide function
  const nextSlide =()=>{
    setCurrent(current === length - 1 ? 0 : current+1)
    setCurrentDot()
  };

  if(!Array.isArray(props.sliderConts)|| props.sliderConts.length <= 0){
    return null
  }

    return (
      <div className={styles.spacecontainer}>
      <div className={styles.containerSlider}>
        {/* map the contnets for dispaly */}
          {props.sliderConts.map((slidercontent, index)=>{
                {return (
                <div key={index} style={{color:'white'}}
                className={styles.content}>
                  
                    <div className={index === current ? styles.slide : styles.active}>
                      {index ===current &&(
                      <div>
                      <div><h2 className={styles.title}>{slidercontent.title}</h2></div>
                      <div><p className={styles.content}>{slidercontent.content}</p></div>
                      </div>
                      )}
                    </div> 
                </div>
 
                
                )}
            })}
          </div>
        <div className={styles.control}>
        <div className={styles.nextSlide}>
          <div className={styles.current}>
            {/* not the ideal way to do it will refactor later */}
            <div
             className={current === 0?styles.Acticecurrent:styles.inActivecurrent}></div>
            <div
            className={current === 1?styles.Acticecurrent:styles.inActivecurrent}></div>
            <div
            className={current === 2?styles.Acticecurrent:styles.inActivecurrent}></div>
          </div>
          <div>
            <div  onClick={nextSlide} 
            className={styles.nextBtn}>
              <div className={styles.next}></div>
            </div>
          </div>

        </div>
        <BookSpaceBtn/>
        </div>
        </div>
      )
}

export default Carousel