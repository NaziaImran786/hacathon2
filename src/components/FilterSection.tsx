// src\components\FilterSection.tsx
import Link from "next/link";

interface textType {
    textTitle: string;
    textNavigation: string;
    pageName: string;
    className?: string;
  }
  
  const FilterSection = ({
    textTitle,
    textNavigation,
    pageName,
    className,
  }: textType) => {
    return (
      <section>
        <div className="flex flex-col bg-slate-100 w-full h-[286px] lg:pl-24 pt-24 text-center lg:text-start">
          <h1 className="text-4xl text-1 font-bold text-indigo-950">
            {textTitle}
          </h1>
          <p className="lato mt-2 ">
          <Link href="/">{textNavigation}</Link>
            <span className="text-pink-500 font-semibold">{pageName}</span>
          </p>
        </div>
        <div
          className={`${className} mt-20 flex justify-around items-center lg:flex-row flex-col px-3`}
        >
          <div>
            <h1 className="text-2xl text-1 text-indigo-950 font-bold">
              Ecommerce Acceories & Fashion item
            </h1>
            <p className="text-sm text-gray-400 lato mt-2">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex lg:items-center gap-4 lg:flex-row flex-col mt-8 lg:mt-0">
            <div className="flex lg:items-center gap-x-1">
              <p className="lato text-indigo-900">Per Page:</p>
              <input
                type="text"
                className="w-14 h-6 outline-none border border-slate-300"
              />
            </div>
            <div className="flex items-center gap-x-1">
              <p className="lato text-indigo-900">Sort By:</p>
              <input
                type=""
                placeholder={`Best Match`}
                className="w-24 h-6 outline-none border border-slate-300 text-sm flex items-center pl-1"
              />
            </div>
            <div className="flex items-center gap-x-1">
              <p className="lato text-indigo-900">View:</p>
              <input
                type="text"
                className="w-28 h-6 outline-none border border-slate-300"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FilterSection;