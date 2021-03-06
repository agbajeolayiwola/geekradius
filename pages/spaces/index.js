import React, {useEffect} from "react";
import AudioImg from "../../components/spaces/Audio";
import BookSpaceBtn from "../../components/spaces/bookspacebtn";
import Conf from "../../components/spaces/Conf";
import Playvideo from "../../components/spaces/Playvideo";
import Reserve from "../../components/spaces/reserve";
import Slider from "../../components/spaces/slider";
import styles from '../../styles/pages/spaces/spaces.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {slider} from '../../components/data/Contentdata'
import handleViewport from 'react-in-viewport';
import Carousel from "../../components/spaces/carousel";


const Spaces = () =>{

    useEffect(() => {
        AOS.init();
      }, []);

    return(
    <div className={styles.cov}>
        <div 
        data-aos='fade-up'
        data-aos-offset='200'
        className={styles.cover}>
            <div className={styles.main}>
               
                <div className={styles.sliderCont}>
                <div>
                    <h1 className={styles.spacesH1}>Spaces</h1>
                </div>
                       <Carousel sliderConts={slider}/>
                </div>
            
                <div>
                    <Playvideo width={700} height={700}/>
                </div>
            </div>
            <div
            data-aos='fade-up'
            data-aos-offset='200'
            className={styles.visual}>
                <div className={styles.audioText}>
                    <div><h1 className={styles.visualHead}>Visual</h1></div>
                    <div><h4>REHEARSAL STUDIO</h4></div>
                    <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                </div>
                <div>
                    <Reserve price={'15,000'}/>
                </div>
            </div>


            <div 
            data-aos='fade-up'
            data-aos-offset='200'
            className={styles.photography}>
                <div className={styles.imageOuter}>
                    <Playvideo width={700} height={700}/>
                </div>
                    <div className={styles.photoTag}>
                        <div><h4 className={styles.photoHead}>PHOTOGRAPHY STUDIO</h4></div>
                        <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                        <div>
                            <Reserve price={'15,000'}/>
                        </div>
                    </div>
                </div>


                <div 
                data-aos='fade-up'
                data-aos-offset='200'
                className={styles.audioMain}>
                    <div className={styles.audioText}>
                        <div><h1 className={styles.visualHead}>Audio</h1></div>
                        <div><h4>RECORDING STUDIO</h4></div>
                        <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                        <div><Reserve price={'15,000'}/></div>
                    </div>
                    <div className={styles.audioImg}>
                        <AudioImg width={550} height={550}/>
                    </div>
                </div>


                <div 
            data-aos='fade-up'
            data-aos-offset='200'
            className={styles.conference}>
                <div className={styles.imageOuter}>
                    <Playvideo width={550} height={550}/>
                </div>
                    <div className={styles.confTag}>
                        <div><h4>CONFERENCE . PODCASTING</h4></div>
                        <div className={styles.pFont}><p>You can host your own radio show with a recording and like “the breakfast club”</p></div>
                        <div>
                            <Reserve price={'15,000'}/>
                        </div>
                </div>

            </div>


                <div 
                data-aos='fade-up'
                data-aos-offset='200'
                className={styles.coWorking}>
                    <div>
                        <div><h1 className={styles.visualHead}>CO - Working</h1></div>
                        <div className={styles.coWork}>
                            <div><h4>OPEN SEATS</h4></div>
                            <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                            <div>
                        <Reserve price={'15,000'}/>
                    </div>
                        </div>
                    </div>
                    
                </div>
            

            <div 
            data-aos='fade-up'
            data-aos-offset='200'
            className={styles.conference}>
                <div className={styles.imageOuter}>
                    <Conf width={450} height={450}/>
                </div>
                    <div className={styles.confTag}>
                        <div><h4>CONFERENCE ROOM</h4></div>
                        <div className={styles.pFont}><p>Recording spaces with a talented community of producers, song writers and artists…</p></div>
                        <div>
                            <Reserve price={'15,000'}/>
                        </div>
                    </div>

            </div>
        </div>
        </div>
    )
}

export default Spaces