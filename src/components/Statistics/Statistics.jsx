import { BsArrowUpShort } from "react-icons/bs";
import css from "./Statistics.module.css";
import { groupNumber } from "../../data";
import StatisticsChart from "../StatisticsChart/StatisticsChart";

const Statistics = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.title}>
        Overview Statistics{" "}
        <span>
          <div className={`${css.cards} grey-container`}>
            <div>
              <div className={css.arrowIcon}>
                <BsArrowUpShort />
              </div>

              <div className={css.card}>
                <span>Top item this month</span>
                <span>Office comps</span>
              </div>
            </div>

            <div className={css.card}>
              <span>Items</span>
              <span>₹ {groupNumber(455)}</span>
            </div>
            <div className={css.card}>
              <span>Profit</span>
              <span>₹ {groupNumber(10000)}</span>
            </div>
            <div className={css.card}>
              <span>Daily Average</span>
              <span>₹ {groupNumber(2000)}</span>
            </div>
          </div>
        </span>
      </div>

      <StatisticsChart />
    </div>
  );
};

export default Statistics;