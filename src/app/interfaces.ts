export interface IYoutubeVideoSearch {
  kind: string
  etag: string
  items: Array<IVideoSearchResult>
  nextPageToken: string
  pageInfo: {
    totalResults: number
    resultsPerPage: string
  }
  regionCode: string
}

export interface IVideoSearchResult {
  kind: string
  etag: string
  id: {
    kind: string
    videoId: string
  }
  snippet: {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishedAt: string
    thumbnails: {
      default: {
        height: number
        url: string
        width: number
      }
      medium: {}
      high: {}
    }
    title: string
  }
}

export interface IGetWorkoutsResponse {
  id: string
  name: string
  exercises: string[]
  restBetweenExercise: number
  exerciseDuration: number
  description?: string
  track?: string
}

export interface IHearThisTrack {
  permalink: string
  description?: string
  genre?: string
  title: string
  permalink_url: string
  artwork_url?: string
  user: {
    username: string
    permalink_url: string
    avatar_url?: string
  }
  stream_url?: string
  preview_url?: string
}

export interface IHearThisSearchResult {
  id: string // "48250"
  created_at: string // "2014-07-06 13:05:10",
  user_id: string // "7",
  duration: string // "7376",
  permalink: string // "shawne-back-to-the-roots-2-05072014",
  description: string // "Years: 2000 - 2005\r\nSet Time: Warm Up (11 pm - 01 am)\r\n",
  downloadable: string // "1",
  genre: string // "Drum & Bass",
  genre_slush: string // "drumandbass",
  title: string // "Shawne @ Back To The Roots 2 (05.07.2014)",
  uri: string // "https:\/\/api-v2.hearthis.at\/\/shawne-back-to-the-roots-2-05072014\/",
  permalink_url: string // "http:\/\/hearthis.at\/\/shawne-back-to-the-roots-2-05072014\/",
  artwork_url: string // "http:\/\/hearthis.at\/_\/cache\/images\/track\/500\/801982cafc20a06ccf6203f21f10c08d_w500.png",
  background_url: string // "",
  waveform_data: string // "http:\/\/hearthis.at\/_\/wave_data\/7\/3000_4382f398c454c47cf171aab674cf00f0.mp3.js",
  waveform_url: string // "http:\/\/hearthis.at\/_\/wave_image\/7\/4382f398c454c47cf171aab674cf00f0.mp3.png",
  user: {
    id: string // "7",
    permalink: string // "shawne",
    username: string // "Shawne (hearthis.at)",
    uri: string // "https:\/\/api-v2.hearthis.at\/shawne\/",
    permalink_url: string // "http:\/\/hearthis.at\/shawne\/",
    avatar_url: string // "http:\/\/hearthis.at\/_\/cache\/images\/user\/512\/06a8299b0e7d8f2909a22697badd7c09_w512.jpg"
  }
  stream_url: string // "http:\/\/hearthis.at\/shawne\/shawne-back-to-the-roots-2-05072014\/listen\/",
  download_url: string // "http:\/\/hearthis.at\/shawne\/shawne-back-to-the-roots-2-05072014\/download\/",
  playback_count: string // "75",
  download_count: string // "9",
  favoritings_count: string // "7",
  favorited: boolean // false,
  comment_count: string // "0"
  preview_url?: string
}

export interface IHearThisTrackResult {
  id: string // "1685882"
  created_at: string // "2017-12-24 20:44:21",
  release_date: string // "2017-12-24 20:44:21",
  release_timestamp: number // 1514144661,
  user_id: string // "5297338",
  duration: string // "370",
  permalink: string // "survivor-eye-of-the-tigerimaxx-remix",
  description: string // "Survivor - Eye Of The Tiger ( Imaxx Remix )
  // 2K18\npour suivre mon actue musical:
  // voir les liens: \nhearthis.at / imaxx - ableton\nsoundcloud.com /
  // imaxxdj30\nbeatport.com / search / tracks ? q = Imaxx\nfacebook.com /
  // imaxx  ",
  geo: string // "",
  tags: string // "Survivor,-,Eye,Of,The,Tiger,(,Imaxx,Remix,),2K18,survivor eye of tiger,remix roky",
  taged_artists: string // "",
  bpm: string // "130",
  key: string // "Cm",
  license: string // "all",
  version: string // "Offical 201",
  type: string // "Remix",
  downloadable: string // "0",
  genre: string // "Electro",
  genre_slush: string // "electro",
  title: string // "Survivor - Eye Of The Tiger (Imaxx Remix )(Téléchargement Légale Official )",
  uri: string // "https://api-v2.hearthis.at/imaxx-ableton/survivor-eye-of-the-tigerimaxx-remix/",
  permalink_url: string // "https://hearthis.at/imaxx-ableton/survivor-eye-of-the-tigerimaxx-remix/",
  thumb: string // "https://images.hearthis.at/1/5/1/_/uploads/5297338/image_track/1685882/w200_h200_q70_----1514144658.jpg",
  artwork_url: string // "https://images.hearthis.at/1/5/1/_/uploads/5297338/image_track/1685882/w500_q70_----1514144658.jpg",
  artwork_url_retina: string // "https://images.hearthis.at/1/5/1/_/uploads/5297338/image_track/1685882/w1000_q70_----1514144658.jpg",
  background_url: string // "https://images.hearthis.at/1/5/1/_/uploads/5297338/
  // image_track / 1685882 / w565_h565_c000000_q70_----1514144658.jpg",
  waveform_data: string // "https://hearthis.at/_/wave_data/5297338/3000_943b7b559de4aefd4ed47e4258784287.mp3_1514144661.js",
  waveform_url: string // "https://hearthis.at/_/cache/waveform_mask/1/6/1685882.png",
  user: {
    id: string // "5297338",
    permalink: string // "imaxx-ableton",
    username: string // "Imaxx",
    uri: string // "https://api-v2.hearthis.at/imaxx-ableton/",
    permalink_url: string // "https://hearthis.at/imaxx-ableton/",
    avatar_url: string // "https://images.hearthis.at/0/7/d/_/cache/images/remote/w512_q70_----07d81941460c910a432ad56c03ef0055.jpg"
  }
  stream_url: string // "https://hearthis.at/imaxx-ableton/survivor-eye-of-the-tigerimaxx-remix/listen/?s=S7Y",
  preview_url: string // "https://preview.hearthis.at/files/943b7b559de4aefd4ed47e4258784287.mp3",
  download_url: string // "",
  playback_count: string // "63",
  download_count: string // "1",
  favoritings_count: string // "7",
  reshares_count: string // "6",
  comment_count: string // "3",
  played: boolean // false,
  favorited: boolean // false,
  reshared: boolean // false
}
