import { Row } from 'antd'
import React from 'react'
import icon from '../../src/assets/TokenIcon/Roadmap/icon.svg'
import rocket from '../../src/assets/TokenIcon/Roadmap/Rocket (1).svg'
import circle from '../../src/assets/TokenIcon/Roadmap/circle.svg'
import { Typography, Image } from 'antd';
import '../../src/styles/styles.scss'
import useBreakpoint from "@/hooks/useBreakpoint";

const { Text } = Typography;

const Roadmap = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row
            className='roadmapRow'
            style={{
                // width: '1440px',
                // height: '810px',
                flexDirection: 'column',
                // padding: '45px',
            }}>
            <Text
                className='roadmapTitle'
                style={{
                    color: 'var(--White, #F7F7F7)',
                    fontFamily: "ClashGrotesk",
                    // fontSize: '100px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    // lineHeight: '120px',
                    textTransform: 'capitalize',
                    // marginBottom: '59px',
                }}>Roadmap</Text>



            <Row
                className='componentsRow'
                style={{
                    // width: '1200px',
                    // height: '309px',
                    borderRadius: '16px',
                    border: '2px solid var(--Gradient-Green-Line, #1EB259)',
                    background: 'var(--Green-Black-100, #00160A)',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    position: 'relative',
                }}>
                <Row style={{
                    alignItems: 'center',
                    gap: '11px',
                    width: '800px',
                    paddingLeft: '8px',
                }}>
                    <Row
                        className='card1'
                        style={{
                            // width: '214px',
                            // height: '63px',
                            borderRadius: '12px',
                            background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                            border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                            padding: '8px',
                        }}>
                        <IconWithText iconSrc={icon} text="Token Launch" />
                    </Row>

                    <Row
                        className='card2'
                        style={{
                            // width: '233px',
                            // height: '63px',
                            borderRadius: '12px',
                            background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                            border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                            padding: '8px',
                        }}>
                        <IconWithText iconSrc={icon} text="dApp  on BSC" />
                    </Row>

                    <Row className='columnCards' style={{
                        flexDirection: md ? 'row' : 'column',
                    }}>
                        <Row
                            className='card3'
                            style={{
                                // width: '293px',
                                // height: '63px',
                                borderRadius: '12px',
                                background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                                padding: '8px',
                            }}>
                            <IconWithText iconSrc={icon} text="Audit on the contract" />
                        </Row>
                        <Row
                            className='card4'
                            style={{
                                // width: '385px',
                                // height: '63px',
                                borderRadius: '12px',
                                background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                                padding: '8px',
                            }}>
                            <IconWithText iconSrc={icon} text="Casino Games" />
                        </Row>
                        <Row
                            className='card5'
                            style={{
                                // width: '366px',
                                // height: '63px',
                                borderRadius: '12px',
                                background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                                padding: '8px',
                            }}>
                            <IconWithText iconSrc={icon} text="500 community members" />
                        </Row>
                        <Row
                            className='card6'
                            style={{
                                // width: '299px',
                                // height: '63px',
                                borderRadius: '12px',
                                background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                                padding: '8px',
                            }}>
                            <IconWithText iconSrc={icon} text="List on CoinMarketCap" />
                        </Row>
                        <Row
                            className='card7'
                            style={{
                                // width: '452px',
                                // height: '63px',
                                borderRadius: '12px',
                                background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                                padding: '8px',
                            }}>
                            <IconWithText iconSrc={icon} text="List on CoinGecko" />
                        </Row>
                        <Row
                            className='card8'
                            style={{
                                // width: '531px',
                                // height: '63px',
                                borderRadius: '12px',
                                background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                                padding: '8px',
                            }}>
                            <IconWithText iconSrc={icon} text="Massive marketing on all social media platforms" />
                        </Row>



                        <Row
                            className='Partnerships'
                            style={{
                                // width: '219px',
                                // height: '63px',
                                borderRadius: '12px',
                                background: 'var(--Gradient-Shape-Small, linear-gradient(90deg, rgba(11, 65, 33, 0.00) 0%, #0B4121 49.79%, rgba(11, 65, 33, 0.00) 100%))',
                                border: '1px solid var(--Gradient-Green-Line, #1EB259)',
                                padding: '8px',
                            }}>
                            <IconWithText iconSrc={icon} text="Partnerships" />
                        </Row>
                    </Row>





                    <Row
                        className='rocketContainer'
                        style={{
                            // justifyContent: 'end',
                            // alignItems: 'center',
                            // position: 'absolute',
                            // left: '950px',
                        }}>
                        <img
                            className='bigRocket'
                            src={rocket} />
                    </Row>
                </Row>
            </Row>
            <img
                className='circleImage'
                src={circle} style={{
                    marginTop: '28px',
                    marginBottom: '130px',
                }} />
        </Row >
    )
}

export default Roadmap




interface IconWithTextProps {
    iconSrc: string;       // Source URL of the icon image
    text: string;          // Text to be displayed
    iconAlt?: string;      // Alt text for the icon image
    className?: string;    // Optional className for additional styling
}

const IconWithText: React.FC<IconWithTextProps> = ({ iconSrc, text, iconAlt = '', className = '' }) => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row className={className} style={{
            justifyContent: sm ? 'space-between' : 'left',
            alignItems: 'center',
            gap: '10px',
        }}>
            <img src={iconSrc} alt={iconAlt} className='cardIcon' />
            <span
                className='iconText'
                style={{
                    color: 'var(--Green-1000, #E6FDC8)',
                    fontFamily: "ClashGrotesk",
                    // fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    // lineHeight: '33px',
                    textTransform: 'capitalize',
                }}>{text}</span>
        </Row>
    );
};