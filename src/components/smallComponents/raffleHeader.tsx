import { Button, Row } from 'antd'
import { Typography, Image } from 'antd';
import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import leftArrow from '@/assets/TokenIcon/Raffles/Arrow.svg'
import rightArrow from '@/assets/TokenIcon/Raffles/Arrow.svg'


const { Text } = Typography;

const sliderRef = useRef<Slider | null>(null);

const totalSlides = 4; // Replace with the actual number of slides
const [currentSlide, setCurrentSlide] = useState<number>(0); // Specify type as number

const progressWidth = ((currentSlide + 1) / totalSlides) * 100;

const handlePrevClick = () => {
    sliderRef.current?.slickPrev();
};

const handleNextClick = () => {
    sliderRef.current?.slickNext();
};

const RaffleHeader: React.FC = () => {

    return (
        <Row style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '45px',
            marginTop: '150px',
        }}>

            {/* ---------------------------------------------------------------------------------- TITLE --------------------------------------------------- */}
            <Text style={{
                color: 'var(--White, #F7F7F7)',
                fontFamily: "ClashGrotesk",
                fontSize: '100px',
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "120px",
                textTransform: 'capitalize',
            }}>
                Raffles
            </Text>

            {/* ------------------------------------------------------------------------------- PROGRESS-BAR --------------------------------------------------- */}
            <Row style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '32px',
            }}>
                <Row style={{
                    width: '416px',
                    height: '3px',
                    borderRadius: '100px',
                    opacity: '0.75',
                    background: 'var(--Yellow-300, #FFF499)',
                    overflow: 'hidden',
                }}>
                    <Row style={{
                        width: `${progressWidth}%`, // Dynamically set width based on progress
                        height: '3px',
                        background: 'var(--Yellow-100, #FFE61B)',
                        borderRadius: '100px',
                    }}></Row>
                </Row>

                {/* ------------------------------------------------------------------------------- ARROW BUTTONS --------------------------------------------------- */}
                <Row style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                }}>
                    <Button
                        className="custom-button"
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '100px',
                        }}
                        onClick={handlePrevClick}
                    >
                        <img src={leftArrow} />
                    </Button>
                    <Button
                        className="custom-button"
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '100px',
                            transform: 'scaleX(-1)'
                        }}
                        onClick={handleNextClick}
                    >
                        <img src={rightArrow} />
                    </Button>
                </Row>
            </Row>

        </Row>
    )
}

export default RaffleHeader;