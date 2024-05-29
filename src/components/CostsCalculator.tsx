import React, { useEffect, useState } from "react";

const CostsCalculator = () => {
  // config:
  //   - Cost for multiple pages
  //   - cost for design and development
  //   - cost for maintenance/hosting
  //   - Customer support

  // user options:
  //   - number of pages
  //   - personal hourly rate
  //   - Photography
  //   - Intricacy of website

  // output:
  //   - number of hours on your end
  //   - how much money you would save by hiring a professional

  const [numOfPages, setNumOfPages] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(30);
  const [wantsPhotography, setWantsPhotography] = useState<boolean>(true);
  const [wantsBusinessListing, setWantsBusinessListing] =
    useState<boolean>(false);
  const [websiteType, setWebsiteType] = useState<string>("Personal Portfolio");
  const [personalCost, setPersonalCost] = useState(0);
  const [bigAgencyCost, setBigAgencyCost] = useState(1799);
  const [smallAgencyCost, setSmallAgencyCost] = useState(500);

  // Calculate costs and hours
  const calculateCosts = () => {
    let baseBigAgencyCost = 1799;
    let baseSmallAgencyCost = 500;
    let hours = 0;

    if (numOfPages > 5) {
      baseBigAgencyCost += (numOfPages - 5) * 150;
    }

    if (wantsPhotography) {
      baseBigAgencyCost += 100;
      hours += 3;
    }

    if (wantsBusinessListing) {
      baseBigAgencyCost += 100;
      hours += 1;
    }

    switch (websiteType) {
      case "Personal Portfolio":
        hours += numOfPages * 1 + 20;
        break;
      case "Service Business":
        hours += numOfPages * 1.5 + 40;
        break;
      case "E-Commerce":
        hours += numOfPages * 2 + 100;
        break;
      default:
        break;
    }

    // maintainance cost in the first year
    baseBigAgencyCost += 1400; //https://nzdigital.co.nz/web-design-price-guide-new-zealand/
    baseSmallAgencyCost += 12 * 50;
    const userPersonalCost = hours * hourlyRate + 36 * 12;

    setBigAgencyCost(baseBigAgencyCost);
    setSmallAgencyCost(baseSmallAgencyCost);
    setPersonalCost(userPersonalCost);
  };

  useEffect(() => {
    calculateCosts();
  }, [
    numOfPages,
    hourlyRate,
    wantsPhotography,
    wantsBusinessListing,
    websiteType,
  ]);

  const smallAgencyCostProfit = personalCost - smallAgencyCost;
  const bigAgencyCostProfit = personalCost - bigAgencyCost;

  const userOptions = [
    {
      name: "Number of pages",
      type: "number",
      max: 20,
      value: numOfPages,
      handleSetter: setNumOfPages,
    },
    {
      name: "Personal hourly rate",
      type: "number",
      max: 100,
      value: hourlyRate,
      handleSetter: setHourlyRate,
    },
    {
      name: "Photography",
      type: "checkbox",
      value: wantsPhotography,
      handleSetter: setWantsPhotography,
    },
    {
      name: "Google Business Listing",
      type: "checkbox",
      value: wantsBusinessListing,
      handleSetter: setWantsBusinessListing,
    },
    {
      name: "website difficulty",
      type: "select",
      values: [
        {
          name: "Personal Portfolio",
        },
        {
          name: "Service Business",
        },
        {
          name: "E-Commerce",
        },
      ],
      handleSetter: setWebsiteType,
    },
  ];

  // useEffect(() => {
  //   console.log(numOfPages, hourlyRate, wantsPhotography, websiteType);
  // }, [numOfPages, hourlyRate, wantsPhotography, websiteType]);

  return (
    <div className="mx-auto flex w-full flex-row items-center gap-16">
      <form className="mx-auto flex w-full flex-col items-center gap-4">
        {userOptions.map((option, index) => {
          return (
            <div
              key={index}
              className="grid w-full grid-cols-2 items-start gap-4"
            >
              <label className="font-medium capitalize text-2xl max-md:text-lg">
                {option.name}
              </label>
              {option.type === "number" ? (
                <div className="flex w-full flex-col items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={option.max}
                    defaultValue={String(option.value)}
                    onChange={(e) => option.handleSetter(e.target.value)}
                    className="range"
                  />
                  <div className="flex flex-row gap-0 whitespace-pre text-xl max-md:text-sm">
                    <p>{option.name == "Personal hourly rate" && "$"}</p>
                    <p>{option.value}</p>
                    <p>{option.name != "Personal hourly rate" && " pages"}</p>
                  </div>
                </div>
              ) : option.type === "checkbox" ? (
                <input
                  type="checkbox"
                  className="checkbox my-auto aspect-square"
                  defaultChecked={option.value}
                  onChange={(e) => option.handleSetter(e.target.checked)}
                />
              ) : option.type === "select" ? (
                <div className="flex h-full flex-row gap-8">
                  <select
                    name={option.name}
                    key={index}
                    className="select border-2 border-neutral"
                    onChange={(e) => option.handleSetter(e.target.value)}
                  >
                    {option.values &&
                      option.values.map((value, index) => {
                        return (
                          <option value={value.name} key={value.name}>
                            {value.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
              ) : null}
            </div>
          );
        })}
      </form>
      <div className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-2xl max-md:text-lg">
          By letting a website agency make your website...
        </h1>
        <div className="text-xl">
          {bigAgencyCostProfit > 0 ? (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              You would save
              <span className="font-bold text-green-500 text-6xl">
                ${Math.round(bigAgencyCostProfit)}
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a big agency
              </span>
            </p>
          ) : (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              You would lose
              <span className="font-bold text-red-500 text-6xl">
                -${Math.round(bigAgencyCostProfit) * -1}
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a big agency
              </span>
            </p>
          )}
          {smallAgencyCostProfit > 0 ? (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              And you would save
              <span className="font-bold text-green-500 text-6xl">
                ${Math.round(smallAgencyCostProfit)}
              </span>
              <span className="italic text-base  max-md:text-xs">
                *with a small agency
              </span>
            </p>
          ) : (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              And you would lose
              <span className="font-bold text-red-500 text-6xl">
                -${Math.round(smallAgencyCostProfit) * -1}
              </span>
              <span className="italic text-base  max-md:text-xs">
                *with a small agency
              </span>
            </p>
          )}
        </div>
        <h1 className="mx-auto w-fit  bg-primary p-4 text-center font-extrabold italic text-2xl max-md:p-2 max-md:text-lg">
          In the first year
        </h1>
      </div>
    </div>
  );
};

export default CostsCalculator;
