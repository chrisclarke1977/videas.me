import React from 'react';

interface VideoProps {
  className: string;
  src: string;
  width?: string;
}

const Video: React.FC<VideoProps> = ({ className, src, width = '100%' }) => {
  return (
    <video className={className} width={width}>
      <source src={src} type="video/mp4"></source>
    </video>
  );
};

export default Video;
