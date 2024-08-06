import css from "./Dashboard.module.css";
import { cardsData, groupNumber } from "../../data";
import Statistics from "../../components/Statistics/Statistics";
import Orders from "../../components/Orders/Orders";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <div className={`${css.dashboard} theme-container`}>
        <div className={css.dashboardHead}>
          <div className={css.head}>
            <span>Dashboard</span>

            <div className={css.durationButton}>
              <select>
                <option value="">1 Week</option>
                <option value="">1 Month</option>
                <option value="">1 Year</option>
              </select>
            </div>
          </div>

          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <>
                <div className={css.card} key={index}>
                  <div className={css.cardHead}>
                    <span>{card.title}</span>
                    <span>+{card.change}</span>
                  </div>

                  <div className={css.cardAmount}>
                    <span>₹</span>
                    <span>{groupNumber(card.amount)}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <Statistics />
      </div>

      <Orders />
    </div>
  );
};

export default Dashboard;