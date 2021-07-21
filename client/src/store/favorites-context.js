import { createContext, useState } from 'react';

// this will contain a react component
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // below just gives better IDE auto-completition later
  addFavorite: favoriteMeetup => {},
  removeFavorite: meetupId => {},
  itemIsFavorite: meetupId => {},
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // this pattern gets "scheduled" - may not update state right away
    // setUserFavorites(userFavorites.concat(favoriteMeetup))
    // this will guarantee we get the latest state snapshot
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(
        meetup => meetup.id !== meetupId,
      );
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addfavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
