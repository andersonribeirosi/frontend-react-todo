import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

import api from '../../services/api';

import * as Style from './styles';

export default function Home() {
  const [filterActived, setFilterActived] = useState('all');

  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/25:60:f5:08:12`)
      .then((response) => {
        setTasks(response.data);
        console.log(response.data);
      });
  }

  useEffect(() => {
    loadTasks();
  }, [filterActived]);

  return (
    <Style.Container>
      <Header />
      <Style.FilterArea>
        <div className="centerButton">
          <button type="button" onClick={() => setFilterActived('all')}>
            <FilterCard title="Todos" actived={filterActived === 'all'} />
          </button>
          <button type="button" onClick={() => setFilterActived('today')}>
            <FilterCard title="Dia" actived={filterActived === 'today'} />
          </button>
          <button type="button" onClick={() => setFilterActived('week')}>
            <FilterCard title="Semana" actived={filterActived === 'week'} />
          </button>
          <button type="button" onClick={() => setFilterActived('month')}>
            <FilterCard title="Mês" actived={filterActived === 'month'} />
          </button>
          <button type="button" onClick={() => setFilterActived('year')}>
            <FilterCard title="Ano" actived={filterActived === 'year'} />
          </button>
        </div>
      </Style.FilterArea>

      <Style.Title>
        <h3>TAREFAS</h3>
      </Style.Title>

      <Style.Content>
        {tasks.map((t) => (
          <TaskCard title={t.title} type={t.type} when={t.when} />
        ))}
      </Style.Content>
      <Footer />
    </Style.Container>
  );
}
