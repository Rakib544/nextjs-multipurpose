const workflows = [
  {
    id: "01",
    title: "Better Audiance",
    description:
      "Bndulgence diminution so discovered mr perfect off under folly dea wrote cause her way spite. Plan upon yet way.",
  },
  {
    id: "02",
    title: "Better Audiance 2",
    description:
      "Bndulgence diminution so discovered mr perfect off under folly dea wrote cause her way spite. Plan upon yet way.",
  },
  {
    id: "03",
    title: "Better Audiance 3",
    description:
      "Bndulgence diminution so discovered mr perfect off under folly dea wrote cause her way spite. Plan upon yet way.",
  },
  {
    id: "04",
    title: "Better Audiance 4",
    description:
      "Bndulgence diminution so discovered mr perfect off under folly dea wrote cause her way spite. Plan upon yet way.",
  },
];

export default function WorkFlow2() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {/* <div className="relative after:absolute after:h-2 after:w-full after:border-b-2 after:border-dashed after:top-10 after:-right-10 after:z-[-1]">
        <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
          01
        </span>
        <span className="h-20 w-20 rounded-full  block mb-4 bg-white">
          <Image
            src="/marketing.svg"
            alt=""
            height={100}
            width={100}
            className="border-2 border-dashed z-10 rounded-full p-1"
          />
        </span>
        <div className="pr-10">
          <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
            Better Audiance
          </h3>
          <p className="text-neutral-600 text-base leading-7">
            Bndulgence diminution so discovered mr perfect off under folly death
            wrote cause her way spite. Plan upon yet way.
          </p>
        </div>
      </div>
      <div className="mt-20 after:-right-10 relative after:absolute after:h-2 after:w-full after:border-b-2 after:border-dashed after:top-10 after:z-[-1] ">
        <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
          02
        </span>
        <div className="h-20 w-20 rounded-xl mb-4 relative bg-white">
          <span className="h-20 w-20 rounded-full block bg-white  before:absolute before:h-full before:w-1 before:border-r-2 before:border-dashed before:-top-1/2 mt-2 before:left-1/2 before:z-[-1]">
            <Image
              src="/analytics.svg"
              alt=""
              height={100}
              width={100}
              className="z-10 border-2 border-dashed rounded-full p-1"
            />
          </span>
        </div>
        <div className="pr-10">
          <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
            Better Audiance
          </h3>
          <p className="text-neutral-600 text-base leading-7">
            Bndulgence diminution so discovered mr perfect off under folly death
            wrote cause her way spite. Plan upon yet way.
          </p>
        </div>
      </div>
      <div className="mt-40 relative flex">
        <span className="absolute h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
          03
        </span>
        <div className="h-20 w-20 mb-4 rounded-full relative bg-white">
          <span className="h-20 w-20 mb-4 rounded-full block bg-white before:z-[-1] before:absolute before:h-full before:w-1 before:border-r-2 before:border-dashed before:-top-1/2 mt-2 before:left-1/2 after:z-[-1]">
            <Image
              src="/earn-money.svg"
              alt=""
              height={200}
              width={200}
              className="border-2 border-dashed z-10 rounded-full p-1"
            />
          </span>
        </div>
        <div className="pr-10">
          <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
            Better Audiance
          </h3>
          <p className="text-neutral-600 text-base leading-7">
            Bndulgence diminution so discovered mr perfect off under folly death
            wrote cause her way spite. Plan upon yet way.
          </p>
        </div>
      </div> */}
      {workflows.map((flow) => (
        <div
          key={flow.id}
          className="relative after:absolute after:h-2 after:w-full after:border-b-2 after:border-dashed after:top-10 after:-right-10 after:z-[-1]"
        >
          <span className="h-16 w-16 bg-white border rounded-full flex justify-center items-center text-2xl font-bold right-1/2 top-4 text-stroke text-transparent">
            01
          </span>

          <div className="pr-10">
            <h3 className="font-bold text-xl text-neutral-950 mb-2 mt-3">
              Better Audiance
            </h3>
            <p className="text-neutral-600 text-base leading-7">
              Bndulgence diminution so discovered mr perfect off under folly
              death wrote cause her way spite. Plan upon yet way.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
