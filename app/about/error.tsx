'use client';
const error = ({error}:{error: Error}) => {
    console.log('time error',error);
  return (
    <div>error</div>
  )
}
export default error