import css from './Friends.module.css'
import PropTypes from 'prop-types'
export const Friends = ({friends}) => {
    return (
        <ul className={css.list}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                return (
                    <li className={css.item} key={id}> 
    <span className={css.status}>{isOnline === true ? <ul className={css.isOnline}></ul> : <ul className={css.isOfline}></ul>}</span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
            </li>)
            })}
    </ul>
    )
}

Friends.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }))
}