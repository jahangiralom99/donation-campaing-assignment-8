import { Cell, Pie, PieChart } from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Group A",
      value: 50,
    },
    {
      name: "Group B",
      value: 100,
    },
  ];
  return (
    <div>
      <div className="mt-12 text-center flex items-center justify-center">
        <PieChart width={730} height={250}>
          <Pie
            dataKey="value"
            data={data}
            nameKey="name"
            fill="#FF444A"
            label
            outerRadius={100}
          >
            {" "}
            <Cell key={2} fill="#0052FF"></Cell>{" "}
          </Pie>
        </PieChart>
      </div>
      <div className="flex gap-6 items-center justify-center mt-6">
        <div className="flex gap-5 items-center">
          <p className="font-bold">Your Donation</p>
          <p className="bg-[#0052FF] w-24 h-4"></p>
        </div>
        <div className="flex gap-5 items-center">
          <p className="font-bold">Total Donation</p>
          <p className="bg-[#FF444A] w-24 h-4"></p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
