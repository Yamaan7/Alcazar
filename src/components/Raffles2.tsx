import { Button, Row } from "antd";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Typography, Image } from 'antd';
import minus from '../../src/assets/TokenIcon/Raffles/1 (1).svg'
import plus from '../../src/assets/TokenIcon/Raffles/1 (2).svg'
import image from '../../src/assets/TokenIcon/Raffles/image.svg'
import purpleImage from '../../src/assets/TokenIcon/Raffles/image (1).svg'
import leftArrow from '../../src/assets/TokenIcon/Raffles/Arrow.svg'
import rightArrow from '../../src/assets/TokenIcon/Raffles/Arrow.svg'
import coin1 from '../../src/assets/TokenIcon/Raffles/coin (5).svg'
import coin2 from '../../src/assets/TokenIcon/Raffles/coin (6).svg'
import coin3 from '../../src/assets/TokenIcon/Raffles/coin (7).svg'
import coin4 from '../../src/assets/TokenIcon/Raffles/coin (8).svg'
import { useBreakpoint } from "@/hooks";

const { Text } = Typography;


interface RaffleProps {
    image: string;
}

const Raffle: React.FC<RaffleProps> = ({ image }) => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{
            flexDirection: 'column',
            marginTop: sm ? '59px' : '31px',
            marginBottom: sm ? '164px' : '174px',
        }}>
            <Row style={{
                marginBottom: '8px',
                background: 'linear-gradient(90deg, rgba(11, 65, 33, 0) 0%, rgba(11, 65, 33, 1) 100%)',
                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                borderRadius: '16px',
                maxWidth: sm ? '584px' : '339px',
                width: '110%',
            }}>
                <img src={image} style={{
                    padding: '8px',
                }} />
                <Row style={{
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    marginLeft: '16px',
                    marginTop: '22px',
                    marginBottom: '11px',
                }}>
                    <Text style={{
                        color: 'var(--Yellow-100, #FFE61B)',
                        fontFamily: "ClashGrotesk",
                        fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '36px',
                        textTransform: 'capitalize',
                    }}>Voluptatem Accusantium</Text>

                    <Row style={{
                        justifyContent: 'space-between',
                    }}>
                        <Row style={{
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                color: 'var(--Green-1000, #E6FDC8)',
                                fontFamily: "ClashDisplay",
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: 300,
                                lineHeight: '21px',
                            }}>Draw Date & Time</Text>
                            <Text style={{
                                color: 'var(--Green-1000, #E6FDC8)',
                                fontFamily: "ClashDisplay",
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '33px',
                                textTransform: 'capitalize',
                                marginBottom: '6px',
                            }}>20 Nov 2022 | 22:00</Text>
                        </Row>
                        <Row style={{
                            flexDirection: 'column',
                            textAlign: 'right',
                        }}>
                            <Text style={{
                                color: 'var(--Green-1000, #E6FDC8)',
                                fontFamily: "ClashDisplay",
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: 300,
                                lineHeight: '21px',
                            }}>Ticket Price</Text>
                            <Text style={{
                                color: 'var(--Green-100, #2BFF80)',
                                fontFamily: "ClashDisplay",
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '33px',
                                textTransform: 'capitalize',
                            }}>$ 10</Text>
                        </Row>
                    </Row>

                    <Row style={{
                        justifyContent: 'space-between',
                    }}>
                        <Row style={{
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                color: 'var(--Green-1000, #E6FDC8)',
                                fontFamily: "ClashDisplay",
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: 300,
                                lineHeight: '21px',
                            }}>Rewards</Text>
                            <Text style={{
                                color: 'var(--Green-1000, #E6FDC8)',
                                fontFamily: "ClashDisplay",
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '33px',
                                textTransform: 'capitalize',
                            }}>$ 1000</Text>
                            <Text style={{
                                color: 'var(--Green-1000, #E6FDC8)',
                                fontFamily: "ClashDisplay",
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: 300,
                                lineHeight: '21px',
                            }}>Worth Alcazar Tokens</Text>
                        </Row>
                        <Row style={{
                            flexDirection: 'column',
                            textAlign: 'right',
                        }}>
                            <Text style={{
                                color: 'var(--Green-1000, #E6FDC8)',
                                fontFamily: "ClashDisplay",
                                fontSize: '12px',
                                fontStyle: 'normal',
                                fontWeight: 300,
                                lineHeight: '21px',
                            }}>Ticket Available</Text>
                            <Text style={{
                                color: 'var(--Green-100, #2BFF80)',
                                fontFamily: "ClashDisplay",
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '33px',
                                textTransform: 'capitalize',
                            }}>$ 10</Text>
                        </Row>
                    </Row>
                </Row>
            </Row>
            <Row style={{
                flexDirection: sm ? 'row' : 'column',
                justifyContent: 'space-between',
                alignItems: sm ? 'center' : 'normal',
                width: sm ? '584px' : '339px',
                height: sm ? '92px' : '187px',
                background: 'linear-gradient(90deg, rgba(11, 65, 33, 0) 0%, rgba(11, 65, 33, 1) 100%)',
                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                borderRadius: '22px',
                padding: '12px 16px',
            }}>
                <Row style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '21px',
                }}>
                    <Button
                        className='minus'
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '100px',
                        }}><img src={minus} /></Button>
                    <Text style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: 'ClashDisplay',
                        fontSize: '20px',
                        fontWeight: 500,
                    }}>150</Text>
                    <Button
                        className='plus'
                        style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '100px',
                        }}><img src={plus} /></Button>
                </Row>
                <Button style={{
                    width: sm ? '314px' : '307px',
                    height: '68px',
                    borderRadius: '22px',
                    background: 'var(--Yellow-200, #FE6)',
                    color: 'black',
                    fontFamily: 'ChillaxBold',
                    fontSize: '20px',
                    fontWeight: 500,
                    fontStyle: 'normal',
                }}>Buy Now</Button>
            </Row>
        </Row>
    );
};

const RaffleSlider: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);
    const [currentSlide, setCurrentSlide] = useState<number>(0); // Specify type as number

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        afterChange: (currentSlide: number) => setCurrentSlide(currentSlide),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    vertical: false,
                    verticalSwiping: false,
                    infinite: false,
                }
            }
        ]
    };

    const handlePrevClick = () => {
        sliderRef.current?.slickPrev();
    };

    const handleNextClick = () => {
        sliderRef.current?.slickNext();
    };

    const totalSlides = 4; // Replace with the actual number of slides
    const progressWidth = ((currentSlide + 1) / totalSlides) * 100;

    return (

        <div className="slider-container" style={{
            position: 'relative',
        }}>
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

            {/* ------------------------------------------------------------------------------- SLIDER --------------------------------------------------- */}
            <div className="slider-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
                <Slider {...settings} ref={sliderRef}>
                    <div>
                        <Raffle image={image} />
                    </div>
                    <div>
                        <Raffle image={purpleImage} />
                    </div>
                    <div>
                        <Raffle image={image} />
                    </div>
                    <div>
                        <Raffle image={purpleImage} />
                    </div>
                    {/* Add more Raffle components as needed */}
                </Slider>
                <div className="blur-overlay"></div>
            </div>
            {/* ------------------------------------------------------------------------------- Coins --------------------------------------------------- */}
            <img src={coin1} style={{
                position: 'absolute',
                top: '150px',
                left: '400px',

            }} />
            <img src={coin2} style={{
                position: 'absolute',
                top: '115px',
                left: '475px',
            }} />
            <img src={coin3} style={{
                position: 'absolute',
                top: '115px',
                right: '225px',
            }} />
            <img src={coin4} style={{
                position: 'absolute',
                top: '100px',
                right: '265px',
            }} />
        </div>
    );
};

export default RaffleSlider;