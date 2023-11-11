import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DonationsALl = ({ donation }) => {
  const { category, picture, title, category_bg, card_bg, text_color } =
    donation;
  console.log(donation);
  console.log(card_bg);
  return (
    <Link to="">
      <div className={`rounded-xl  bg-${card_bg}`}>
        <div className="">
          <img className=" lg:h-[170px] lg:w-[300px] w-[400px]" src={picture} alt="ui/ux review check" />
        </div>
        <div className="mt-4">
                  <h3 className={`text-${text_color}  `}>{category}</h3>
                  <h2 className={`text-xl font-bold bg-[${donation.text_color}]`}>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

DonationsALl.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default DonationsALl;
