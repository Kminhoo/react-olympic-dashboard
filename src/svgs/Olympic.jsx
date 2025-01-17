const Olympic = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Flat">
        <g id="Color">
          <circle cx="32" cy="26.5" fill="#fccd1d" r="19.5" />
          <circle cx="32" cy="26.5" fill="#f9a215" r="14.5" />
          <path
            d="M33.37,19l1.52,2.63a1.54,1.54,0,0,0,1.06.76L39,23a1.53,1.53,0,0,1,.85,2.56l-2.1,2.22a1.5,1.5,0,0,0-.4,1.22l.36,3a1.57,1.57,0,0,1-2.22,1.58l-2.81-1.27a1.6,1.6,0,0,0-1.32,0l-2.81,1.27A1.57,1.57,0,0,1,26.31,32l.36-3a1.5,1.5,0,0,0-.4-1.22l-2.1-2.22A1.53,1.53,0,0,1,25,23l3-.59a1.54,1.54,0,0,0,1.06-.76L30.63,19A1.59,1.59,0,0,1,33.37,19Z"
            fill="#fccd1d"
          />
          <polygon
            fill="#212529"
            points="45 43 45 57 61 57 55 50 61 43 45 43"
          />
          <polygon fill="#212529" points="19 43 19 57 3 57 9 50 3 43 19 43" />
          <rect fill="#dd051d" height="14" width="38" x="13" y="39" />
          <polygon fill="#a60416" points="13 53 19 57 19 53 13 53" />
          <polygon fill="#a60416" points="51 53 45 57 45 53 51 53" />
        </g>
      </g>
    </svg>
  );
};

export default Olympic;
