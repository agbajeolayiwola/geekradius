import React from "react";
import Slider from "../../components/spaces/slider";
import Frank from "../../components/home/Frank.";
import Playvideo from "../../components/spaces/Playvideo";
import styles from '../../styles/pages/home/home.module.css'
import BookSpaceBtn from "../../components/spaces/bookspacebtn";
import Image from 'next/image'



const HomeMain =()=>{

    return (
    <div>
        <div className={styles.PionneringMain}>
            <div>
                <div>
                    <p>We're Pioneering <span className={styles.creative}>Creative-Tech</span></p>
                    <p className={styles.mainP}>We’re realising, articulating, capturing and exchanging value</p>
                </div>
                <div className={styles.seeHow}>
                    <p>SEE HOW</p>
                </div>
            </div>
            <div>
                <Frank/>
            </div>
        </div>


        <div className={styles.PionneringMain}>
            <div>
                <div>
                    <p className={styles.spaceP}>HOW</p>
                    <p className={styles.youMay}>You may ask?</p>
                    <p className={styles.mainP}>We’re realising, articulating, capturing and exchanging value</p>
                </div>
                <div className={styles.seeHow}>
                    <p>SEE HOW</p>
                </div>
            </div>
            <div>
                <Frank/>
            </div>
        </div>



        <div className={styles.focussed}>
            <div>
                <div>
                    <img src='/homeassets/fallingVrBoy.png' 
                    className={styles.fallingBoy} />
                </div>
            </div>
            <div className={styles.secondImg}>
            <img src='/homeassets/sleepingwoman.png' 
             className={styles.sleepWoman} />
            </div>
        </div>



        <div className={styles.spaceMain}>
            <div>
                <Playvideo height='550' width='550'/>
            </div>
            <div>
                <div>
                    <p className={styles.spaceP}>Spaces</p>
                    <Slider/>
                </div>
                    <BookSpaceBtn/>
            </div>
        </div>
    </div>
    )
}
export default HomeMain