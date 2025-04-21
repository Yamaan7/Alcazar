import React from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import logo from '@/assets/TokenIcon/LogInForm/Frame 4033.svg';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import useBreakpoint from "@/hooks/useBreakpoint";
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const SignupForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px', width: '100%', height: '100vh', }}>
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
                        }}>Create account</Text>
                        </div>

                        <div>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your email address!' }]}
                            >
                                <Input
                                    placeholder="Email address"
                                    size='large'
                                    style={{
                                        backgroundColor: 'var(--Tertiary-800, #0B3421)', // Green background color
                                        borderColor: 'transparent',
                                        borderRadius: '8px',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    placeholder="Password"
                                    size='large'
                                    iconRender={visible =>
                                        visible ? <EyeTwoTone twoToneColor="#ffffff" /> : <EyeInvisibleOutlined style={{ color: '#ffffff' }} />
                                    }
                                    style={{
                                        backgroundColor: 'var(--Tertiary-800, #0B3421)', // Green background color
                                        borderColor: 'transparent',
                                        borderRadius: '8px',
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="confirmPassword"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password
                                    placeholder="Confirm Password"
                                    size='large'
                                    iconRender={visible =>
                                        visible ? <EyeTwoTone twoToneColor="#ffffff" /> : <EyeInvisibleOutlined style={{ color: '#ffffff' }} />
                                    }
                                    style={{
                                        backgroundColor: 'var(--Tertiary-800, #0B3421)', // Green background color
                                        borderColor: 'transparent',
                                        borderRadius: '8px',
                                    }}
                                />
                            </Form.Item>


                        </div>

                        <div>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size='large'
                                    style={{
                                        backgroundColor: 'var(--Primary-50, #F8D049)', // Yellow background color
                                        borderColor: '#fadb14',
                                        color: '#000',
                                        width: '100%', // Full width button
                                    }}
                                >
                                    Create an account
                                </Button>
                            </Form.Item>
                        </div>
                    </Row>
                </Form>

                <Text style={{ display: 'block', textAlign: 'center', marginTop: '20px' }}>
                    Already have an account? <Link to="/login" style={{
                        fontWeight: 'bold',
                        color: 'white',
                    }}>Login</Link>
                </Text>

                <Button
                    type="link"
                    size='large'
                    style={{
                        color: '#F8D049',
                        marginTop: '10px',
                    }}
                >
                    <Link to="/main" style={{ color: 'inherit' }}>
                        Continue as Guest
                    </Link>
                </Button>
            </Col>
        </Row >
    );
};

export default SignupForm;
