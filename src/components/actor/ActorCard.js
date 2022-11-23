import React from 'react';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ image, name, gender, country, birthday }) => {
  return (
    <StyledActorCard>
      <div>
        <img className='img-wrapper' src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'Country unknown'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
    </StyledActorCard>
  );
};
export default ActorCard;
