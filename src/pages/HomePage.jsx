import { Calendar, Github, Grid, Moon, PieChart, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DataCard from "../components/DataCard";
import useFetchUserDataHook from "../hooks/FetchUserDataHook";

const SecondHtmlUserInfo = (props) => {
  const { name, email, githubUrl } = props.config;
  return (
    <div className="flex flex-col justify-between p-3 h-full md:p-5">
      <div className="flex flex-col">
        <span className="font-medium md:text-2xl">{name}</span>
        <span className="mt-1">{email}</span>
      </div>

      <div
        className="flex flex-row justify-end cursor-pointer"
        onClick={() => window.open(githubUrl)}
      >
        <Github strokeWidth={2} />
      </div>
    </div>
  );
};

const CardInfo = (props) => {
  const { icon, title, description, fontColor, backColor, tag } = props.config;

  return (
    <div
      className={`flex flex-col justify-between ${
        backColor !== undefined ? backColor : ""
      } ${fontColor !== undefined ? fontColor : ""} ${
        tag === "leftInfo" ? "rounded-l-md" : "rounded-r-md"
      } p-3 h-full md:p-5`}
    >
      <div className="flex flex-row">
        <div className="centered mr-2">{icon}</div>
        <div className="font-medium centered">{title}</div>
      </div>

      <div className="flex flex-col items-end">{description}</div>
    </div>
  );
};

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const { data, status } = useFetchUserDataHook(searchParams.get("username"));
  const [selectedYear, setSelectedYear] = useState();
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    if (data !== undefined) {
      setSelectedYear(data?.techData[0]?.updatedAt);
    }
  }, [data]);

  if (status === "Loading") {
    return <div>Loading...</div>;
  }

  if (status === "Error") {
    return <div>OOPs! Something went wrong</div>;
  }

  const handleYearChange = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const toggleTheme = () => {
    const currentTheme = document.body.classList.contains("dark")
      ? "dark"
      : document.body.classList.contains("light")
      ? "light"
      : "";

    if (currentTheme === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      setCurrentTheme("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      setCurrentTheme("dark");
    }
  };

  return (
    data !== undefined &&
    data.techData.length > 0 && (
      <div className="horizontal-centered h-[100vh] md:mt-7">
        {/* For medium or more screen resolution */}
        <div class="grid-cols-5 grid-rows-3 gap-4 w-[70%] h-[70vh] hidden md:grid">
          <div class="col-span-2">
            <DataCard
              config={{
                firstHtml: (
                  <img
                    src={data?.photoUrl}
                    className="object-cover h-[100%] w-[100%] rounded-l-md"
                  />
                ),
                secondHtml: (
                  <SecondHtmlUserInfo
                    config={{
                      name: data?.name,
                      email: data?.email,
                      githubUrl: data?.githubUrl,
                    }}
                  />
                ),
                cardSize: "large",
              }}
            />
          </div>
          <div class=" col-span-2">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon: <Calendar strokeWidth={1} />,
                      title: "Year",
                      description: (
                        <span className="font-medium text-7xl">
                          {selectedYear}
                        </span>
                      ),
                      tag: "leftInfo",
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      title: (
                        <span className="font-medium md:text-lg">
                          Slide to select year
                        </span>
                      ),
                      description: (
                        <input
                          className="w-full h-[2px] border-none accent-black"
                          type="range"
                          value={selectedYear}
                          min={data.techData[0].updatedAt}
                          max={
                            data.techData[data.techData.length - 1].updatedAt
                          }
                          onChange={(e) => handleYearChange(e.target.value)}
                        />
                      ),
                      fontColor: "text-black",
                      backColor: "bg-orange-500",
                    }}
                  />
                ),
                cardSize: "large",
              }}
            />
          </div>
          <div class="">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon:
                        currentTheme === "light" ? (
                          <Sun strokeWidth={1} />
                        ) : (
                          <Moon strokeWidth={1} />
                        ),
                      title:
                        currentTheme === "light" ? "Light Theme" : "Dark Theme",
                      tag: "leftInfo",
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      description: <span>Click to toggle theme</span>,
                    }}
                  />
                ),
                cardSize: "small",
                onClickFn: toggleTheme,
              }}
            />
          </div>
          <div class="">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon: <Grid strokeWidth={1} />,
                      title: "Tile Map",
                      tag: "leftInfo",
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      description: <span>Click here</span>,
                    }}
                  />
                ),
                cardSize: "small",
              }}
            />
          </div>
          <div class="">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon: <PieChart strokeWidth={1} />,
                      title: "Pie Chart",
                      tag: "leftInfo",
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      description: <span>Click here</span>,
                    }}
                  />
                ),
                cardSize: "small",
              }}
            />
          </div>
          <div class=" col-span-3 row-span-2">04</div>
        </div>

        {/* For less screen resolution */}
        <div class="grid grid-cols-2 grid-rows-6 gap-2 w-[90%] md:hidden">
          <div class="col-span-2">
            <DataCard
              config={{
                firstHtml: (
                  <img
                    src="MyPic.jpg"
                    className="object-cover h-[100%] w-[100%] rounded-l-md"
                  />
                ),
                secondHtml: (
                  <SecondHtmlUserInfo
                    config={{
                      name: "Soumyabrata Sarkar",
                      email: "soumyabrata@gmail.com",
                      githubUrl: "https://github.com/soumyabrata-sarkar",
                    }}
                  />
                ),
                cardSize: "large",
              }}
            />
          </div>
          <div class="col-span-2">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon: <Calendar strokeWidth={1} />,
                      title: "Year",
                      description: (
                        <span className="text-5xl font-medium md:text-7xl">
                          {selectedYear}
                        </span>
                      ),
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      title: (
                        <span className="font-medium md:text-lg">
                          Slide to select year
                        </span>
                      ),
                      description: (
                        <input
                          className="w-full h-[2px] border-none accent-black"
                          type="range"
                          value={selectedYear}
                          min={2021}
                          max={2024}
                          onChange={(e) => handleYearChange(e.target.value)}
                        />
                      ),
                      fontColor: "text-black",
                      backColor: "bg-orange-500",
                    }}
                  />
                ),
                cardSize: "large",
              }}
            />
          </div>
          <div class="col-span-2 row-span-3">01</div>
          <div class="">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon: <Sun strokeWidth={1} />,
                      title: "Dark Theme",
                      tag: "leftInfo",
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      description: <span>Click to toggle theme</span>,
                    }}
                  />
                ),
                cardSize: "small",
              }}
            />
          </div>
          <div class="">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon: <Grid strokeWidth={1} />,
                      title: "Tile Map",
                      tag: "leftInfo",
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      description: <span>Click here</span>,
                    }}
                  />
                ),
                cardSize: "small",
              }}
            />
          </div>
          <div class="">
            <DataCard
              config={{
                firstHtml: (
                  <CardInfo
                    config={{
                      icon: <PieChart strokeWidth={1} />,
                      title: "Pie Chart",
                      tag: "leftInfo",
                    }}
                  />
                ),
                secondHtml: (
                  <CardInfo
                    config={{
                      description: <span>Click here</span>,
                    }}
                  />
                ),
                cardSize: "small",
              }}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default HomePage;
