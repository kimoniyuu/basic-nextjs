import Counter from "@/components/Counter";
import Image from "next/image";
const url =
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";

const page = () => {
  return (
    <div>
      <Counter />
      page
      <hr />
      <Image src={url} width={400} height={400} alt="basejs" priority />
    </div>
  );
};
export default page;
