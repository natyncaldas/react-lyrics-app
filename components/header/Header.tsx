import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import Cleve from '../../assets/icons/cleve.svg';
import Silence from '../../assets/icons/silence.svg';
import useWindowSize from '../../libs/hooks/useWindowSize';
import SearchBar from '../globals/SearchBar';

const Container = styled.div<{opacity:boolean}>`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: black;
    opacity: ${({opacity}) => opacity ? '0.6': '1'};
    padding: 5px 10px 10px 0px;
    z-index: 999;
`;

const CompassBox = styled.div`
    display: flex;
    flex-flow: column nowrap;
    position: relative;
    width: 100%;
    height: 50px;
    border: 1px solid white;
    border-left-width: 2px;
    margin: 20px 10px 0px 10px;
`;

const CleveIcon = styled(Cleve)`
    position: absolute;
    width: 80px;
    height: 80px;   
    margin: -15px 0 0 -15px;
    cursor: pointer;
`;

const SilenceIcon = styled(Silence)`
    position: absolute;
    width: 35px;
    height: 35px;   
    top: 8px;
    right: 510px;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: white;
    margin-top: 11px;
`;

const SearchContainer = styled.div`
    position: absolute;
    width: 500px;
    height: 30px;
    background-color: white;
    border-radius: 50px;
    top: 9px;
    right: 10px;
    @media only screen and (max-width: 768px) {
        width: 80%;
    }
`;

const Header = () => {
    const router = useRouter();
    const {isMobile} = useWindowSize();
    const [opacity, setOpacity] = useState(true)

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () =>
            setOpacity(window.pageYOffset < 120)
          );
        }
      }, []);
    
    return(
        <Container opacity={opacity}>
            <CompassBox>
                <CleveIcon onClick={()=>router.push('/')}/>
                {!isMobile && <SilenceIcon/>}
                <Line/>
                <Line/>
                <Line/>
                <SearchContainer>
                    <SearchBar/>
                </SearchContainer>
            </CompassBox>
        </Container>
    )
}
export default Header;