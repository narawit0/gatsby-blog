import React from "react"
import styled from "styled-components"

const Tag = ({ title, selectTag, selectedTag }) => {
  const handleClick = () => {
    selectTag(title)
  }

  return <>
    <StyledTagHorizontal
      className="tag-horizontal"
      onClick={handleClick}
      selected={selectedTag === title}
    >
      {title}
    </StyledTagHorizontal>
  </>
}

export default Tag

const StyledTagHorizontal = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.5rem 0.9rem;
  margin: 0 0.3rem;
  font-size: 0.9rem;
  background: ${props => !props.selected && "none !important"};
  border-radius: 15px;
  font-weight: ${props => (props.selected ? "bold" : "400")};
  white-space: nowrap;
  transition: none;
`
