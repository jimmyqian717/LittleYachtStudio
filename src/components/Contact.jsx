import React, { Component } from 'react';
import styled from "styled-components";

class Contact extends Component {
    render() {
        return (
            <Container id = "contact-section">
                <Wrapper>
                    <Subheading> Interesed? </Subheading>
                    <Heading> Contact us! </Heading>
                    <Description>
                        We’re always looking for new opportunities and are comfortable working 
                        internationally. Please get in touch and one of our project managers will 
                        contact you about beginning the proposal process.
                    </Description>
                    {/* <ContactBtn> Contact us! </ContactBtn> */}
                    <ContactSubsection>
                        <ContactDetail>
                            <Label> Email </Label>
                            <Info> littleyachtstudio@gmail.com </Info>
                        </ContactDetail>
                        <ContactDetail>
                            <Label> Whatsapp </Label>
                            <Info> (+31) 0636 067 350 </Info>
                        </ContactDetail>
                        <ContactDetail>
                            <Label> Instagram </Label>
                            <Info> @iamjimmyqain </Info>
                        </ContactDetail>
                        <ContactDetail>
                            <Label> Resume </Label>
                            <Info> <u>Download</u> </Info>
                        </ContactDetail>
                    </ContactSubsection>
                </Wrapper>
            </Container>
        );
    }
}

export default Contact;

const Container = styled.section`
    background-color: #28282A;
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`
const Subheading = styled.h2`
    color: white;
    font-weight: 100;
    font-size: 1.4em;
    margin-bottom: 10px;
    @media (max-width: 979px) {
        font-size: 3vw;
        margin-bottom: 0;
    }
;
`
const Heading = styled.h1`
    color: white;
    font-weight: 600;
    font-size: 2em;
    margin-bottom: 10px;
    @media (max-width: 979px) {
        font-size: 5.5vw;
    }
`

const Description = styled.p`
    color: white;
    font-weight: 300;
    font-size: 1.1em;
    width: 60%;
    @media (max-width: 979px) {
        width: 100%;
        font-size: 2.5vw;
    }
`

const ContactBtn = styled.button`
    font-size: 1em;
    background-color: white;
    padding: 20px 10px;
    width: 25%;
    border: none;
    margin-top: 5vw;
    font-weight: 600;
    cursor: pointer;
`
const ContactSubsection = styled.div`
    margin-top: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    width: 60%;
    @media (max-width: 979px) {
        margin-top: 8vh;
        width: 100%;
        font-size: 3vw;
        grid-column-gap: 10vw;
    }
`

const Label = styled.label`
    font-size: 0.9em;
    color: white;
    opacity: 0.5;
    font-weight: 500;
    @media (max-width: 979px) {
        font-size: 2.5vw;
    }
`
const Info = styled.h3`
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
    color: white;
    font-weight: 300;
    text-decoration: underline;
    u {
        color: white;
    }
    @media (max-width: 979px) {
        font-size: 2.6vw;
        text-decoration: none;
    }
`

const ContactDetail = styled.div`
    display: flex;
    flex-direction: column;
`