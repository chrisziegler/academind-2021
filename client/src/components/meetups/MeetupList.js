// import { DUMMY_DATA } from '../../pages/AllMeetups';

import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map(meetup => (
        <MeetupItem
          key={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;