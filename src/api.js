export const getProperties = () => 
  fetch('http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json')
    .then(res => res.json());
