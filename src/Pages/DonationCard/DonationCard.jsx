import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const {
    picture,
    title,
    category_bg,
    card_bg,
    text_color,
    category,
    price,
    id,
  } = donation || {};

  const dynamicStyles = {
    categoryBackground: {
      backgroundColor: category_bg,
    },
    cardBackground: {
      backgroundColor: card_bg,
    },
    textBgColors: {
      backgroundColor: text_color,
    },
    textColors: {
      color: text_color,
    },
  };

  return (
    <div
      style={dynamicStyles.cardBackground}
      className="flex items-center gap-6"
    >
      <div>
        <img className="w-[300px] h-[200px]" src={picture} alt="" />
      </div>
      <div className="space-y-3">
        <p style={dynamicStyles.categoryBackground} className="p-2 rounded-lg font-bold ">
          {category}
              </p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p style={dynamicStyles.textColors} className="font-bold">{price}</p>
              <Link to={`/donations/${id}`}>
              <button
          style={dynamicStyles.textBgColors}
          className="py-3 px-6 rounded-lg text-white font-bold"
        >
          View Details
        </button>
              </Link>
      </div>
    </div>
  );
};

export default DonationCard;
