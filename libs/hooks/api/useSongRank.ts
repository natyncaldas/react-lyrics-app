import useSWR from "swr";
import { SongRank } from "../../interfaces/lyrics.interface";
import { vagalumeAPI } from "../../services/axios";

const useSongRank = () => {
    const url = `/rank.php?type=mus&scope=all&limit=20&period=day`;
    const fetcher = (url:string) : Promise<SongRank> => vagalumeAPI.get(url).then(res => res.data);

    const { data, error } = useSWR( url, fetcher )

    return {
      rank: data,
      isLoading: !error && !data,
      isError: error
    }
  }

export default useSongRank;