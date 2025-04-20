import { Row } from 'antd'
import React from 'react'
import { Typography, Image } from 'antd';
import card1 from '../../src/assets/TokenIcon/HowToGetStarted/Card_1.svg'
import card2 from '../../src/assets/TokenIcon/HowToGetStarted/Card_2.svg'
import card3 from '../../src/assets/TokenIcon/HowToGetStarted/Card_3.svg'
import card4 from '../../src/assets/TokenIcon/HowToGetStarted/Card_4.svg'
import card5 from '../../src/assets/TokenIcon/HowToGetStarted/Card_5.svg'
import card6 from '../../src/assets/TokenIcon/HowToGetStarted/Card_6_Active.svg'
import cursor from '../../src/assets/TokenIcon/HowToGetStarted/cursor (1).svg'
import circles from '../../src/assets/TokenIcon/HowToGetStarted/Group 114.svg'
import useBreakpoint from "@/hooks/useBreakpoint";

const { Text } = Typography;

const HowToGetStarted = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row
            className='howToMainRow'
            style={{
                marginTop: '134px',
                // padding: '45px',
                position: 'relative',
            }}>
            <img src={cursor} style={{
                position: 'absolute',
                right: '205px',
                bottom: '190px',
                borderRadius: '170px',
                background: 'rgba(230, 253, 200, 0.10)',
                backdropFilter: 'blur(7.5px)',
                display: md ? 'flex' : 'none',
            }} />
            <img src={circles} style={{
                position: 'absolute',
                right: '-100px',
                bottom: '500px',
            }} />
            <Text
                className='HowToTitle'
                style={{
                    color: 'var(--White, #F7F7F7)',
                    fontFamily: "ClashGrotesk",
                    // fontSize: '100px',
                    fontStyle: "normal",
                    fontWeight: "700",
                    // lineHeight: "120px",
                    textTransform: 'capitalize',
                }}>How to <br /> get started</Text>
            <Text
                className='HowToTitle2'
                style={{
                    color: 'var(--Green-1000, #E6FDC8)',
                    fontFamily: "ClashDisplay",
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '30px',
                    // width: '675px',
                }}>You can buy <span style={{
                    opacity: '0.85',
                    color: 'var(--Yellow-100, #FFE61B)',
                    fontFamily: "ClashDisplay",
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '30px',
                    textTransform: 'uppercase',
                }}>$ALCAZAR</span> on both decentralized and centralized platforms. Make sure you use <span style={{
                    opacity: '0.85',
                    color: 'var(--Green-100, #2BFF80)',
                    fontFamily: "ClashDisplay",
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '30px',
                    textTransform: 'uppercase',
                }}>3%</span> slippage for <span
                    style={{
                        opacity: '0.85',
                        color: 'var(--Green-100, #2BFF80)',
                        fontFamily: "ClashDisplay",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                    }}>DEXes.</span></Text>

            <Row style={{
                marginTop: '85px',
                marginBottom: '45px',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Row
                    className='cardRow'
                    style={{
                        // justifyContent: 'space-between',
                        alignItems: 'center',
                        // gap: '24px',
                    }}>
                    <CardComponent src={card1} />
                    <CardComponent src={card2} />
                    <CardComponent src={card3} />
                    <CardComponent src={card4} />
                    <CardComponent src={card5} />
                    <CardComponent src={card6} />
                </Row>
            </Row>

            <Row style={{
                justifyContent: 'space-between',
                gap: '32px',
            }}>
                <Text
                    className='cardDescription'
                    style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashDisplay",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '30px',
                        // width: '584px',
                    }}>As a reward to our loyal holders, we offer a very generous staking platform for <span style={{
                        opacity: '0.85',
                        color: 'var(--Yellow-100, #FFE61B)',
                        fontFamily: "ClashDisplay",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                    }}> $ALCAZAR </span> tokens. The lockup period for staking is 50 days and you may withdraw your rewards or keep staking and earning rewards for up to <span style={{
                        opacity: '0.85',
                        color: 'var(--Green-100, #2BFF80)',
                        fontFamily: "ClashDisplay",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                    }}>365 days</span>  after.</Text>
                <Text
                    className='cardDescription2'
                    style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashDisplay",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '30px',
                        // width: '584px',
                    }}>The <span style={{
                        opacity: '0.85',
                        color: 'var(--Yellow-100, #FFE61B)',
                        fontFamily: "ClashDisplay",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                    }}>APR</span>  of our staking platform is dependent on how many people are staking at the moment, so it will keep going up and down. The <span style={{
                        opacity: '0.85',
                        color: 'var(--Green-100, #2BFF80)',
                        fontFamily: "ClashDisplay",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '30px',
                        textTransform: 'uppercase',
                    }}>rewards</span>  do compound so the longer you stake, the higher your earnings.</Text>

            </Row>
        </Row >
    )
}

export default HowToGetStarted

interface CardComponentProps {
    src: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ src }) => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row>
            <img
                src={src}
                alt="Card Image"
                style={{
                    width: sm ? '193px' : '169px',
                    height: sm ? '193px' : '169px',
                    flexShrink: 0,
                    borderRadius: '16px',
                    border: '1px solid var(--Gradient-Yellow-Button, #FFDC99)',
                }}
            />
        </Row>
    );
};