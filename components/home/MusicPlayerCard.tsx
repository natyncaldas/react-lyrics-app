import styled, { keyframes } from "styled-components";
import PlayIcon from "../../assets/icons/play.svg"
import NextIcon from "../../assets/icons/next.svg"
import BackIcon from "../../assets/icons/back.svg"

const Card = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 30px;
    width: 500px;
    background: rgb(16,21,25);
    background: -moz-linear-gradient(0deg, rgba(16,21,25,1) 0%, rgba(57,74,96,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(16,21,25,1) 0%, rgba(57,74,96,1) 100%);
    background: linear-gradient(0deg, rgba(16,21,25,1) 0%, rgba(57,74,96,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#101519",endColorstr="#394a60",GradientType=1);
    @media only screen and (max-width: 768px) {
        width: 300px;
    }
`;

const loading = keyframes`
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
`;

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity:1;
    }
`;

const CoverLoading = styled.div`
    background: linear-gradient(90deg, #e3e3e3, #9d8c94, #c1b5bb);
    background-size: 600% 600%;
    -webkit-animation: ${loading} 2s ease infinite;
    -moz-animation: ${loading} 2s ease infinite;
    animation: ${loading} 2s ease infinite;
    width: 400px;
    height: 400px;
    opacity:0.4;
    @media only screen and (max-width: 768px) {
        width: 250px;
        height: 250px;
    }
`;

const Cover = styled.img`
    width: 400px;
    height: 400px;
    object-fit: cover;
    animation: ${fadeIn} 1s linear 1;
    @media only screen and (max-width: 768px) {
        width: 250px;
        height: 250px;
    }
`;

const TitleContainer = styled.div`
    margin-top: 10px;
    max-width: 290px;
    overflow-x: hidden;
`;

const Title = styled.p<{isLoading:boolean}>`
    font-family: Helvetica Neue;
    font-size: 25px;
    font-weight: bold;
    white-space: nowrap;
    color: ${({isLoading}) => isLoading? 'transparent' : 'white'};
    ${({isLoading}) => isLoading && 'opacity:  0.2;'}
    ${({isLoading}) => isLoading && 'background:  linear-gradient(90deg, #e3e3e3, #9d8c94, #c1b5bb);'}
    ${({isLoading}) => isLoading && 'animation: ${loading} 2s ease infinite;'}
`;

const Text = styled.p<{isLoading:boolean}>`
    font-family: Helvetica Neue;
    font-size: 18px;
    color: ${({isLoading}) => isLoading? 'transparent' : 'white'};
    ${({isLoading}) => isLoading && 'opacity:  0.2;'}
    ${({isLoading}) => isLoading && 'background:  linear-gradient(90deg, #e3e3e3, #9d8c94, #c1b5bb);'}
    ${({isLoading}) => isLoading && 'animation: ${loading} 2s ease infinite;'}
`;

const progress = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;

const Line = styled.div`
    width: 90%;
    background-color: #718083;
    margin-top: 11px;
    opacity: 0.6;
    border-radius: 50px;
`;

const Progress = styled.div`
    width: 0%;
    height: 5px;
    background-color: white;
    border-radius: 50px;
    animation: ${progress} 20s linear infinite;
`;

const Player = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
`;

const Back = styled(BackIcon)`
    margin: 20px;
`;

const Play = styled(PlayIcon)`
    margin: 20px;
    &:hover{
        fill: lightgreen;
    }
`;

const Next = styled(NextIcon)`
    margin: 20px;
`;

interface MusicPlayerCardProps {
    loading: boolean;
    coverUrl: string
    songTitle: string
    artistName: string
}

const MusicPlayerCard = ({loading, coverUrl, songTitle, artistName}:MusicPlayerCardProps) => {
    return (
        <Card>
            {loading?
                <CoverLoading/>
                :
                <Cover src={coverUrl}/>
            }
            <TitleContainer>
                <Title isLoading={loading}>{songTitle}</Title>
            </TitleContainer>
            <Text isLoading={loading}>{artistName}</Text>
            <Line>
                <Progress/>
            </Line>
            <Player>
                <Back width={25} height={25} fill='white'/>
                <Play width={60} height={60} fill='white'/>
                <Next width={25} height={25} fill='white'/>
            </Player>
        </Card>
    )
}

export default MusicPlayerCard