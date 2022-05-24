import Link from "next/link";
import styled from "styled-components";
import { Song } from "../../libs/interfaces/lyrics.interface";
import SongListItem from "../home/SongListItem";

interface SonglistProps {
    songs: {
        id: string,
        title:string,
        band:string
    }[];
}

const ListContainer = styled.div`
    margin-top: 100px;
    width: 100%;
`;

const SongList = ({songs}:SonglistProps) => {
    return(
        <ListContainer>
        {songs.map((song)=>(
            <Link key={song.id} href={`/lyrics/${song.id}`}>
                <a>
                    <SongListItem songTitle={song.title} artistName={song.band} hasCover={false} hasRank={false}/>
                </a>
            </Link>
        ))}
        </ListContainer>
    )
}

export default SongList;