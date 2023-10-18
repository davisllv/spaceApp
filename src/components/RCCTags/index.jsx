import React from "react";
import styled from "styled-components";
import tags from "./tags.json"

const TextContainer = styled.div`
  display: flex;
  margin: 56px  24px 0 24px;
  gap: 17px;
`;

const TagText = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: #d9d9d9;
`;

const TagsItensContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const TagItem = styled.div`
  border-radius: 10px;
  background-color: red;
  text-align: center;
  justify-content: center;
  padding: 4px 10px;
`;

const RCCTags = () => {
  return (
    <TextContainer>
      <div style={{width: "219px"}}>
      <TagText>Busque por Tags:</TagText>

      </div>

      <TagsItensContainer>
        {tags.map((tag) => {
          return (
            <TagItem>
              <TagText>{tag.titulo}</TagText>
            </TagItem>
          );
        })}
      </TagsItensContainer>
    </TextContainer>
  );
};

export default RCCTags;
