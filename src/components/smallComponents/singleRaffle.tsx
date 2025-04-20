import { Button, Row } from "antd";
import { Typography, Image } from 'antd';
import minus from '@/assets/TokenIcon/Raffles/1 (1).svg'
import plus from '@/assets/TokenIcon/Raffles/1 (2).svg'

const { Text } = Typography;

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
        </Row>
    );
};

export default Raffle;