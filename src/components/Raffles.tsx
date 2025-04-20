import { Button, Row, } from 'antd'
import React, { useRef } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography, Image } from 'antd';
import leftArrow from '../../src/assets/TokenIcon/Raffles/Arrow.svg'
import blackArrow from '../../src/assets/TokenIcon/Raffles/Arrow (1).svg'
import image from '../../src/assets/TokenIcon/Raffles/image.svg'
import minus from '../../src/assets/TokenIcon/Raffles/1 (1).svg'
import plus from '../../src/assets/TokenIcon/Raffles/1 (2).svg'
import purpleImage from '../../src/assets/TokenIcon/Raffles/image (1).svg'
// import '../../src/styles/styles.scss'

const { Text } = Typography;

const Raffles = () => {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
    };

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };


    return (
        <Row style={{
            marginTop: '105px',
            padding: '45px',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
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
            <Row style={{
                width: '416px',
                height: '3px',
                borderRadius: '100px',
                opacity: '0.5',
                background: 'var(--Yellow-300, #FFF499)',
                overflow: 'hidden',
            }}>
                <Row style={{
                    width: '139px',
                    height: '3px',
                    background: 'var(--Yellow-100, #FFE61B)',
                    borderRadius: '100px',
                }}></Row>
            </Row>
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
                    onClick={goToPrev}
                ><img src={leftArrow} />
                </Button>
                <Button
                    className="custom-button"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '100px',
                        transform: 'scaleX(-1)'
                    }}
                    onClick={goToNext}
                ><img src={leftArrow} />
                </Button>
            </Row>
            <Slider ref={sliderRef} {...settings}>
                <div><Raffle image={image} /></div>
                <div><Raffle image={purpleImage} /></div>
                <div><Raffle image={image} /></div>
                <div><Raffle image={purpleImage} /></div>
                <div><Raffle image={image} /></div>
                <div><Raffle image={purpleImage} /></div>
                <div><Raffle image={image} /></div>
                <div><Raffle image={purpleImage} /></div>
            </Slider>
        </Row>
    )
}

export default Raffles

interface RaffleProps {
    image: string;
}

const Raffle: React.FC<RaffleProps> = ({ image }) => {
    return (
        <Row style={{
            flexDirection: 'column',
            marginTop: '59px',
            marginBottom: '164px',
        }}>
            <Row style={{
                marginBottom: '8px',
                background: 'linear-gradient(90deg, rgba(11, 65, 33, 0) 0%, rgba(11, 65, 33, 1) 100%)',
                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                borderRadius: '16px',
                width: '584px',
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
                justifyContent: 'space-between',
                alignItems: 'center',
                // gap: '42px',
                width: '584px',
                height: '92px',
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
                    width: '314px',
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
        </Row >
    );
}