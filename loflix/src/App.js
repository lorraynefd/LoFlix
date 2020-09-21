import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import './App.css';
import Header from '../src/components/Header'
import FeaturedMovied from '../src/components/FeaturedMovied';
import MovieRow from '../src/components/MovieRow';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      //pegando lista geral
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //pegando o featured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }
    loadAll();
  }, []);
  useEffect(() => {
    const scrpuListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrpuListener);
    return () => {
      window.removeEventListener('scroll', scrpuListener);
    }
  }, [])


  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovied item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com amor pela lorrayne <br />
        Direitos de imagens para a Netflix <br />
        Dados pegos no site Themoviedb.org
      </footer>
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.pinimg.com/originals/f9/0f/76/f90f7689233948005f465d98ead56d44.gif" alt="Carregando" />
        </div>
      }
    </div>
  );
}
