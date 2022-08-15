import React, { useEffect, useState } from "react";
import ProfileCard from "./profileCard";
import {
  ProfileService,
  ISearchItems,
} from "../../../services/profile/profile.http";

const Favorites = () => {
  const [favoritesList, setFavoritesList] = useState<ISearchItems[] | null>(
    null
  );

  useEffect(() => {
    ProfileService.getFavorites()
      .then((res) => {
        console.log(res);
        setFavoritesList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateAddRemove = (id, saveId) => {
    // debugger;
    setFavoritesList(favoritesList.filter((el) => el.favourite_id !== id));
  };

  return (
    <div className="mt-3">
      {favoritesList?.map((el) => {
        return (
          <ProfileCard
            key={el.favourite_id}
            {...el}
            isSaved={true}
            updateAddRemove={updateAddRemove}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
