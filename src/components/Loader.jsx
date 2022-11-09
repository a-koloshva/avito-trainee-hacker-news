import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      height="75"
      width="75"
      color="#000"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="three-circles-rotating"
    />
  );
};

export default Loader;
