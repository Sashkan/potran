import React from "react";

type Props = {
  url: string;
  title: string;
};

export const Youtube = ({ url, title }: Props) => {
  return (
    <iframe
      width='560'
      height='315'
      src={`https://www.youtube.com/embed?v=${url}&output=embed`}
      title={title}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      allowFullScreen
    ></iframe>
  );
};
