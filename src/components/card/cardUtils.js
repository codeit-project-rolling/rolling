/* eslint-disable max-len */
export const cardBackgroundSvg = (type) => {
  switch (type) {
    case 'blue':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
          <path
            d="M74.4299 16.6978C88.1712 -5.00283 119.829 -5.00284 133.57 16.6978L202.482 125.526C217.239 148.829 200.495 179.25 172.912 179.25H35.0878C7.5049 179.25 -9.23877 148.829 5.51768 125.526L74.4299 16.6978Z"
            fill="#9DDDFF"
          />
        </svg>
      );
    case 'green':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
          <g clipPath="url(#clip0_1_787)">
            <rect y="6" width="336" height="169" rx="84.5" fill="#9BE282" fillOpacity="0.3" />
          </g>
          <defs>
            <clipPath id="clip0_1_787">
              <rect width="142" height="142" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'beige':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
          <path
            d="M21 57C21 28.8335 43.8335 6 72 6H302C330.167 6 353 28.8335 353 57V273C353 301.167 330.167 324 302 324H72C43.8335 324 21 301.167 21 273V57Z"
            fill="#FFD382"
            fillOpacity="0.7"
          />
        </svg>
      );
    case 'purple':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="142" height="142" viewBox="0 0 142 142" fill="none">
          <g clipPath="url(#clip0_1_726)">
            <rect y="6" width="336" height="169" rx="84.5" fill="#DCB9FF" fillOpacity="0.4" />
          </g>
          <defs>
            <clipPath id="clip0_1_726">
              <rect width="142" height="142" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    default:
      return <div />;
  }
};

export const backgroundThemaSwith = (data) => {
  if (data?.backgroundImageURL) {
    return {
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(0, 0, 0, 0.54) 100%), url(${data?.backgroundImageURL})`,
    };
  }
  return {};
};

export const backgroundUrlFontColor = (data) => {
  if (data?.backgroundImageURL) {
    return {
      color: `#ffffff`,
    };
  }
  return {};
};

const cardUtils = {};

export default cardUtils;
