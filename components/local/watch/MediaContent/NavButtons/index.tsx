import React from 'react';
import { Context } from '../../Provider';
import { Button } from '@components/Form/Button';
import styled from 'styled-components';
import { useNavigation } from './hook';

const ButtonsBox = styled.div`
  margin-top: 24px;
`;

export const NavButtons = () => {
  const { nextEpisode, prevEpisode } = React.useContext(Context);
  const { handleNextEpisode, handlePrevEpisode } = useNavigation();

  return (
    <ButtonsBox>
      <Button
        margin='0 12px 0 0'
        disabled={!prevEpisode}
        onClick={handlePrevEpisode}
      >
        Anterior
      </Button>
      <Button primary disabled={!nextEpisode} onClick={handleNextEpisode}>
        Siguiente
      </Button>
    </ButtonsBox>
  );
};
