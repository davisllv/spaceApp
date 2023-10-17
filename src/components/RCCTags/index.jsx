import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  display: flex;
  margin: 0 24px;
  gap: 17px;
`;

const TagText = styled.p`
  font-size: 24px;
  font-weight: 400;
  width: 219px;
  color: #d9d9d9;
`;

const TagsItensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const TagItem = styled.div`
  border-radius: 10px;
  background-color: #7b78e5;
`;

const tagsItens = [
  {
    id: 1,
    description: "Estrelas",
  },
  { id: 2, description: "Galáxias" },
  { id: 3, description: "Lua" },
  { id: 4, description: "Planetas" },
  { id: 5, description: "Buracos Negros" },
  { id: 6, description: "Todas" },
];

const RCCTags = () => {
  return (
    <TextContainer>
      <TagText>Busque por Tags:</TagText>

      <TagsItensContainer>
        {tagsItens.map((tag) => {
          return (
            <TagItem>
              <TagText>{tag.description}</TagText>
            </TagItem>
          );
        })}
      </TagsItensContainer>
    </TextContainer>
  );
};

export default RCCTags;
