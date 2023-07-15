import "./barchart.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  title: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: Props) => {
  return (
    <div className="barChartbox">
      <h1>{props.title}</h1>
      <ResponsiveContainer width="99%" height={120}>
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
            labelStyle={{ display: "none" }}
            cursor={{ fill: "none" }}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
