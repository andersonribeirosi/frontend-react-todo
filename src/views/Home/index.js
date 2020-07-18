import React, { useState, useEffect, useMemo } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

import api from '../../services/api';

import * as Style from './styles';

export default function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [lateCount, setLateCount] = useState();

  const [task, setTask] = useState([]);

  async function loadTasks() {
    await api
      .get(`/task/filter/${filterActived}/25:60:f5:08:12`)
      .then((response) => {
        setTask(response.data);
      });
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/25:60:f5:08:12`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  function Notification() {
    setFilterActived('late');
  }

  //É inicializado sempre que a página é carregada(trazendo todas tarefas por default - all)
  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived]);

  return (
    <Style.Container>
      <Header lateCount={lateCount} clickNotification={Notification} />
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
        <h3>{filterActived == 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </Style.Title>

      <Style.Content>
        {task.map((t) => (
          <TaskCard title={t.title} type={t.type} when={t.when} />
        ))}
      </Style.Content>
      <Footer />
    </Style.Container>
  );
}
