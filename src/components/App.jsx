import { UserProfile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import statData from 'data/data.json';
import friend from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <UserProfile user={user} />
      <Statistics stats={statData} title="My stats" />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </>
  );
};
