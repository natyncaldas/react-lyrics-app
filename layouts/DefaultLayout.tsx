import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

interface LayoutProps {
    children: ReactNode;
}

const Layout = styled.div`
    position: relative;
`;

const Body = styled.div`
    padding: 200px 50px 500px 50px;
`;

const DefaultLayout = ({children}: LayoutProps) => {
    return(
        <Layout>
            <Header/>
            <Body>
                {children}
            </Body>
            <Footer/>
        </Layout>
    )
}
export default DefaultLayout;