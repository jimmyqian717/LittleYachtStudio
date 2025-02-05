import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Gallery from "../components/gallery/Gallery"
import Shell from "../components/Shell"

export default function Template({ data }) {
  const { markdowns, images } = data
  const { frontmatter } = markdowns
  return (
    <Shell
      title={frontmatter.title}
      headerLinks={["HOME", "CONTACT"]}
      bottomCheck={true}
    >
      <Wrapper>
        <Heading>{frontmatter.pageTitle}</Heading>
        <Desc>{frontmatter.description}</Desc>
        <Gallery imgEdges={images.edges} />
      </Wrapper>
    </Shell>
  )
}

export const pageQuery = graphql`
  query($path: String!, $imgKey: String!) {
    images: allFile(
      filter: { sourceInstanceName: { eq: $imgKey } }
      sort: { fields: modifiedTime, order: ASC }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    markdowns: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        pageTitle
        description
        imgKey
      }
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 5vh;
`

const Heading = styled.h1`
  font-size: clamp(18px, 1.8vw, 24px);
  font-weight: 600;
  color: #28282a;
  justify-self: flex-start;
  line-height: 1.2em;
  padding-top: 14vh;
  margin-bottom: 4px;
`

const Desc = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 500;
  display: flex;
  margin-bottom: 4vh;
`
