import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  function getBgColor(variant) {
    return variant ? 'green' : 'red';
  }
  return (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={{ backgroundColor: getBgColor(isOnline) }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
