import React from "react";
import Link from "next/link";
import classnames from "classnames";
import { useRouter } from "next/router";

const ProfileTab = () => {
  const router = useRouter();
  return (
    <div className="profile_tab d-flex">
      <Link href="/profile">
        <a
          className={classnames("btn", {
            active: router.asPath === "/profile",
          })}
        >
          შეტყობინებები
        </a>
      </Link>
      <Link href="/profile/favorites">
        <a
          className={classnames("btn", {
            active: router.asPath === "/profile/favorites",
          })}
        >
          ფავორიტები
        </a>
      </Link>
    </div>
  );
};

export default ProfileTab;
