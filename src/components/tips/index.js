import React, { useState } from "react"
import { IoChevronBack, IoChevronForward } from "react-icons/io5"

import { sliderData } from "../../db/sliderData"
import {
  TipsSection,
  TipsWrapper,
  TipsSectionTitle,
  SliderContainer,
  SlideContent,
  SlideElement,
  SlideElementThumb,
  SlideElementContent,
  SlideElememtDesc,
  SlideElememtDate,
  NextSlideBtn,
  PrevSlideBtn,
  DotsContainer,
  Dot,
} from "./TipsStyled"

const Tips = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  const nextSlide = () => {
    if (currentSlide !== sliderData.length) {
      setCurrentSlide(currentSlide + 1)
    } else if (currentSlide === sliderData.length) {
      setCurrentSlide(1)
    }
  }

  const prevSlide = () => {
    if (currentSlide !== 1) {
      setCurrentSlide(currentSlide - 1)
    } else if (currentSlide === 1) {
      setCurrentSlide(sliderData.length)
    }
  }

  const moveDot = (index) => {
    setCurrentSlide(index)
  }
  return (
    <div>
      <TipsSection>
        <TipsWrapper>
          <TipsSectionTitle>Tips & tricks</TipsSectionTitle>
          <SliderContainer>
            {sliderData.map((slide, index) => (
              <SlideContent key={slide.id} className={currentSlide === index + 1 ? "slide active" : "slide"}>
                {currentSlide === index + 1 && (
                  <>
                    <SlideElement>
                      <SlideElementThumb>
                        <img src={slide.image} alt={slide.desc} />
                      </SlideElementThumb>
                      <SlideElementContent>
                        <SlideElememtDesc>{slide.desc}</SlideElememtDesc>
                        <SlideElememtDate>{slide.date}</SlideElememtDate>
                      </SlideElementContent>
                    </SlideElement>
                  </>
                )}
              </SlideContent>
            ))}

            <NextSlideBtn onClick={nextSlide}>
              <IoChevronForward fontSize="24" />
            </NextSlideBtn>
            <PrevSlideBtn onClick={prevSlide}>
              <IoChevronBack fontSize="24" />
            </PrevSlideBtn>

            <DotsContainer>
              {Array.from({ length: 4 }).map((dot, index) => (
                <Dot className={currentSlide === index + 1 && "active"} onClick={() => moveDot(index + 1)}></Dot>
              ))}
            </DotsContainer>
          </SliderContainer>
        </TipsWrapper>
      </TipsSection>
    </div>
  )
}

export default Tips
