import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import { SWRConfig } from 'swr';
import SongList from '../../components/lyrics/SongList';
import DefaultLayout from '../../layouts/DefaultLayout'
import useLyricsSearch from '../../libs/hooks/api/useLyricsSearch'
import { vagalumeAPI } from '../../libs/services/axios';

interface LyricsProps {
  search: string
}

const Title = styled.p`
  font-size: 70px;
  font-family: "Poppins", sans-serif;
  color: white;
`;

const Lyrics = ({search}:LyricsProps) => {
  const {songs} = useLyricsSearch(search);

  return (
    <DefaultLayout>
      {search ?
        <Title>Showing results for &quot;{search}&quot;</Title>
      :
        <Title>Try searching for songs using the search bar</Title>
      }
      <SongList songs={songs?.response.docs ?? []}/>
    </DefaultLayout>
  )
}

export default function Page({ fallback, search }:any) {
  return (
    <SWRConfig value={{ fallback }}>
      <Lyrics search={search}/>
    </SWRConfig>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query
}) => {
  const fallback:any = {};
  const url =`/search.excerpt?q=${query.search ?? ''}&limit=10`;
  try {
    const lyrics = await vagalumeAPI.get(url);
    if (lyrics) {
      fallback[url] = lyrics.data;
    }

  } catch (error) {
    fallback[url] =
      {};
  }
  return (
      {
        props: {
          fallback,
          search: query.search ?? ''
        },
      }
  );
};
