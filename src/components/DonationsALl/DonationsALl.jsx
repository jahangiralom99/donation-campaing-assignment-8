import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsALl = ({ donation }) => {
  const { category, picture, title, category_bg, card_bg, text_color, id } =
    donation;

  const dynamicStyles = {
    categoryBackground: {
      backgroundColor: category_bg,
    },
    cardBackground: {
      backgroundColor: card_bg,
    },
    textColors: {
      color: text_color,
    },
  };

  return (
    <Link to={`/donations/${id}`}>
      <div
        style={dynamicStyles.cardBackground}
        className={`rounded-xl  bg-${card_bg}`}
      >
        <div className="">
          <img
            className=" lg:h-[170px] lg:w-[300px] w-[400px]"
            src={picture}
            alt="ui/ux review check"
          />
        </div>
        <div className="mt-4 space-y-2">
          <p
            style={dynamicStyles.cardBackground}
            className="p-4 w-28 rounded-lg"
          >
            {category}
          </p>
          <h2
            style={dynamicStyles.textColors}
            className={`text-xl font-bold bg-[${donation.text_color}]`}
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

DonationsALl.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default DonationsALl;
