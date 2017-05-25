import React from 'react';
import VideoResult from './VideoResult.jsx';

const VideoColumn = (props) => {
  return (
    <div className="videocolumn col-12">

      {props.videos.map((video, index) => {
        if (index !== 0) {
          return (
            <VideoResult
              key={video.id.videoId}
              video={video}
              index={index}
              handleVideoClick={props.handleVideoClick}
            />
          );
        }
      })}

    </div>
  );
};

export default VideoColumn;




// <List style={{width: "35%", display: "inline-block", margin: "10px 0 0 25px", verticalAlign: "top", backgroundColor: "white"}}>
//       {props.videos.map((video, index) => {
//         if (index !== 0) {
//           return (
//             <VideoThumb
//               video={video}
//               key={video.id.videoId}
//               index={index}
//               handleVideoClick={props.handleVideoClick}
//             />
//           );
//         }
//       })}
//     </List>