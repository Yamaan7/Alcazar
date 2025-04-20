import { Button, Menu, MenuProps, Row, Drawer } from 'antd'
import React, { useState, useEffect } from 'react'
import logo from '@/assets/TokenIcon/Navbar/logo.svg'
import menu from '@/assets/TokenIcon/Navbar/menu.svg'
import close from '@/assets/TokenIcon/Navbar/close.svg'
import twitter from '../../src/assets/TokenIcon/Footer/twitter.svg'
import telgram from '../../src/assets/TokenIcon/Footer/telegram (1).svg'
import mail from '../../src/assets/TokenIcon/Footer/mail.svg'
import noise from '../../src/assets/TokenIcon/Navbar/noise.png';
import { useBreakpoint } from '@/hooks'
import { Typography, Image } from 'antd';
const { Text } = Typography;
import '../../src/styles/styles.scss'

const Navbar = () => {
    const [current, setCurrent] = useState('mail');
    const [drawerVisible, setDrawerVisible] = useState(false);
    const { md } = useBreakpoint();

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const toggleDrawer = () => {
        if (!md) {
            setDrawerVisible(!drawerVisible);
        }
    };

    useEffect(() => {
        if (md) {
            setDrawerVisible(false);
        }
    }, [md]);

    const menuStyle = {
        width: '565px',
        display: md ? 'flex' : 'none',
        '& .ant-menu-item': {
            marginRight: '32px !important',
            marginLeft: '0 !important',
        },
        '& .ant-menu-item:last-child': {
            marginRight: '0 !important',
        },
    };

    return (
        <>
            <Row style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: md ? '24px 32px' : '20px 15px',
                position: 'relative',
                zIndex: drawerVisible ? 1001 : 'auto',
            }}>
                <img src={logo} alt="Logo" />
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={menuStyle}
                    className="custom-menu"
                />
                <Row style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                }}>
                    <Button size='large'>Buy Tickets</Button>
                    <img
                        src={drawerVisible ? close : menu}
                        alt={drawerVisible ? "Close" : "Menu"}
                        style={{
                            display: md ? 'none' : 'flex',
                            cursor: 'pointer'
                        }}
                        onClick={toggleDrawer}
                    />
                </Row>
            </Row>
            {!md && (
                <Drawer
                    placement="top"
                    closable={false}
                    onClose={toggleDrawer}
                    visible={drawerVisible}
                    height="100vh"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        marginTop: '95px',
                        padding: 0,
                        boxShadow: 'none',
                        backgroundColor: "rgba(4, 40, 21, 1)",
                    }}
                    bodyStyle={{ padding: 0 }}
                    maskStyle={{ backgroundColor: 'transparent' }}
                >
                    <Menu
                        onClick={(e) => {
                            onClick(e);
                            toggleDrawer();
                        }}
                        selectedKeys={[current]}
                        mode="vertical"
                        items={items}
                        style={{
                            width: '100%',
                            padding: '16px',
                            fontSize: '32px',
                        }}
                    />
                    <Row style={{
                        alignItems: 'center',
                        gap: '32px',
                        margin: '32px',
                    }}>
                        <img src={twitter} width={48} height={48} />
                        <img src={mail} width={48} height={48} />
                        <img src={telgram} width={48} height={48} />
                    </Row>
                </Drawer>
            )}
        </>
    )
}

export default Navbar

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