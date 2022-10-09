import css from './Statistic.module.css'
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats}) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.stat_list}>
          {stats.map(({ id, label, percentage })=> {
            return (
              <li key={id} className={css.item}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
              </li>
            )
          })}
        </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }))
}