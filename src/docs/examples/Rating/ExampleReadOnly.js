import React from 'react';
import Rating from 'ghg-react/Rating';

/** Read-Only */
export default function ExampleReadOnly() {
  return <Rating readonly={true} defaultValue={3} />
}