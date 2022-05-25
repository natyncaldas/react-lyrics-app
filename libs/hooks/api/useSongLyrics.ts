import useSWR from "swr";
import { SongLyrics } from "../../interfaces/lyrics.interface";
import { vagalumeAPI } from "../../services/axios";

const useSongLyrics = (id:string) => {
    const url = `/search.php?musid=${id}&extra=relmus,alb`;
    const fetcher = (url:string) : Promise<SongLyrics> => vagalumeAPI.get(url).then(res => res.data);

    const { data, error } = useSWR( url, fetcher )

    return {
      lyrics: data,
      isLoading: !error && !data,
      isError: error
    }
  }

export default useSongLyrics;