import Button from "../Button/button"
import styles from "./hero.module.css"
import heroimg  from "../../Assest/heroimg.png"
import Searchbox from "../Search/search"

export default function Hero()
{


    return(
        <div className={styles.hero}>

             <div className={styles.section}>

                   <div className={styles.herotext}>
                          <p className={styles.text1}>Skip the travel! Find Online </p>
                          <span >Medical</span>
                          <span className={styles.span2}>Centers</span>
                          
                          <p className={styles.connecttxt}>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
                          <Button style="secondary">Find Centers</Button>
                   </div>  

                   <div className={styles.heroimg}>
                      <img src={heroimg}/>
                   </div>
                   
                  
             </div>

             <Searchbox />
                   
             
        </div>


    )
}