import React, { useState, useEffect } from 'react';

const ImageSlider = [
  { img_url: "https://cdn.guidetour.in/wp-content/uploads/2023/05/Darbhanga-Tourist-Places.jpg.webp" },
  { img_url: "https://www.shutterstock.com/image-photo/campus-lalit-narayan-mithila-university-600nw-2016668045.jpg" },
  { img_url: "https://c8.alamy.com/comp/2E3MPXM/main-entrance-gate-of-darbhanga-fort-from-university-side-darbhanga-bihar-india-2E3MPXM.jpg" },
  { img_url: "https://www.researchgate.net/publication/380294999/figure/fig1/AS:11431281240324953@1714719173828/Darbhanga-Fort-Darbhanga-Bihar.png" },
  { img_url: "https://i.ytimg.com/vi/r8K1PxofctY/sddefault.jpg"},
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 5);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on cleanup
  }, []);

  return (
    <section className="carousel">
      <div
        className="carousel-images-wrapper"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {ImageSlider.map((slide, index) => {
          return (
            <div className="carousel-image" key={index}>
              <img src={slide.img_url} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
