import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

import api from '../../services/api';

import * as Style from './styles';

export default function Task() {
  const [lateCount, setLateCount] = useState();

  const [task, setTask] = useState([]);

  async function lateVerify() {
    await api.get(`/task/filter/late/25:60:f5:08:12`).then((response) => {
      setLateCount(response.data.length);
    });
  }

  //É inicializado sempre que a página é carregada(trazendo todas tarefas por default - all)
  useEffect(() => {
    lateVerify();
  }, []);

  return (
    <Style.Container>
      <Header lateCount={lateCount} />

      <Style.Form>
        <Style.TypeIcons>
          {TypeIcons.map(
            (icon, index) =>
              index > 0 && <img src={icon} alt="Tipo da Tarefa" />
          )}
        </Style.TypeIcons>
      </Style.Form>
      <Footer />
    </Style.Container>
  );
}
