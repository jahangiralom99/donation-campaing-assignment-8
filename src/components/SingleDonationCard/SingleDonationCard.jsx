import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const SingleDonationCard = () => {

  const [donate, setDonate] = useState({});

  const donations = useLoaderData();
  const ParId = useParams();
  const ids = parseInt(ParId.id);

  useEffect(() => {
    const findDonate = donations.find((donate) => donate.id === ids);
    setDonate(findDonate);
  }, [ids, donations]);

  const {
    picture,
    title,
    category_bg,
    card_bg,
    text_color,
    description,
    price,
    id
  } = donate || {};

  const dynamicStyles = {
    textColor: {
      backgroundColor: text_color,
    },
  };



  const handleDonatePriceBtn = () => {
    const addedDonateItem = []
    const donateItems = JSON.parse(localStorage.getItem('donate'));
    if (!donateItems) {
      addedDonateItem.push(donate);
      localStorage.setItem('donate', JSON.stringify(addedDonateItem));
      swal("Good job!", "Your Donate Done!", "success");
    }
    else {
      const isExits = donateItems.find(donate => donate.id === id)
      if (!isExits) {
        addedDonateItem.push(...donateItems, donate)
        localStorage.setItem('donate', JSON.stringify(addedDonateItem));
        swal("Good job!", "You clicked the button!", "success");
      }
      else {
        return swal("Waring!", "You All Ready added this items!", "warning");
      }
      
    }

  }


  return (
    <div className="flex items-center justify-center">
      <div className="space-y-5 ">
        <img
          className="w-[900px] h-[500px] md:h-[500px] rounded-lg inline"
          src={picture}
          alt=""
        />
        <div className="absolute top-[460px] md:top-[459px] rounded-md bg-[#0B0B0B80] h-[120px] w-[670px] md:w-[900px]">
          <button
            onClick={handleDonatePriceBtn}
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
