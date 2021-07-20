import classes from './MeetupList.module.css';
import MeetupItem from './MeetupItem';

function MeetupList({ meetups }) {
  console.log(meetups);
  return (
    <ul className={classes.list}>
      {meetups.map(meetup => (
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
