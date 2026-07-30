import { useState } from 'react';
import './ImageSlot.css';

export function ImageSlot({
  src,
  alt,
  placeholder,
  radius = 12,
}: {
  src: string;
  alt: string;
  placeholder: string;
  radius?: number;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="image-slot image-slot--empty" style={{ borderRadius: radius }}>
        <span>{placeholder}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="image-slot"
      style={{ borderRadius: radius }}
      onError={() => setErrored(true)}
    />
  );
}
