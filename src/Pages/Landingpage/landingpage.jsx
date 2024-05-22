import SwiperComponent from "../../Components/Common/Swiper/swiper";
import Hero from "../../Components/Herosection/hero";
import styles from "./landingpage.module.css";
import group11 from "../../Assest/image 1.png";
import group10 from "../../Assest/Group 10.png";
import grid1 from "../../Assest/grid1.png";
import grid2 from "../../Assest/grid2.png";
import grid3 from "../../Assest/grid3.png";
import grid4 from "../../Assest/grid4.png";
import grid5 from "../../Assest/grid5.png";
import grid6 from "../../Assest/grid6.png";
import grid7 from "../../Assest/grid7.png";
import grid8 from "../../Assest/grid8.png";
import Button from "../../Components/Button/button";
import doc1 from "../../Assest/doc1.png";
import doc2 from "../../Assest/doc2.png";
import doc3 from "../../Assest/doc3.png";
import info from "../../Assest/caring.png";
import blog from "../../Assest/blog.png";
import blogimg from "../../Assest/blogimg.png";
import Footer from "../../Components/Common/Footer/footer";
import { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";



export default function Landingpage() {

  const images = [group10, group11, group10, group11];
  const gridimages = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8];
  const Doctorsimg = [doc1, doc2, doc3, doc1, doc2];



  return (
    <div className={styles.landing}>
      <Navbar/>
      <Hero />
      <SwiperComponent images={images} spaceBetween={30} slidesPerView={3} />

      <div className={styles.special}>
        <p className={styles.para}>Find by specialisation</p>

        <div className={styles.grid}>
          {gridimages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`grid ${index + 1}`}
              className={styles.gridimages}
            />
          ))}
        </div>
        <Button>View all</Button>
      </div>

      <div className={styles.doctorswiper}>
        <p className={styles.docp}>Our Medical Specialist</p>
        <SwiperComponent
          images={Doctorsimg}
          slidesPerView={4}
          style="doctorslides"
          container="swiperbox"
        />
      </div>

      <div className={styles.info}>
        <img src={info} alt="logo" />
      </div>

      <div className={styles.news}>
        <img src={blog} alt="logo" />
      </div>

      <div className={styles.blog}>
        <div className={styles.blogcontainer}>
          <div className={styles.bloginfo}>
            <h5>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
            <h4>Our Families</h4>
            <p>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </div>

          <div className={styles.blogimg}>
            <img src={blogimg} alt="blog" />
          </div>
        </div>
      </div>
      
      {/* Accodian */}
      
      <Footer/>
    </div>
  );
}
