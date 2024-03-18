import Image from "next/image";
import picture from "../Page1/picture.jpg";
import Link from "next/link";
import k300 from "../public/k300.jpg";
import picture7 from "../Page1/picture7.jpg";
import picture9 from "../Page1/picture9.jpg";
import picture10 from "../Page1/picture10.jpg";
import sneaker from "../Page1/sneaker.jpg";
import divies from "../Page1/divies.jpg";
import goldie from "../Page1/goldie.jpg";
import stuusy from "../Page1/stuusy.jpg";
import essen from "../Page1/essen.jpg";
import levents from "../Page1/levents.jpg";
export default function TheK300() {
  return (
    <div className=" bg-black">
      <div className="flex justify-center items-center h-full w-full ">
        <div className="relative ">
          <Image
            src={picture}
            alt="picture"
            height={200}
            className="cursor-pointer w-screen "
            priority
          />
          <p className="absolute inset-0 flex justify-center items-center text-gray-400 ">
            <span className="ml-2 text-gray-400 font-sans font:family-popins">
              Trang phục
            </span>
          </p>
        </div>
      </div>
      <div className="gap-10 ml-24 mr-24 text-2xl text-gray-400 py-8">
        <div className="flex">
          <div className="mr-40">
            {" "}
            <a href="/">
              <Image
                src={picture7}
                alt="picture"
                width={600}
                height={400}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
            <p className="text-gray-400 text-center text-sm font-sans font:family-popins">
              Chi tiết sản phẩm{" "}
            </p>{" "}
          </div>
          <div>
            <p className="text-gray-400  gap-6 font-sans-serif font:family:roboto font-extrabold">
              <em>Fearless Plannel Shirt in Blue</em>
            </p>
            <a href="https://shp.ee/de5snva ">
              <p className="font-sans font:family-popins text-sm text-gray-400 py-6  custom-cursor hover:text-red-500">
                Áo:https://shp.ee/de5snva
              </p>
            </a>
            <a href="/">
              <Image
                src={picture10}
                alt="picture"
                width={350}
                height={250}
                className="cursor-pointer"
                items-center
                priority
              />
            </a>
            <div className="py-6">
              <p className="text-gray-400 py-6 font-sans-serif font:family:roboto font-extrabold ">
                <em>Skinny Jeans With Knee Rips In Blue</em>
              </p>
              <a href="https://shp.ee/38m8gq1 ">
                <p className="font-sans font:family-popins text-sm text-gray-400 custom-cursor hover:text-red-500 ">
                  Quần:https://shp.ee/38m8gq1{" "}
                </p>
              </a>
            </div>
            <div>
              <a href="/">
                <Image
                  src={picture9}
                  alt="picture"
                  width={350}
                  height={250}
                  className="cursor-pointer"
                  items-center
                  priority
                />
              </a>
            </div>
            <div className="py-6">
              <p className="text-gray-400 py-6 font-sans-serif font:family:roboto font-extrabold">
                <em>NIKE Air Force 1</em>
              </p>
              <a href="https://shp.ee/qmujire ">
                <p className="font-sans font:family-popins text-sm text-gray-400 custom-cursor hover:text-red-500">
                  Giày:https://shp.ee/qmujire{" "}
                </p>
              </a>
            </div>
            <div>
              <a href="/">
                <Image
                  src={sneaker}
                  alt="picture"
                  width={350}
                  height={250}
                  className="cursor-pointer"
                  items-center
                  priority
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="font-sans font:family-popins text-gray-400 text-center py-10">
        {" "}
        Gợi ý sản phẩm{" "}
      </p>
      <div className="flex gap-10 ml-24 mr-24 py-4  justify-center items-center">
        <div className="flex flex-col items-center">
          <a href="/">
            <Image
              src={divies}
              alt="picture"
              width={200}
              height={200}
              className="cursor-pointer "
              items-center
              priority
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/">
            <Image
              src={goldie}
              alt="picture"
              width={200}
              height={200}
              className="cursor-pointer"
              items-center
              priority
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/">
            <Image
              src={stuusy}
              alt="picture"
              width={200}
              height={200}
              className="cursor-pointer"
              items-center
              priority
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/Page1.tsx">
            <Image
              src={levents}
              alt="picture"
              width={200}
              height={100}
              className="cursor-pointer"
              items-center
              priority
            />
          </a>
        </div>
        <div className="flex flex-col items-center">
          <a href="/Page1.tsx">
            <Image
              src={essen}
              alt="picture"
              width={200}
              height={100}
              className="cursor-pointer"
              items-center
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
}
