import Link from "next/link";
import styled from "styled-components";
import { Song } from "../../libs/interfaces/lyrics.interface";
import SongListItem from "../home/SongListItem";

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
            <Link key={song.id} href={`/lyrics/${song.id}`}>
                <a>
                    <SongListItem rank={index+1} songTitle={song.name} artistName={song.art.name} coverUrl={song.art.pic_medium}/>
                </a>
            </Link>
        ))}
        </ListContainer>
    )
}

export default RankList;