import { Button, Col, Menu, MenuProps, Row } from 'antd'
import React, { useState } from 'react'
import { Typography, Image } from 'antd';
import logo from '../../src/assets/TokenIcon/Footer/logo (1).svg'
import point from '../../src/assets/TokenIcon/Footer/point.svg'
import twitter from '../../src/assets/TokenIcon/Footer/twitter.svg'
import telgram from '../../src/assets/TokenIcon/Footer/telegram (1).svg'
import mail from '../../src/assets/TokenIcon/Footer/mail.svg'
import useBreakpoint from "@/hooks/useBreakpoint";

const { Text } = Typography;

const Footer = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row
            className='footerBack'
            style={{
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                background: 'var(--Green-Black-100, #00160A)',
                paddingTop: '35px',
                paddingLeft: sm ? '60px' : '20px',
                paddingRight: '60px',
                // paddingBottom: '31px',
                // width: '1440px',
                // maxHeight: '292px',
                marginBottom: '100px',
            }}>
            <Col style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '48px',
                height: '100%',
            }}>
                <img src={logo} alt="LOGO" />


                <Row
                    className='pointAddress'
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '12px',
                    }}>
                    <img src={point} alt="" />
                    <Text style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashDisplay",
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '21px',
                    }}>70 First Floor, St Margaret’s way, <br /> Leicester,LE4 0BT</Text>
                </Row>


                <Row
                    className='socialIcons'
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                        marginLeft: md ? '10px' : '25px',
                        // flexDirection: md ? 'column' : 'row',
                    }}>
                    <img src={twitter} /><img src={mail} /><img src={telgram} />
                </Row>
            </Col>


            <Col style={{
                display: 'flex',
                flexDirection: md ? 'column' : 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: '100%',
            }}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} style={{ width: '450px', marginTop: '10px', marginBottom: '20px', }} className="custom-menu" />

            </Col>



            <Col
                className='emailSection'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    // height: '100%',
                }}>
                <Text style={{
                    color: 'var(--Green-1000, #E6FDC8)',
                    fontFamily: "ClashGrotesk",
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '36px',
                    textTransform: 'capitalize',
                    marginBottom: '12px',
                }}>Subscribe To Our Newsletter</Text>
                <Text style={{
                    color: 'var(--Green-1000, #E6FDC8)',
                    fontFamily: "ClashDisplay",
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '21px',
                    width: '386px',
                    marginBottom: '32px',
                }}>Don't miss out on all the latest updates on Alcazar & developments.</Text>
                <Row style={{
                    justifyContent: 'space-between',
                    gap: '8px',
                }}>
                    <input type="text" placeholder='Email' style={{
                        width: '205px',
                        height: '48px',
                        flexShrink: 0,
                        borderRadius: '16px',
                        border: '1px solid var(--Yellow-200, #FE6)',
                        padding: '12px',
                        background: 'transparent',
                        color: '#E6FDC8',
                    }} />
                    <Button style={{
                        width: '114px',
                        height: '48px',
                        flexShrink: 0,
                        borderRadius: '16px',
                        background: 'var(--Yellow-200, #FE6)',
                        color: 'black',
                    }}>Subscribe</Button>
                </Row>
                <Row style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '37px',
                    gap: '133px',
                }}>
                    <Text style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashDisplay",
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '18px',
                        marginTop: '37px',
                    }}>Privacy Policy</Text>
                    <Text style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashDisplay",
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '18px',
                        marginTop: '37px',
                    }}>Terms and Conditions</Text>
                </Row>
            </Col>
            <Col style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: sm ? '39px' : '475px',
                marginLeft: sm ? '' : '50px',
            }}>
                <Text
                    className='copyrightText'
                    style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashDisplay",
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '18px',
                        textAlign: 'center',
                        marginLeft: '20px',
                        // marginTop: '25px',
                    }}>Copyright 2023 All rights reserved</Text>
            </Col>
        </Row>
    )
}

export default Footer




type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'Home',
    },
    {
        label: 'How to get started',
        key: 'How to get started',
    }, {
        label: 'Raffles',
        key: 'Raffles',
    }, {
        label: 'Roadmap',
        key: 'Roadmap',
    }, {
        label: 'FAQ',
        key: 'FAQ',
    },
];