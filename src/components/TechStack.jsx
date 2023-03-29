import React from 'react'
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  align-items: end;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 200;
`;

const Image = styled.img`
  width: 3rem;;
  height: 3rem;;
  margin-right: 1rem;
  transform: translateY(0.2rem);

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const TechStack = ({ techStack }) => {
  return (
    <List>
      <ListItem>Tech Stack</ListItem>
      {Object.keys(techStack).map((key) => (
        <ListItem key={key}>
          <Image src={techStack[key]} alt={key} />
          {key}
        </ListItem>
      ))}
    </List>
  );
};

export default TechStack
