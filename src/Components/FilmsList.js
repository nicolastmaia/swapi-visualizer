import { List } from 'antd';
import axiosInstance from '../utils/customAxiosInstance';
import React, { useEffect, useState } from 'react';
import showErrorModal from '../utils/showErrorModal';
import FilmCard from './FilmCard';
import Loader from './Loader';

// componente que renderiza a lista de filmes
const FilmsList = () => {
  const [films, setFilms] = useState({
    data: [],
    loading: true,
  });

  // endpoint na SWAPI com os dados de todos os filmes Star Wars
  const resourceEndpoint = '/films';

  // função que é executada toda em toda primeira renderização do componente.
  useEffect(() => {
    // função que utiliza o axios para pegar os dados dos filmes da SWAPI
    const fetchFilms = async () => {
      const response = await axiosInstance.get(resourceEndpoint);
      return response.data.results;
    };

    // função para ordenar a lista de filmes baseado no número de episódio
    const orderFilms = (arr) => {
      const tmp = arr.sort(function (a, b) {
        return a.episode_id - b.episode_id;
      });
      return tmp;
    };

    // função que busca e salva no estado os dados buscados na SWAPi. Se der algum erro, um modal com uma mensagem de erro é mostrado.
    const saveFilmsListToState = async () => {
      try {
        const unorderedFilms = await fetchFilms();
        const orderedFilms = orderFilms(unorderedFilms);
        setFilms({ data: orderedFilms, loading: false });
      } catch (error) {
        setFilms({ data: [], loading: false });
        showErrorModal();
      }
    };

    saveFilmsListToState();
  }, []);

  const renderContent = () => {
    // retorna um ícone de carregamento enquanto o recurso buscado não estiver pronto.
    if (films.loading) return <Loader />;

    return (
      // component <List> da biblioteca antd,
      <List
        grid={{
          gutter: [32, 32],
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
          xl: 5,
          xxl: 6,
        }}
        dataSource={films.data}
        style={styles.list}
        renderItem={(film) => (
          <List.Item>
            {/* um card para cada um dos personagens que <List> encontra da dataSource indicada acima */}
            <FilmCard key={film.episode_id} film={film} />
          </List.Item>
        )}
      />
    );
  };

  const content = renderContent();

  return content;
};

export default FilmsList;

const styles = {
  list: { justifyContent: 'center' },
};
