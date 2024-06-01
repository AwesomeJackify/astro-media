import React, { useEffect, useState } from "react";
import { IoMdInformationCircle } from "@react-icons/all-files/io/IoMdInformationCircle";

const CostsCalculator = () => {
  // config:
  //   - Cost for multiple pages
  //   - cost for design and development
  //   - cost for maintenance/hosting

  // user options:
  //   - number of pages
  //   - personal hourly rate
  //   - Photography
  //   - Intricacy of website

  // output:
  //   - number of hours on your end
  //   - how much money you could save by hiring a professional

  const [numOfPages, setNumOfPages] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(30);
  const [wantsPhotography, setWantsPhotography] = useState<boolean>(true);
  const [wantsBusinessListing, setWantsBusinessListing] =
    useState<boolean>(false);
  const [websiteType, setWebsiteType] = useState<string>("Personal Portfolio");
  const [personalCost, setPersonalCost] = useState(0);
  const [bigAgencyCost, setBigAgencyCost] = useState(1799);
  const [smallAgencyCost, setSmallAgencyCost] = useState(500);

  const upperBigAgencyCostDiff = 2900;
  const upperSmallAgencyCostDiff = 1500;

  // Calculate costs and hours
  const calculateCosts = () => {
    let baseBigAgencyCost = 599;
    let baseSmallAgencyCost = 500;
    let hours = 0;

    if (numOfPages > 5) {
      baseBigAgencyCost += (numOfPages - 5) * 150;
      baseSmallAgencyCost += (numOfPages - 5) * 30;
    }

    if (wantsPhotography) {
      baseBigAgencyCost += 100;
      hours += 3;
    }

    if (wantsBusinessListing) {
      baseBigAgencyCost += 100;
      hours += 1;
    }

    const nonLinearPages = numOfPages ** 1.3;

    switch (websiteType) {
      case "Personal Portfolio":
        hours += nonLinearPages * 1 + 20;
        break;
      case "Service Business":
        hours += nonLinearPages * 1.5 + 40;
        break;
      case "E-Commerce":
        hours += nonLinearPages * 2 + 100;
        baseSmallAgencyCost *= 2;
        break;
      default:
        break;
    }

    // maintenance cost in the first year
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

  const maxSmallAgencyCostProfit = personalCost - smallAgencyCost;
  const minSmallAgencyCostProfit =
    personalCost - smallAgencyCost - upperSmallAgencyCostDiff;
  const maxBigAgencyCostProfit = personalCost - bigAgencyCost;
  const minBigAgencyCostProfit =
    personalCost - bigAgencyCost - upperBigAgencyCostDiff;

  const userOptions = [
    {
      name: "Number of pages",
      type: "number",
      max: 20,
      value: numOfPages,
      handleSetter: setNumOfPages,
      tip: "Most websites have a landing, about, a few services and a contact. The more pages, the more time it takes to build.",
    },
    {
      name: "Personal hourly rate",
      type: "number",
      max: 100,
      value: hourlyRate,
      handleSetter: setHourlyRate,
      tip: "How much do you value your time? The more your day job pays, the least cost-effective it is to build your own website.",
    },
    {
      name: "Photography",
      type: "checkbox",
      value: wantsPhotography,
      handleSetter: setWantsPhotography,
      tip: "Good photography can make or break a website. If you don't have any, you might want to hire a professional.",
    },
    {
      name: "Google Business Listing",
      type: "checkbox",
      value: wantsBusinessListing,
      handleSetter: setWantsBusinessListing,
      tip: "If you have a physical location, you might want to list it on Google Business. It's free but takes time to set up.",
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
      tip: "The more intricate the website, the chance of something going wrong increases. E-commerce websites are the most complex.",
    },
  ];

  // useEffect(() => {
  //   console.log(numOfPages, hourlyRate, wantsPhotography, websiteType);
  // }, [numOfPages, hourlyRate, wantsPhotography, websiteType]);

  return (
    <div className="mx-auto grid w-full grid-cols-2 items-center gap-16 max-md:grid-cols-1">
      <form className="mx-auto flex w-full flex-col items-center gap-4">
        {userOptions.map((option, index) => {
          return (
            <div
              key={index}
              className="grid w-full grid-cols-2 items-start gap-4 max-md:grid-cols-1 max-md:place-items-center"
            >
              <label
                className="inline items-start justify-start gap-1 font-medium capitalize text-2xl max-md:text-lg"
                htmlFor={option.name}
              >
                {option.name}
                <div
                  className="tooltip ml-1 w-fit normal-case max-md:hidden"
                  data-tip={option.tip}
                >
                  <IoMdInformationCircle className="text-sm" />
                </div>
              </label>
              {option.type === "number" ? (
                <div className="flex w-full flex-col items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    id={option.name}
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
                  id={option.name}
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
                    id={option.name}
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
        <div className="flex flex-col gap-8 text-xl max-md:gap-4">
          {minBigAgencyCostProfit > 0 ? (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              You could save between
              <span className="font-bold text-green-500 text-6xl">
                ${Math.round(minBigAgencyCostProfit)}{" "}
                <span className="text-default">-</span> $
                {Math.round(maxBigAgencyCostProfit)}
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a big web agency
              </span>
            </p>
          ) : maxBigAgencyCostProfit < 0 ? (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              You could lose between
              <span className="font-bold text-red-500 text-6xl">
                -${Math.round(minBigAgencyCostProfit * -1)}{" "}
                <span className="text-default">-</span> -$
                {Math.round(maxBigAgencyCostProfit * -1)}
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a big web agency
              </span>
            </p>
          ) : (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              You could lose/save between
              <span className="font-bold  text-6xl">
                <span className="text-red-500">-${Math.round(minBigAgencyCostProfit * -1)}</span>{" "}
                <span className="text-default">-</span>
                <span className="text-green-500">${Math.round(maxBigAgencyCostProfit)}</span>
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a big web agency
              </span>
            </p>
          )}
          {minSmallAgencyCostProfit > 0 ? (
            <p className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              And you could save between
              <span className="font-bold text-green-500 text-6xl">
                ${Math.round(minSmallAgencyCostProfit)}{" "}
                <span className="text-default">-</span> $
                {Math.round(maxSmallAgencyCostProfit)}
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a small web agency
              </span>
            </p>
          ) : maxSmallAgencyCostProfit < 0 ? (
            <div className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              And you could lose between
              <span className="font-bold text-red-500 text-6xl">
                -${Math.round(minSmallAgencyCostProfit * -1)}{" "}
                <span className="text-default">-</span> -$
                {Math.round(maxSmallAgencyCostProfit * -1)}
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a small web agency
              </span>
            </div>
          ) : (
            <div className="flex w-full flex-col items-center gap-4 max-md:gap-2">
              And you could lose/save between
              <span className="font-bold text-red-500 text-6xl">
                <span className="text-red-500">-${Math.round(minSmallAgencyCostProfit * -1)}</span>{" "}
                <span className="text-default">-</span>
                <span className="text-green-500">${Math.round(maxSmallAgencyCostProfit)}</span>
              </span>
              <span className="italic text-base max-md:text-xs">
                *with a small web agency
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="mx-auto w-fit bg-primary p-4 text-center font-extrabold italic text-2xl max-md:p-2 max-md:text-lg">
            In the first year
          </h1>
          <p className="italic opacity-50 text-xs">
            *Numbers are estimates only
          </p>
        </div>
      </div>

    </div>
  );
};

export default CostsCalculator;
