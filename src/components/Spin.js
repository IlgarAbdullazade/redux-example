import { Puff } from 'react-loader-spinner';

function Spin() {
  return (
    <Puff
      height="80"
      width="80"
      radisu={1}
      color="#61DAFB"
      ariaLabel="puff-loading"
    />
  );
}

export default Spin;
