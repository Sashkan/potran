"use client";

import ReactAudioPlayer from "react-audio-player";
import React from "react";

type Props = {
  src: string;
};

const AudioPlayer = ({ src }: Props) => {
  return (
    <ReactAudioPlayer
      src={src}
      autoPlay
      controls
      style={{
        width: "100%",
      }}
    />
  );
};

export default AudioPlayer;
