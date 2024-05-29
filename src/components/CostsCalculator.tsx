import React from "react";

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

  const submit = (e: any) => {
    e.preventDefault();
    alert("hi");
  };

  const userOptions = [
    {
      name: "Number of pages",
      type: "number",
      value: 3,
    },
    {
      name: "Personal hourly rate",
      type: "number",
      value: 30,
    },
    {
      name: "Photography",
      type: "checkbox",
      value: false,
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
    },
  ];

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
              className="grid w-full grid-cols-2 place-items-start"
            >
              <label className="font-medium capitalize text-2xl">
                {option.name}
              </label>
              {option.type === "number" ? (
                <input
                  type="number"
                  defaultValue={option.value as number}
                  className="h-full border-2 border-neutral p-4 text-left"
                  min={1}
                />
              ) : option.type === "checkbox" ? (
                <input type="checkbox" className="aspect-square h-full " />
              ) : option.type === "select" ? (
                <div className="flex h-full flex-row gap-8">
                  <select
                    name={option.name}
                    key={index}
                    className="flex gap-2 border-2 border-neutral"
                  >
                    {option.values &&
                      option.values.map((value, index) => {
                        return <option value={value.name}>{value.name}</option>;
                      })}
                  </select>
                </div>
              ) : null}
            </div>
          );
        })}
        <button type="submit" className="btn-primary btn mt-8 w-fit">
          Calculate
        </button>
      </form>
    </div>
  );
};

export default CostsCalculator;
