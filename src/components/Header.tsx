import React from 'react'
import bgImage from '../../src/assets/TokenIcon/Header/bgImage.svg'
import Light from '../../src/assets/TokenIcon/Header/Light.svg'
import lion5 from '../../src/assets/TokenIcon/Header/lion5.svg'
import coin from '../../src/assets/TokenIcon/Header/coin.svg'
import cornerCoin from '../../src/assets/TokenIcon/Header/cornerCoin.svg'
import topCoin from '../../src/assets/TokenIcon/Header/topCoin.svg'
import coin3 from '../../src/assets/TokenIcon/Header/coin3.svg'
import blurredCoin from '../../src/assets/TokenIcon/Header/blurredCoin.svg'
import rocket from '../../src/assets/TokenIcon/Header/rocket.svg'
import Cursor from '../../src/assets/TokenIcon/Header/Cursor.svg'
import useBreakpoint from "@/hooks/useBreakpoint";
import '../../src/styles/styles.scss'
import { Button, Row } from 'antd'
import { Typography, Image } from 'antd';

const { Text } = Typography;

const Header = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row
            className='headerRow'
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                // height: '680px',
                borderRadius: '22px',
                border: '2px solid var(--Gradient-Green-Line, #1EB259)',
                justifyContent: 'space-between',
                overflow: 'hidden',
                background: 'radial-gradient(224.78% 224.78% at 50% 50%, rgba(0, 0, 0, 0.00)0%, #00056.87%)',
            }}>
            <Row style={{
                // width: '100%',
                flexDirection: 'column',
            }}>
                <Text
                    className='headerTitle'
                    style={{
                        color: 'var(--White, #F7F7F7)',
                        fontFamily: "ClashGrotesk",
                        // fontSize: '100px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        // lineHeight: '120px',
                        textTransform: 'capitalize',
                        // marginTop: '115px',
                        // marginLeft: '57px',
                    }}>Building <br /> The Bridge</Text>
                <Text
                    className='headerTitle2'
                    style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashDisplay",
                        // fontSize: '24px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        // lineHeight: '36px',
                        // marginLeft: '65px',
                        // marginTop: '14px',
                        // width: '472px',
                        opacity: '0.85',
                    }}>Of luck between the real world and the crypto world.</Text>
                <Button
                    className='headerButton'
                    style={{
                        // marginTop: '32px',
                        // marginLeft: '60px',
                        // width: '194px',
                        // height: '68px',
                        borderRadius: '22px',
                        background: 'var(--Yellow-200, #FE6)',
                        color: 'black',
                        fontFamily: 'ChillaxBold',
                        fontSize: '20px',
                        fontWeight: '200',
                    }}>Buy Tickets</Button>
            </Row>

            <Row style={{

            }}>
                <img src={Light}
                    className='headerLight'
                    style={{
                        // width: '712px',
                        // height: '576px',
                        position: 'relative',
                        borderRadius: '712px',
                        background: 'var(--Yellow-Light, linear-gradient(180deg, #FFE61B 0%, #FFB72B 100%))',
                        filter: 'blur(134.8073272705078px)',
                    }} />
                <img src={lion5}
                    className='headerLion'
                    style={{
                        // width: '346px',
                        position: 'absolute',
                        // right: '150px',
                        // top: '155px',
                    }} />
                <img src={coin}
                    className='coin1'
                    style={{
                        position: 'absolute',
                        // top: '200px',
                        // right: '525px',
                    }} />
                <img src={cornerCoin}
                    className='cornerCoin'
                    style={{
                        position: 'absolute',
                        // top: '658px',
                        // left: '2px',
                        borderRadius: '22px',
                    }} />
                <img
                    className='topCoin'
                    src={topCoin} style={{
                        position: 'absolute',
                        // top: '128px',
                        // right: '1315px',
                    }} />
                <img src={coin3}
                    className='coin3'
                    style={{
                        position: 'absolute',
                        // top: '585px',
                        // right: '800px',
                    }} />
                <img src={blurredCoin}
                    className='blurredCoin'
                    style={{
                        position: 'absolute',
                        // top: '190px',
                        // right: '625px',
                    }} />
                <img src={rocket}
                    className='rocket'
                    style={{
                        position: 'absolute',
                        // top: '93px',
                        // right: '-27px',
                    }} />
                <img src={Cursor} style={{
                    position: 'absolute',
                    top: '750px',
                    right: '1000px',
                }} />
            </Row>
        </Row >
    )
}

export default Header