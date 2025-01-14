import React from 'react';

export const Attractions = () => {
  const attractions = [
    { 
      name: "Darbhanga Fort", 
      description: "Historical fort complex with stunning architecture",
      image: "https://hblimg.mmtcdn.com/content/hubble/img/darbhanga_imgs/mmt/activities/m_Darbhanga_fort_3_l_358_640.jpg?im=Resize=(288,162)"
    },
    { 
      name: "Chandradhari Museum", 
      description: "Houses rare artifacts and manuscripts from the Mithila region",
      image: "https://hblimg.mmtcdn.com/content/hubble/img/darbhanga_imgs/mmt/activities/m_Chandradhari_museum_3_l_415_640.jpg?im=Resize=(288,162)"
    },
    { 
      name: "Shyama Temple", 
      description: "Beautiful temple dedicated to Goddess Kali, known for its intricate carvings",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1W8VhN8aoiou1fUmS0n7nEPtJG7TC8SCEDA&s"
    },
    { 
      name: "Darbhanga Lake", 
      description: "Picturesque lake for boating and relaxation, surrounded by lush greenery",
      image: "https://www.shutterstock.com/image-photo/lalit-narayan-mithila-university-known-260nw-2016668480.jpg"
    },
  ];

  return (
    <section id="attractions" className="attractions">
      <div className="container">
        <h2>Top Attractions</h2>
        <div className="grid">
          {attractions.map((attraction, index) => (
            <div key={index} className="card">
              <img src={attraction.image} alt={attraction.name} />
              <h3>{attraction.name}</h3>
              <p>{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
