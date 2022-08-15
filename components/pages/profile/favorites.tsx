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

  return (
    <div>
      {favoritesList?.map((el) => {
        return <ProfileCard {...el} />;
      })}
    </div>
  );
};

export default Favorites;
