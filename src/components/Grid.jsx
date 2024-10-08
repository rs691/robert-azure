

import PropTypes from 'prop-types';

const Grid = ({ 
  width = '100%', 
  height = '100%',
  smallGridColor = 'rgba(255,255,255,0.1)',
  largeGridColor = 'rgba(255,255,255,0.2)',
  backgroundColor = '#000',
  smallGridSize = 10,
  largeGridSize = 50,
  smallGridWidth = 0.5,
  largeGridWidth = 1
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      style={{ width, height }}
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern 
          id="small-grid" 
          width={smallGridSize} 
          height={smallGridSize} 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d={`M ${smallGridSize} 0 L ${smallGridSize} 100`} 
            fill="none" 
            stroke={smallGridColor} 
            strokeWidth={smallGridWidth}
          />
          <path 
            d={`M 0 ${smallGridSize} L 100 ${smallGridSize}`} 
            fill="none" 
            stroke={smallGridColor} 
            strokeWidth={smallGridWidth}
          />
        </pattern>
        
        <pattern 
          id="large-grid" 
          width={largeGridSize} 
          height={largeGridSize} 
          patternUnits="userSpaceOnUse"
        >
          <path 
            d={`M ${largeGridSize} 0 L ${largeGridSize} 100`} 
            fill="none" 
            stroke={largeGridColor} 
            strokeWidth={largeGridWidth}
          />
          <path 
            d={`M 0 ${largeGridSize} L 100 ${largeGridSize}`} 
            fill="none" 
            stroke={largeGridColor} 
            strokeWidth={largeGridWidth}
          />
        </pattern>
      </defs>
      
      <rect width="100" height="100" fill={backgroundColor}/>
      <rect width="100" height="100" fill="url(#small-grid)"/>
      <rect width="100" height="100" fill="url(#large-grid)"/>
    </svg>
  );
};

Grid.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  smallGridColor: PropTypes.string,
  largeGridColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  smallGridSize: PropTypes.number,
  largeGridSize: PropTypes.number,
  smallGridWidth: PropTypes.number,
  largeGridWidth: PropTypes.number,
};

export default Grid;