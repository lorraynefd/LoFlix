import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from '../src/components/MovieRow'

export default () => {

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      //pegando lista geral
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }
    loadAll();
  }, []);
  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow />
        ))}
      </section>
    </div>
  );
}
