import { Pie, PieChart } from "recharts";

const Statistics = () => {

    const data01 = [
        {
          "name": "Group A",
          "value": 50
        },
        {
          "name": "Group B",
          "value": 100
        },
      ];
    return (
        <div className="mt-12 text-center flex items-center justify-center">
            <PieChart width={730} height={250}>
                <Pie
                    dataKey="value"
                    data={data01}
                    nameKey="name"
                    fill="#8884d8"
                    label
                > </Pie>
            </PieChart>
        </div>
    );
};

export default Statistics;