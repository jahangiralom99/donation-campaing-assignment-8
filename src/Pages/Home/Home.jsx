import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import DonationsALl from "../../components/DonationsALl/DonationsALl";
import { useState } from "react";

const Home = () => {
  const donations = useLoaderData();
  const [searchData, setSearchData] = useState([...donations])

  const handleSearchBtn = (e) => {
    e.preventDefault()
    const text = e.target.text.value;

    const filtered = donations.filter(item => item.title.toLowerCase().includes(text));
    console.log(filtered);
    setSearchData(filtered)
    
  }

  return ( 
    <div>
      <Banner handleSearchBtn={handleSearchBtn}></Banner>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:grid-cols-2 justify-items-center mt-12">
        {searchData?.map((donation) => (
          <DonationsALl key={donation.id} donation={donation}></DonationsALl>
        ))}
      </div>
    </div>
  );
};

export default Home;
