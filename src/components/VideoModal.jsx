import React, { useEffect } from "react";

// src can be an .mp4 path (e.g. /videos/fabricguard.mp4) or an embed URL (Google Drive /preview, YouTube /embed/...)
const VideoModal = ({ src, title, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isFile = /\.(mp4|webm)$/i.test(src);

  return (
    <div className="video-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="video-box" onClick={(e) => e.stopPropagation()}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <strong>{title}</strong>
          <button className="btn-close" aria-label="Close video" onClick={onClose}></button>
        </div>
        <div className="ratio ratio-16x9">
          {isFile ? (
            <video src={src} controls autoPlay playsInline />
          ) : (
            <iframe src={src} title={title} allow="autoplay; fullscreen" allowFullScreen />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;