import styled from "styled-components";
import { Song } from "../../libs/interfaces/song.interface";
import RankListItem from "./RankListItem";

interface RanklistProps {
    songs: Song[];
}

const ListContainer = styled.div`
    margin-top: 100px;
    width: 100%;
`;

const RankList = ({songs}:RanklistProps) => {
    return(
        <ListContainer>
        {songs.map((song, index)=>(
            <RankListItem key={song.id} rank={index+1} songTitle={song.name} artistName={song.art.name} coverUrl={song.art.pic_medium}/>
        ))}
        </ListContainer>
    )
}

export default RankList;