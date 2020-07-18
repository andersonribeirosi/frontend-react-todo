import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

import * as Style from './styles';

export default function Home() {
  const [filterActived, setFilterActived] = useState('today');
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
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Style.Content>
      <Footer />
    </Style.Container>
  );
}
