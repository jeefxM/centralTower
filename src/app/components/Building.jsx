"use client";
import { useState } from "react";

const Building = () => {
  const [hoveredFlat, setHoveredFlat] = useState(null);

  const handleFlatHover = (flatId) => {
    const totalFlats = flatPositions.length;
    const flatNumber = totalFlats - flatId;
    setHoveredFlat(flatId);
    console.log("Hovered Flat Number:", flatNumber); // Log the hovered flat number in reverse order
  };
  const handleFlatLeave = () => {
    setHoveredFlat(null);
  };

  const handleFlatClick = (flatId) => {
    console.log(flatId); // Log the clicked flat ID to the console
  };

  const flatPositions = [
    { left: "33.5%", top: "30px", width: "500px", availableFlats: 0 },
    { left: "33.5%", top: "70px", width: "500px", availableFlats: 5 },
    { left: "33.5%", top: "115px", width: "500px", availableFlats: 5 },
    { left: "33.5%", top: "155.5px", width: "500px", availableFlats: 5 },
    { left: "33.5%", top: "200px", width: "500px", availableFlats: 5 },
    { left: "33.5%", top: "240px", width: "500px", availableFlats: 5 },
    { left: "12.6%", top: "285px", width: "575px", availableFlats: 5 },
    { left: "12.6%", top: "325px", width: "575px", availableFlats: 5 },
    { left: "12.6%", top: "370px", width: "575px", availableFlats: 5 },
    { left: "12.6%", top: "410px", width: "575px", availableFlats: 5 },
    { left: "12.6%", top: "455px", width: "575px", availableFlats: 5 },
    { left: "-7.5%", top: "495px", width: "656px", availableFlats: 5 },
    { left: "-7.5%", top: "540px", width: "656px", availableFlats: 5 },
    { left: "-7.5%", top: "580px", width: "656px", availableFlats: 5 },
    { left: "-7.5%", top: "625px", width: "656px", availableFlats: 5 },
    { left: "-7.5%", top: "665px", width: "656px", availableFlats: 5 },
  ];
  const reversedFlatPositions = flatPositions.slice().reverse();

  return (
    <div className="relative l left-[30%]">
      <img
        src="https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.15752-9/353893815_222306590728799_8394837279183663069_n.png?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Ltlf6gI8oskAX-F01sA&_nc_ht=scontent.ftbs10-1.fna&oh=03_AdSiP7_mU__GONUUt_Xdx_rg6CImqTMwS1PEROqRi7kr4w&oe=64C5371A"
        alt="Building"
        useMap="#flatMap"
        className="image1 absolute brightness-90"
        class="image1"
      />
      <div className="absolute left-[4%] w-[400px] top-28">
        {reversedFlatPositions.map((position, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              left: position.left,
              top: position.top,
              height: "20px",
              width: position.width,
              borderRadius: 4,
              backdropFilter:
                hoveredFlat === index
                  ? position.availableFlats === 0
                    ? "brightness(2) saturate(0%) sepia(100%) hue-rotate(335deg) brightness(1.1)"
                    : "brightness(2)"
                  : "none",
            }}
            onMouseEnter={() => handleFlatHover(index)}
            onMouseLeave={handleFlatLeave}
            onClick={() => handleFlatClick(index)}
          >
            <p className="">
              {hoveredFlat === index ? (
                <div className="">
                  <div
                    className={`bg-white w-48 h-40 absolute right-[10%] rounded-xl p-3 ${
                      position.availableFlats === 0 ? "bg-red-500" : ""
                    }`}
                  >
                    <p className="text-black flex flex-col">
                      <span className="text-bold text-2xl font-bold">
                        სართული:
                      </span>{" "}
                      {hoveredFlat + 1}
                    </p>
                    <p className="text-black">
                      <span className="text-bold text-lg font-bold">
                        თავისუფალი ბინა:{" "}
                      </span>
                      <p>{position.availableFlats}</p>
                    </p>
                  </div>
                </div>
              ) : null}
            </p>
          </div>
        ))}
      </div>
      <polygon></polygon>
    </div>
  );
};

export default Building;
