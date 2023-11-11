import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import DonationsALl from "../../components/DonationsALl/DonationsALl";

const Home = () => {
  const donations = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:grid-cols-2 justify-items-center mt-12">
        {donations.map((donation) => (
          <DonationsALl key={donation.id} donation={donation}></DonationsALl>
        ))}
      </div>
    </div>
  );
};

export default Home;
