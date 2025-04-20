import { Collapse, CollapseProps, Row } from 'antd'
import React, { useState } from 'react'
import computer from '../../src/assets/TokenIcon/FAQ/Computer.svg'
import minus from '../../src/assets/TokenIcon/FAQ/minus.svg'
import plus from '../../src/assets/TokenIcon/FAQ/plus.svg'
import useBreakpoint from "@/hooks/useBreakpoint";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Typography, Image } from 'antd';

const { Text } = Typography;

const FAQ = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row
            className='FAQrow'
            style={{
                marginBottom: '100px',
                position: 'relative',
            }}>
            <Row style={{
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}>
                <Text style={{
                    color: 'var(--White, #F7F7F7)',
                    fontFamily: "ClashGrotesk",
                    fontSize: sm ? '100px' : '50px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: sm ? '120px' : '75px',
                    textTransform: 'capitalize',
                    marginBottom: sm ? '15px' : '0px',
                }}>FAQ</Text>
                <Text
                    className='stillHave'
                    style={{
                        color: 'var(--Green-1000, #E6FDC8)',
                        fontFamily: "ClashGrotesk",
                        fontSize: sm ? '50px' : '24px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: sm ? '75px' : '36px',
                        textTransform: 'capitalize',
                        marginBottom: xs ? '57.5px' : '39px',
                    }}>Still have Questions?</Text>
                <img src={computer}
                    className='computer'
                />
            </Row>

            <Row
                className='expandedComponent'
                style={{
                    marginLeft: md ? '96px' : '0px',
                    // paddingBottom: md ? '0px' : '591px',
                    width: '608px',
                    flexWrap: 'nowrap',
                    flexGrow: '1',
                    flexDirection: 'column',
                    alignItems: 'end',
                    justifyContent: 'end',
                }}>
                <div>
                    <ExpandedComponent />
                </div>
            </Row>
        </Row>
    )
}

export default FAQ




const ExpandedComponent = () => {
    const [activeKey, setActiveKey] = useState<string | string[]>(['1']);

    const onChange = (key: string | string[]) => {
        setActiveKey(key);
    };

    return (
        <Collapse
            items={items}
            activeKey={activeKey}
            onChange={onChange}
            expandIconPosition="end"
            expandIcon={expandIcon}
            accordion
            // collapsible='header'
            // destroyInactivePanel
            style={{
                width: '800px',
            }}
        >
        </Collapse>
    );
};




const expandIcon = (panelProps: any) => {
    const { isActive } = panelProps;
    return (
        <>
            {isActive ? (
                <img
                    src={minus}
                    alt="Collapse"
                    width={60}
                    height={60}
                    style={{
                        marginTop: '10px',
                    }}
                />
            ) : (
                <img
                    src={plus}
                    alt="Expand"
                    width={60}
                    height={60}
                    style={{
                        marginTop: '10px',
                    }}
                />
            )}
        </>
    );
};


const AnswerText = () => {
    return <Text style={{
        color: 'var(--Green-1000, #E6FDC8)',
        fontFamily: "ClashDisplay",
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '30px',
    }}> Our team has been building up reserves in cash and items ever since the project idea was born.In the backend of the dApp, our team will add those items up for raffles, along with many new items we will be purchasing for the community. < br /> <br /> The users will connect to the dApp with their web3 wallet, enabling them to purchase an entry ticket on any item they like.Ticket purchases have no limit and you may purchase as many as you want with one wallet.
        3 % of the purchases will go to a separate wallet which will be transparent to the community, and will regularly be used to buyback and burn $ALCAZAR tokens – making our token more scarce with every single purchase.</Text >;
}



const items: CollapseProps['items'] = [
    {
        key: '1',
        label: <Text style={{
            color: 'var(--Green-1000, #E6FDC8)',
            fontFamily: "ClashGrotesk",
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '36px',
            textTransform: 'capitalize',
        }}> How does it work ?</Text >,
        children: <AnswerText />,
    },
    {
        key: '2',
        label: <Text style={{
            color: 'var(--Green-1000, #E6FDC8)',
            fontFamily: "ClashGrotesk",
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '36px',
            textTransform: 'capitalize',
        }}>How will the winners be chosen?</Text>,
        children: <AnswerText />,

    },
    {
        key: '3',
        label: <Text style={{
            color: 'var(--Green-1000, #E6FDC8)',
            fontFamily: "ClashGrotesk",
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '36px',
            textTransform: 'capitalize',
        }}>How will the winner claim their prize?</Text>,
        children: <AnswerText />,
    },
    {
        key: '4',
        label: <Text style={{
            color: 'var(--Green-1000, #E6FDC8)',
            fontFamily: "ClashGrotesk",
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '36px',
            textTransform: 'capitalize',
        }}>When will the winners be chosen?</Text>,
        children: <AnswerText />,
    },
    {
        key: '5',
        label: <Text style={{
            color: 'var(--Green-1000, #E6FDC8)',
            fontFamily: "ClashGrotesk",
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '36px',
            textTransform: 'capitalize',
        }}>An example scenario</Text>,
        children: <AnswerText />,
    },
];