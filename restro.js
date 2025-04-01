// const API_KEY = 'OOWXpoUEONXfPKhYRwT7vd6WbQSySDXYWeyJMBpMjMthbe40KbNMZomD';
// const query = 'indian food top view vegetable cut';

// async function fetchVideo() {
//   try {
//     const response = await fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=1`, {
//       headers: {
//         Authorization: API_KEY
//       }
//     });

//     if (!response.ok) {
//       throw new Error('Failed to fetch video');
//     }

//     const data = await response.json();
//     const videoUrl = data.videos[0]?.video_files?.find(file => file.width >= 1280)?.link || data.videos[0]?.video_files[0]?.link;

//     if (videoUrl) {
//       const videoBackground = document.getElementById('video-background');
//       videoBackground.innerHTML = `<video autoplay loop muted playsinline id="bg-video">
//         <source src="${videoUrl}" type="video/mp4">
//         Your browser does not support HTML5 video.
//       </video>`;

//       // Container styles to ensure full-screen coverage
//       videoBackground.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         overflow: hidden;
//         z-index: -1;
//       `;

//       // Video styles to cover all white space
//       const bgVideo = document.getElementById('bg-video');
//       bgVideo.style.cssText = `
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         width: 100vw;
//         height: 100vh;
//         object-fit: cover;
//         min-width: 100vw;
//         min-height: 100vh;
//       `;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchVideo();
const API_KEY = 'OOWXpoUEONXfPKhYRwT7vd6WbQSySDXYWeyJMBpMjMthbe40KbNMZomD';
const query = 'indian food top view vegetable cut';

async function fetchVideo() {
  try {
    const response = await fetch(`https://api.pexels.com/videos/search?query=${query}&per_page=1`, {
      headers: {
        Authorization: API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch video');
    }

    const data = await response.json();
    const videoUrl = data.videos[0]?.video_files?.find(file => file.width >= 1280)?.link || data.videos[0]?.video_files[0]?.link;

    if (videoUrl) {
      const bgVideo = document.getElementById('bg-video');
      bgVideo.innerHTML = `<source src="${videoUrl}" type="video/mp4">`;
    }
  } catch (error) {
    console.error(error);
  }
}

fetchVideo();
