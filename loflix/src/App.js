import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import FeaturedMovied from '../src/components/FeaturedMovied';
import MovieRow from '../src/components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  useEffect(() => {
    const loadAll = async () => {
      //pegando lista geral
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
    }
    loadAll();
  }, []);

  return (
    <div className="page">
      {featuredData &&
        <FeaturedMovied item={featuredData}/>
      }
      <section className="lists">
      {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
}
