import css from './App.module.css';
import { Friends } from '../Friends/Friends';
import friends from '../../data/friends.json';
import { Profile } from '../Profile/Profile';
import user from '../../data/user.json';
import { Statistics } from '../Statistic/Statistics';
import data from '../../data/data.json';
import { TransactionHistory } from '../Transaction/TransactionHistory';
import transactions from '../../data/transactions.json';

export const App = () => {
  return (
    <div className={css.div}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
