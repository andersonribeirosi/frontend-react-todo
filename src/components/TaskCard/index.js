import React, { useMemo } from 'react';
import * as Style from './styles';
import iconDefault from '../../assets/default.png';
import { format } from 'date-fns';

import typeIcons from '../../utils/typeIcons';

export default function TaskCard({ type, title, when }) {
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy'));
  const hour = useMemo(() => format(new Date(when), 'HH:mm'));
  return (
    <Style.Container>
      <Style.TopCard>
        <img src={typeIcons[type]} alt="" />
        <h3>{title}</h3>
      </Style.TopCard>
      <Style.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </Style.BottomCard>
    </Style.Container>
  );
}
