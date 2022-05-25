import styled, { keyframes } from "styled-components"
import ListIcon from "../../assets/icons/list.svg"

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to {
        opacity:1;
    }
`;

const Card = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    background: rgb(16,21,25);
    border-radius: 20px;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;
    animation: ${fadeIn} 1s linear 1;
    &:hover{
        background-color:var(--green);
    }
`;

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

const Cover = styled.img`
    width: 100px;
    height: 100px;
    margin: 0 10px 0 10px;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
    }
`;

const SongInfo = styled.div`
    max-width: 600px;
    overflow-x: hidden;
`;

const Rank = styled.p`
    font-size: 70px;
    font-family: "Poppins", sans-serif;
    color: transparent;
    -webkit-text-stroke: 2px white;
    opacity: 0.4;
`;

const Title = styled.p`
    font-family: Helvetica Neue;
    font-size: 18px;
    font-weight: bold;
    color: white;
`;

const Subtitle = styled(Title)`
    font-weight: normal;
    opacity: 0.7;
`;
const List = styled(ListIcon)`
    margin: 20px;
`;


interface RankListItemProps {
    rank?: number;
    coverUrl?: string
    songTitle: string
    artistName: string
    hasRank?: boolean
    hasCover?: boolean
    onClick?: ()=>void;
}

const SongListItem = ({rank, coverUrl, songTitle, artistName, hasRank=true, hasCover=true, onClick}: RankListItemProps) => {
    return (
        <Card onClick={onClick}>
            <Row>
                {hasRank && <Rank>#{rank}</Rank>}
                {hasCover && <Cover src={coverUrl}/>}
                <SongInfo>
                    <Title>{songTitle}</Title>
                    <Subtitle>{artistName}</Subtitle>
                </SongInfo>
            </Row>
            <Row>
                <List width={40} height={40} fill='white'/>
            </Row>
        </Card>
    )
}

export default SongListItem;