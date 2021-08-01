import React from "react"
import PostCard from "../PostCard"
import styled from "styled-components"

const PostList = ({ posts }) => {
  let filteredPosts = posts.filter(
    post =>
      post.node.fields.slug !== "/about/" &&
      post.node.fields.slug !== "/__do-not-remove/"
  )
  return (
    <StyledPostList>
      {filteredPosts.map(post => {
        return (
          <PostCard
            key={post.node.id}
            title={post.node.frontmatter.title}
            date={post.node.frontmatter.date}
            path={post.node.fields.slug}
            cover={post.node.frontmatter.cover}
            excerpt={
              post.node.frontmatter.excerpt
                ? post.node.frontmatter.excerpt
                : post.node.excerpt
            }
            timeToRead={post.node.timeToRead}
          />
        )
      })}
    </StyledPostList>
  )
}

export default PostList

const StyledPostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: stretch;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`
