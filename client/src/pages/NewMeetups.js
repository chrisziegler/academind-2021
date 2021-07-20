import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetUpPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    // in firebase realtime databse we can just add /arbitrary.json to the database location
    // to create that table/document resource
    fetch(
      'https://academind-react-2021-default-rtdb.firebaseio.com/meetup.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      },
      // use the fact that fetch returns a promise
    ).then(() => history.replace('/'));
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetUpPage;
