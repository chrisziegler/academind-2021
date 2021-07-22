import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

export default function AllMeetUpPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(
        'https://academind-react-2021-default-rtdb.firebaseio.com/meetup.json',
      );
      const data = await response.json();
      // console.log(data);
      // transform object of keyed objects data to array of objects
      const meetups = [];
      for (const key in data) {
        // console.log('key:', key, 'value:', data[key]);
        const meetup = {
          id: key,
          // spread out the values for each object we iterate over: address, descrip, etc...
          ...data[key],
        };
        meetups.push(meetup);
      }
      const newestFirst = meetups.reverse();
      setLoadedMeetups(newestFirst);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/a/af/07-17-2012_-_Oia_-_Santorini_-_Greece_-_15.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

// useEffect(() => {
//   setIsLoading(true);
//   fetch(
//     'https://academind-react-2021-default-rtdb.firebaseio.com/meetup.json',
//   )
//     .then(response => {
//       // json method returns a promise, need to return it to be thenable
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       const meetups = [];
//       for (const key in data) {
//         const meetup = {
//           id: key,
//           ...data[key],
//         };
//         meetups.push(meetup);
//       }
//       const newestFirst = meetups.reverse();
//       setLoadedMeetups(newestFirst);
//       setIsLoading(false);
//     });
// }, []);
