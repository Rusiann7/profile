import Image from "next/image";
import Link from "next/link";
import image from "@/public/2x2self.jpg";

export default function Home() {
  return (
    <div>
      <div className="ml-95 items-center mt-20 bg-[#232831] max-w-300 rounded-lg ">
        <h1 className="text-lg justify-center ml-115 p-10">
          Welcome to my landing page
        </h1>
      </div>
      <div className="flex p-10 items-center ml-75 mt-20">
        <div className="max-w-100 font-segoe p-8 bg-[#232831] rounded-lg m-8">
          <Image src={image} alt="Picture of self" />
        </div>

        <div className="max-w-200 font-segoe p-8 bg-[#232831] rounded-lg ">
          <h3 className="pb-4">
            <strong>Name: </strong>
          </h3>
          <p className="pb-8">Ralen Matti Casiano</p>
          <h3 className="pb-4">
            <strong>Bio: </strong>
          </h3>
          <p className="pb-8">
            Hello, My name is Ralen Matii Casiano, and I am a student at Gordon
            College studying Bachelors of Science in Information Technology
          </p>
          <div className="">
            <Link href="/about">
              <button className="p-2 bg-[#000] m-3">Go to About</button>
            </Link>
            <Link href="/contact">
              <button className="p-2 bg-[#000] m-3">Go to Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
