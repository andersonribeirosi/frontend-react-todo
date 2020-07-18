import React from 'react';
import * as Style from './styles';
import iconDefault from '../../assets/default.png';

export default function TaskCard() {
  return (
    <Style.Container>
      <Style.TopCard>
        <img src={iconDefault} alt="" />
        <h3>Título da tarefa</h3>
      </Style.TopCard>
      <Style.BottomCard>
        <strong>17/10/2020</strong>
        <span>10:00</span>
      </Style.BottomCard>
    </Style.Container>
  );
}
