import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import DonationsALl from "../../components/DonationsALl/DonationsALl";

const Home = () => {

    const donations = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div>
                {
                    donations.map(donation => <DonationsALl
                        key={donation.id}
                        donation={donation}
                    ></DonationsALl>)
                }
            </div>
        </div>
    );
};

export default Home;