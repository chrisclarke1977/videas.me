import React from 'react';

interface VideoProps {
  src: string;
  width: number;
}

const Video: React.FC<VideoProps> = ({ src, width }) => {
  return (
    <video width={width}>
      <source src={src} type="video/mp4"></source>
    </video>
  );
};

export default Video;
