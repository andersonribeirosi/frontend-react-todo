import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as Style from './styles';
import FilterCard from '../../components/FilterCard';

export default class Home extends Component {
  render() {
    return (
      <Style.Container>
        <Header />
        <Style.FilterArea>
          <FilterCard title="Todos" actived={false} />
          <FilterCard title="Dia" actived={true} />
          <FilterCard title="Semana" actived={false} />
          <FilterCard title="Mês" actived={false} />
          <FilterCard title="Ano" actived={false} />
        </Style.FilterArea>
        <Footer />
      </Style.Container>
    );
  }
}
