import { UserProfile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransActions/TransactionHistory';

import user from 'data/user.json';
import StatData from 'data/data.json';
import Friend from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <UserProfile user={user} />
      <Statistics stats={StatData} title="My stats" />
      <FriendList friends={Friend} />
      <TransactionHistory items={transactions} />
    </>
  );
};
