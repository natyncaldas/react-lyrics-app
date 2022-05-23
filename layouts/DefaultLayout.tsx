import { ReactNode } from "react";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

interface LayoutProps {
    children: ReactNode;
}

const Body = styled.div`
    margin-top: 200px;
`;

const DefaultLayout = ({children}: LayoutProps) => {
    return(
        <>
            <Header/>
            <Body>
                {children}
            </Body>
            <Footer/>
        </>
    )
}
export default DefaultLayout;