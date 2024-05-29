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

  const [numOfPages, setNumOfPages] = useState(3);
  const [hourlyRate, setHourlyRate] = useState(30);
  const [wantsPhotography, setWantsPhotography] = useState(false);
  const [wantsBusinessListing, setWantsBusinessListing] = useState(false);
  const [websiteType, setWebsiteType] = useState("Personal Portfolio");

  const submit = (e: any) => {
    e.preventDefault();

    let bigAgencyCost = 1799;
    let smallAgencyCost = 500;

    let personalHours = 0;
    let personalCost = 0;

    if (numOfPages > 5) {
      bigAgencyCost += (numOfPages - 5) * 150;
    }

    personalHours = numOfPages * 2;

    if (wantsPhotography) {
      bigAgencyCost += 100;
      personalHours += 3;
    }

    if (wantsBusinessListing) {
      bigAgencyCost += 100;
      personalHours += 1;
    }

    if (websiteType === "Personal Portfolio") {
      personalHours *= 2;
    } else if (websiteType === "Service Business") {
      personalHours *= 3;
    } else if (websiteType === "E-Commerce") {
      personalHours *= 4;
    }

    personalCost = personalHours * hourlyRate;
  };

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

  useEffect(() => {
    console.log(numOfPages, hourlyRate, wantsPhotography, websiteType);
  }, [numOfPages, hourlyRate, wantsPhotography, websiteType]);

  return (
    <div>
      <form
        onSubmit={(e) => submit(e)}
        className="mx-auto flex w-full max-w-screen-md flex-col items-center gap-4"
      >
        {userOptions.map((option, index) => {
          return (
            <div
              key={index}
              className="grid w-full grid-cols-2 place-items-start gap-4"
            >
              <label className="font-medium capitalize text-2xl">
                {option.name}
              </label>
              {option.type === "number" ? (
                <div className="flex w-full flex-col items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={option.max}
                    defaultValue={option.value}
                    onChange={(e) =>
                      option.handleSetter(parseInt(e.target.value))
                    }
                    className="range"
                  />
                  <div className="flex flex-row gap-0 whitespace-pre text-xl">
                    <p>{option.name == "Personal hourly rate" && "$"}</p>
                    <p>{option.value}</p>
                    <p>{option.name != "Personal hourly rate" && " pages"}</p>
                  </div>
                </div>
              ) : option.type === "checkbox" ? (
                <input
                  type="checkbox"
                  className="aspect-square h-full "
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
    </div>
  );
};

export default CostsCalculator;
