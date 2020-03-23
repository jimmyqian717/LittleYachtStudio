import React, { Component } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import "../../node_modules/react-medium-image-zoom/dist/styles.css"

class ImgContainer extends Component {
  render() {
    const { image, height, ifZoom } = this.props
    return (
      <Container
        ifZoom={ifZoom}
        style={{ height }}
        onContextMenu={e => e.preventDefault()}
      >
        {ifZoom && (
          <Zoom
            style={{
              height: "100%",
            }}
            overlayBgColorEnd={"rgba(0, 0, 0, 0.6"}
          >
            <Img loading={"auto"} fluid={image} fadeIn={true} />
          </Zoom>
        )}
        {!ifZoom && <Img loading={"auto"} fluid={image} fadeIn={true} />}
      </Container>
    )
  }
}

export default ImgContainer

const Container = styled.div`
  width: auto;
  height: 100%;
  background-color: #eee;
  cursor: ${props => (props.ifZoom ? "pointer" : "default")};
  @media (max-width: 1024px) {
    z-index: -9;
  }
  div {
    height: 100%;
    width: 100%;
  }
`
