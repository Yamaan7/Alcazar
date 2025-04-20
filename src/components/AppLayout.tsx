import React from "react";
import { Layout } from "antd";
import noise from '../../src/assets/TokenIcon/Navbar/noise.png';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Layout style={{
      backgroundColor: "rgba(4, 40, 21, 1)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      // height: '100vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative', // Add this
      overflow: 'hidden', // Add this to contain the pseudo-element
    }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${noise})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
        }}
      />
      <Content style={{
        maxWidth: '1440px',
        width: '100%',
        position: 'relative', // Add this to place content above the background
        zIndex: 1, // Add this to place content above the background
      }}>{children}</Content>
    </Layout>
  );
};

export default AppLayout;
