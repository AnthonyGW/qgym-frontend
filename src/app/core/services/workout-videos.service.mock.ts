import { of } from 'rxjs'

export class WorkoutVideosServiceMock {
  mockVideoList = {
    kind: 'sample',
    etag: 'sample',
    id: { kind: 'sample', videoId: 'sample' },
    snippet: {
      channelId: 'sample',
      channelTitle: 'sample',
      description: 'sample',
      liveBroadcastContent: 'sample',
      publishedAt: 'sample',
      thumbnails: {
        default: { height: 200, url: 'sample', width: 200 },
        medium: {},
        high: {},
      },
      title: 'sample',
    },
  }

  mockVideoResult = {
    kind: 'sample',
    etag: 'sample',
    items: [this.mockVideoList, this.mockVideoList],
    nextPageToken: 'sample',
    pageInfo: { totalResults: 10, resultsPerPage: 10 },
    regionCode: 'sample',
  }
  searchYoutubeVideos(searchTerm) {
    return of(this.mockVideoResult)
  }
}
