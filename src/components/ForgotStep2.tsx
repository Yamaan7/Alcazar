import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import logo from '@/assets/TokenIcon/LogInForm/Frame 4033 (1).svg';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useBreakpoint from "@/hooks/useBreakpoint";

const { Title, Text } = Typography;

const ForgotStep2: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const email = location.state?.email || '';


    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        navigate('/forgot-password-step3', { state: { email: email } });
    };

    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', width: '100%', height: '100vh' }}>
            <Col style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
                <div style={{ textAlign: 'center', marginBottom: '24px', justifyContent: 'center', alignItems: 'center', }}>
                    <img src={logo} alt="Logo" style={{ width: '200px', marginBottom: '40px' }} />
                </div>

                <Form
                    name="login"
                    layout="vertical"
                    onFinish={onFinish}
                    style={{
                        display: 'flex',
                        background: 'var(--Tertiary-700, #082A1A)',
                        padding: '50px',
                        borderRadius: '20px',
                        boxShadow: '3px 4px 40px 0px rgba(0, 0, 0, 0.05)',
                        border: '1px solid var(--Primary-50, #F8D049)',
                        width: '500px',
                    }}
                >
                    <Row style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: '40px',
                        width: '100%',
                    }}>
                        <div style={{
                            textAlign: 'center',
                        }}><Text style={{

                            fontFamily: 'Inter',
                            fontSize: '20px',
                            fontWeight: 600,
                        }}>Forgot password?</Text>
                        </div>

                        <div style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}>
                            <Text style={{
                                textAlign: 'center',
                            }}>
                                Hi {email}, <br />
                                You have requested to change your password. <br />
                                Through this email we just check if it really is you.
                            </Text>
                        </div>

                        <div style={{
                            textAlign: 'center',
                        }}>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size='large'
                                    style={{
                                        backgroundColor: 'var(--Primary-50, #F8D049)', // Yellow background color
                                        borderColor: '#fadb14',
                                        color: '#000',
                                    }}
                                >
                                    Recover password
                                </Button>
                            </Form.Item>
                        </div>
                    </Row>
                </Form>

                <Text style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
                    Need an account? <Link to="/sign-up" style={{
                        fontWeight: 'bold',
                        color: 'white',
                    }}>Sign up</Link>
                </Text>
            </Col>
        </Row >
    );
};

export default ForgotStep2;
