import css from './Statistics.module.css';
import { getRandomHexColor } from 'helpers/getRandomHexColor';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
