import React, { useEffect, useState } from 'react';
import './FeaturedMovied.css';
import db from "../config/Firebase";

export default ({ item }) => {

  const [filmes, setFilmes] = useState([]);

  console.log('filmes', filmes);
  useEffect(() => {
    db.collection('filme')
      .onSnapshot(snapshot => {
        setFilmes(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      })
  }, [])

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }
  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }
  return (
    <> 
    { filmes.map((filme) => (
        <section className="featured" style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${filme.data.img})`
        }}>
          <div className="featured--vertical">
            <div className="featured--horizontal">
              <div className="featured--name">{filme.data.nome}</div>
              <div className="featured--info">
                <div className="featured--points">{filme.data.nota} pontos</div>
                <div className="featured--year">{filme.data.ano}</div>
                <div className="featured--seasons">{filme.data.tmp} temporada{filme.data.tmp !== 1 ? 's' : ''}</div>
              </div>
              <div className="featured--description">{filme.data.desc}</div>
              <div className="featured--buttons">
                <a href={filme.data.link} className="featured--watchbutton">Assistir</a>
                <a href={filme.data.traller} className="featured--mylistbutton">Traller</a>
              </div>
              <div className="featured--genres"><strong>Gêneros: </strong>{filme.data.genero.join(', ')}</div>
            </div>
          </div>
        </section>
      ))
    }
</>
  );
}
