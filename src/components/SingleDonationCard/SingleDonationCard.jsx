import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleDonationCard = () => {
  const [donate, setDonate] = useState([]);

  const donations = useLoaderData();
  const ParId = useParams();
  const id = parseInt(ParId.id);

  useEffect(() => {
    const findDonate = donations.find((donate) => donate.id === id);
    setDonate(findDonate);
  }, [id, donations]);

  const {
    picture,
    title,
    category_bg,
    card_bg,
    text_color,
    description,
    price,
  } = donate;

  const dynamicStyles = {
    categoryBackground: {
      backgroundColor: category_bg,
      padding: "10px",
    },
    cardBackground: {
      backgroundColor: card_bg,
    },
    textColor: {
      backgroundColor: text_color,
    },
  };

  return (
    <div className="">
      <div className="space-y-5 ">
        <img
          className="w-[900px] h-[500px] md:h-[500px] rounded-lg inline text-center"
          src={picture}
          alt=""
        />
        <div className="absolute top-[460px] md:top-[459px] rounded-md bg-[#0B0B0B80] h-[120px] w-[670px] md:w-[900px]">
          <button
            className="mt-5 ml-12 py-5 px-8 rounded-lg text-white"
            style={dynamicStyles.textColor}
          >
            Donate {price}
          </button>
        </div>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SingleDonationCard;
