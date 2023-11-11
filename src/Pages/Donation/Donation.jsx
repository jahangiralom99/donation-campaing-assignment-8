import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
    const [noData, setNoData] = useState(false);
    const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const donateItem = JSON.parse(localStorage.getItem("donate"));
    if (donateItem) {
      setDonations(donateItem);
    } else {
      setNoData("No data found !!!");
    }
  }, []);

  return (
    <div>
      {noData ? (
        <h1 className="text-red-500 text-4xl font-bold h-[80vh] flex items-center justify-center">
          {noData}
        </h1>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 ">
                          {
                              isShow? donations.map((donation) => (
                                <DonationCard
                                  key={donation.id}
                                  donation={donation}
                                ></DonationCard>
                              )) : donations.slice(0,4).map((donation) => (
                                <DonationCard
                                  key={donation.id}
                                  donation={donation}
                                ></DonationCard>
                              ))

            }
                      </div>
                      {
                          donations.length > 4 ?  <div className="text-center mt-12">
                          <button onClick={()=>setIsShow(!isShow) } className="px-6 py-4 border rounded-lg bg-red-600 text-white font-bold hover:bg-red-800">See All</button>
                      </div> : ''
                      }
        </div>
      )}
    </div>
  );
};

export default Donation;
