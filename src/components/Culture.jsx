import React from 'react';
import Img from "./Mithila.jpg"

export const Culture = () => {
  return (
    <section id="culture" className="culture">
      <div className="container">
        <h2>Culture of Darbhanga</h2>
        <div className="content">
          <div className="image">
            <img src={Img} alt="Mithila Painting" />
          </div>
          <div className="text">
            <h3>Mithila Art and Culture</h3>
            <p>Darbhanga is renowned for its Mithila (or Madhubani) art, a distinctive style of folk painting that has gained international recognition. The region is also famous for its rich literary tradition, particularly in Maithili language.</p>
            <p>The city celebrates various festivals with great enthusiasm, including Chhath Puja, Durga Puja, and Madhushravani. These events showcase the vibrant cultural heritage of the Mithila region.</p>
            <p>Darbhanga is also known for its contribution to classical music, particularly the Darbhanga Gharana, which has produced many renowned musicians over the centuries.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
