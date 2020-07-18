import React from 'react';
import * as Style from '../FilterCard/styles';
import filter from '../../assets/filterToDo.svg';

export default function FilterCard({ title, actived }) {
  return (
    <Style.Container actived={actived}>
      <img src={filter} alt="" />
      <span>{title}</span>
    </Style.Container>
  );
}
