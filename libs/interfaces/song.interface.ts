export interface Song {
    "id": string,
    "name": string,
    "url": string,
    "uniques": string,
    "views": string,
    "art": {
        "id": string,
        "name": string,
        "url": string,
        "pic_small": string,
        "pic_medium": string
    }
}

export interface SongRank {
    "mus": {
        "day": {
          "period": {
            "year": string,
            "day": string,
            "month": string
          },
          "all": Song[]
        }
      }
}