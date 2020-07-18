import React from 'react';
import * as Style from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

export default function Header({ lateCount, clickNotification }) {
  return (
    <Style.Container>
      <Style.LeftSide>
        <img src={logo} alt="" />
      </Style.LeftSide>
      <Style.RightSide>
        <a href="#">INÍCIO</a>
        <span className="dividir"></span>
        <a href="#">NOVA TAREFA</a>
        <span className="dividir"></span>
        <a href="#">SINCRONIZAR CELULAR</a>
        <span className="dividir"></span>
        <a href="#" id="notification" onClick={clickNotification}>
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </a>
      </Style.RightSide>
    </Style.Container>
  );
}
