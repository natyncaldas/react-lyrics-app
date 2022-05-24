import useSWR from "swr";
import { SearchInterface, SongLyrics } from "../../interfaces/lyrics.interface";
import { vagalumeAPI } from "../../services/axios";

const useLyricsSearch = (search:string) => {
    const url =`/search.excerpt?q=${search}&limit=10`;
    const fetcher = (url:string) : Promise<SearchInterface> => vagalumeAPI.get(url).then(res => res.data);

    const { data, error } = useSWR( url, fetcher )

    return {
      songs: data,
      isLoading: !error && !data,
      isError: error
    }
  }

export default useLyricsSearch;