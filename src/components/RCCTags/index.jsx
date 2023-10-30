import React from "react";
import styled from "styled-components";
import tags from "./Tags/tags.json";

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 56px 24px 0 24px;
`;

const TagText = styled.p`
  font-weight: 400;
  color: #d9d9d9;
`;

const TagsItensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const TagItem = styled.div`
    font-size: 16px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`;

const RCCTags = () => {
  return (
    <TextContainer>
      <TagText style={{ width: "20%" }}>Busque por Tags:</TagText>

      <TagsItensContainer style={{ width: "80%" }}>
        {tags
          .sort((a, b) => {
            const tituloA = a.titulo.toUpperCase();
            const tituloB = b.titulo.toUpperCase();
            return tituloA === tituloB ? 0 : tituloA > tituloB ? 1 : -1;
          })
          .map((tag) => {
            return (
              <TagItem key={tag.id}>
                <TagText>{tag.titulo}</TagText>
              </TagItem>
            );
          })}
      </TagsItensContainer>
    </TextContainer>
  );
};

export default RCCTags;
