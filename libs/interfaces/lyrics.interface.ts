export interface Artist {
  "id": string,
  "name": string,
  "url": string,
  "pic_small": string,
  "pic_medium": string
}

export interface Song {
  "id": string,
  "name": string,
  "url": string,
  "uniques": string,
  "views": string,
  "art": Artist
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

export interface SearchInterface {
	"response": {
		"numFound": number,
		"start": number,
		"numFoundExact": boolean,
		"docs": 
			{
				"id": string,
				"langID"?: number,
				"url"?: string,
				"title": string,
				"band": string,
				"fmRadios"?: string[]
			}[],
	}
}

export interface SongLyrics {
	"type": string,
	"art": {
		"id": string,
		"name": string,
		"url": string
	},
	"mus": [
		{
			"id": string,
			"name": string,
			"url": string,
			"lang": number,
			"text": string,
      "translate": [
				{
					"id": string,
					"lang": number,
					"url": string,
					"text": string
        }
			],
			"related": [
				{
					"art": Artist,
          "mus": {
						"id": string,
						"lang": number,
						"name": string,
						"url": string,
						"pic_small": string,
						"pic_medium": string
					}
        },
        {
					"art": Artist,
          "mus": {
						"id": string,
						"lang": number,
						"name": string,
						"url": string,
						"pic_small": string,
						"pic_medium": string
					}
        },
        {
					"art": Artist,
          "mus": {
						"id": string,
						"lang": number,
						"name": string,
						"url": string,
						"pic_small": string,
						"pic_medium": string
					}
        },
        {
					"art": Artist,
          "mus": {
						"id": string,
						"lang": number,
						"name": string,
						"url": string,
						"pic_small": string,
						"pic_medium": string
					}
        }
      ],
      "alb": {
        "id": string,
        "name": string,
        "url": string,
        "year": string,
        "img": string
      }
    }
  ],
  badwords: false
}