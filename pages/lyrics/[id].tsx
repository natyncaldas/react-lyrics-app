import { GetServerSideProps } from "next"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { SWRConfig } from "swr"
import DefaultLayout from "../../layouts/DefaultLayout"
import useSongLyrics from "../../libs/hooks/api/useSongLyrics"
import { SongLyrics } from "../../libs/interfaces/lyrics.interface"
import { vagalumeAPI } from "../../libs/services/axios"

interface SongLyricsProps {
  id: string;
}

const Container = styled.div`
  width: 100%;
  padding: 30px;
  background-color: white;
  opacity: 0.7;
`;

const Title = styled.p`
  font-size: 50px;
  font-family: "Poppins", sans-serif;
  color: black;
  text-align: center;
`;

const Lyrics = styled.p`
  font-family: Helvetica Neue;
  white-space:pre-line;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
`;

const LyricsPage = ({id}: SongLyricsProps) => {
  const {lyrics} = useSongLyrics(id);
  const [lyricsInfo, setLyricsInfo] = useState<SongLyrics>();

  useEffect(() => {
    setLyricsInfo(lyrics)}
  , [lyrics]);

  return(
      <DefaultLayout>
          <Container>
                <Title>{lyricsInfo?.mus[0].name}</Title>
                <Lyrics>{lyricsInfo?.mus[0].text}</Lyrics>
          </Container>
      </DefaultLayout>
  )
}

export default function Page({ fallback, id }:any) {
    return (
      <SWRConfig value={{ fallback }}>
        <LyricsPage id={id}/>
      </SWRConfig>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  const fallback:any = {};
  const url = `/search.php?apikey=${process.env.VAGALUME_API_KEY}&musid=${query.id as string}&extra=relmus,alb`;
  let notFound = false;
  try {
    const lyrics = await vagalumeAPI.get(url);
    if (lyrics) {
      fallback[url] = lyrics.data;
      notFound = lyrics.data?.type === 'notfound';
    }

  } catch (error) {
    fallback[url] =
      {};
  }
  return (
    notFound?
      { notFound: true }
      :
      {
        props: {
          fallback,
          id: query.id,
        },
      }
  );
};


