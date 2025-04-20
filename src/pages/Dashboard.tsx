import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowToGetStarted from "@/components/HowToGetStarted";
import Navbar from "@/components/Navbar";
import RaffleSlider from "@/components/Raffles2";
import Raffles from "@/components/Raffles";
import Roadmap from "@/components/Roadmap";
import LoginForm from "@/components/LogInForm";
import SignupForm from "@/components/SignupForm";
import useBreakpoint from "@/hooks/useBreakpoint";
import { Layout } from "antd";
import ForgotStep1 from "@/components/ForgotStep1";
import ForgotStep2 from "@/components/ForgotStep2";
import ForgotStep3 from "@/components/ForgotStep3";

interface DashboardProps {
  updateAuthStatus: (isAuthenticated: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ updateAuthStatus }) => {
  return <Layout style={{
    maxWidth: '1440px',
    width: '100%',
    background: 'transparent',
  }}>
    <LoginForm updateAuthStatus={updateAuthStatus} />
    <ForgotStep3 />
    <ForgotStep2 />
    <ForgotStep1 />
    <SignupForm />
    {/* <Navbar />
    <Header />
    <HowToGetStarted />
    <RaffleSlider />
    <Raffles />
    <Roadmap />
    <FAQ />
    <Footer /> */}
  </Layout>;
};

export default Dashboard;
