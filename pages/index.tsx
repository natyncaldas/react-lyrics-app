import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { SWRConfig } from "swr";
import MusicPlayerCard from "../components/home/MusicPlayerCard";
import RankList from "../components/home/RankList";
import DefaultLayout from "../layouts/DefaultLayout";
import useSongRank from "../libs/hooks/api/useSongRank";
import { Song } from "../libs/interfaces/song.interface";
import { vagalumeAPI } from "../libs/services/axios";

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Title = styled.p`
  max-width: 900px;
  font-size: 100px;
  font-family: "Poppins", sans-serif;
  color: white;
`;

const Home: NextPage = () => {
  const {rank, isLoading} = useSongRank();
  const [loading, setLoading] = useState(true);
  const randomItem = (items: Song[]) => {
    return items[Math.floor(Math.random()*items.length)];
  }
  const displaySong = useMemo(() => {
    if(rank) {
      return randomItem(rank.mus.day.all)
    }
  }, [rank]);

  useEffect(() => {
    if(!isLoading) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => {
        timeout
      }
    }else{
      setLoading(isLoading);
    }
  
  }, [isLoading])
  
    

  return (
    <DefaultLayout>
      <Row>
        <Title>Browse for lyrics from your favorite songs</Title>
        <MusicPlayerCard loading={loading} songTitle={displaySong?.name ?? ''} artistName={displaySong?.art.name ?? ''} coverUrl={displaySong?.art.pic_medium  ?? ''}/>
        <RankList songs={rank?.mus.day.all ?? []}/>
      </Row>
    </DefaultLayout>
  );
};

export async function getStaticProps () {
  const url = `/rank.php?${process.env.VAGALUME_API_KEY}&type=mus&scope=all&limit=20&period=week`;
  const rank = await vagalumeAPI.get(url);
  return {
    props: {
      fallback: {
        [url]: rank.data
      }
    }
  }
}

export default function Page({ fallback }:any) {
  return (
    <SWRConfig value={{ fallback }}>
      <Home />
    </SWRConfig>
  )
}

