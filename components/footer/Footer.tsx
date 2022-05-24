import styled from "styled-components";
import vagalume from '../../assets/images/vagalume.png'
import Image from 'next/image'

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 50px;
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: #1e314a;
    bottom: 0px;
    padding: 10px;
    margin-top: 300px;
`;
const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between
`;
const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;
const Text = styled.p`
    font-family: Helvetica Neue;
    color: white;
`;

const Footer = () => {
    return (
        <Container>
            <Row>
                <Text>react-lyrics-app</Text>
                <Text>Version 0.1.0</Text>
            </Row>
            <Column>
                <Text>Powered by <a target="_blank" rel="noopener noreferrer" href="https://api.vagalume.com.br" >Vagalume API</a></Text>
                <Image src={vagalume} alt='vagalume logo' />
            </Column>
        </Container>
    )
}
export default Footer;