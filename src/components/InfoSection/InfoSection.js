import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyles'
import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, SectionInfo, Subtitle, TextWrapper, TopLine } from './InfoSection.elements'

const InfoSection = ({
    primary, 
    lightBg, 
    imgStart, 
    lightTopLine, 
    topLine, 
    lightText, 
    headline, 
    lightTextDesc, 
    description, 
    buttonLabel,
    start,
    alt,
    img
}) => {
  return (
    <>
        <SectionInfo lightBg={lightBg}>
            <Container>
                <InfoRow imgStart={imgStart}>
                <InfoColumn>
                  <TextWrapper>
                    <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                    <Link to='/sign-up'>
                      <Button big fontBig primary={primary}>
                        {buttonLabel}
                      </Button>
                    </Link>
                  </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                  <ImgWrapper start={start}>
                    <Img src={img} alt={alt} />
                  </ImgWrapper>
                </InfoColumn>
              </InfoRow>
            </Container>
        </SectionInfo>
    </>
  )
}

export default InfoSection