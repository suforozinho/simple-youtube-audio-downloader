const YoutubeMp3Downloader = require('youtube-mp3-downloader')

const YD = new YoutubeMp3Downloader({
  ffmpegPath: '/usr/bin/ffmpeg',
  outputPath: '/home/thomas/Music',
  youtubeVideoQuality: 'highest',
  queueParallelism: 2,
  progressTimeout: 2000
})

YD.download(process.argv[2])

YD.on('finished', (err, data) => {
  console.log(JSON.stringify(data))
})
