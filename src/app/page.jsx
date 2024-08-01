import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center relative h-[100dvh] overflow-hidden">
      <Image
        className="w-[220vw] max-w-[220vw]  h-[140vh] -top-[210px] absolute"
        width={300}
        height={300}
        src="/blueShape.svg"
      />
      <Image
        className="ms-10 w-[130vw] max-w-[130vw] h-[400px] absolute -bottom-[180px] "
        width={300}
        height={300}
        src="/grayShape.svg"
      />
    </main>
  );
}
