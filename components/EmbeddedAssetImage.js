import React from 'react';

export default function EmbeddedAssetImage({ url }) {
  return (
    <>
      <img
        src={`https://${url}`}
        alt=""
      />
    </>
  );
}
