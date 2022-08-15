import React, { useEffect, useState } from "react";
import NotificationsCard from "./notificationsCard";
import {
  ProfileService,
  INotificationReceiver,
  INotificationSent,
} from "../../../../services/profile/profile.http";
import classNames from "classnames";
import { Button } from "../../../common/form";

const SentNotification = () => {
  const [sentNotifications, setSentNotifications] = useState<
    INotificationSent[] | null
  >(null);

  useEffect(() => {
    ProfileService.getSentNotifications()
      .then((res) => {
        console.log(res);
        setSentNotifications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemoveRequest = (id: number) => {
    ProfileService.deleteContactRequest(id)
      .then((res) => {
        console.log();
      })
      .catch((err) => {
        console.log();
      });
  };

  return (
    <>
      {sentNotifications?.map((el, i) => {
        return (
          <div key={i} className="col-12 col-sm-1 col-md-4">
            <NotificationsCard
              text={`თქვენ გაგზავნილი გაქვთ ${el.receiver_firstname} ${el.receiver_lastname} - სთან კონტაქტების ნახვის მოთხოვნა`}
              id={el.receiver_id}
            >
              <Button
                onClick={() => handleRemoveRequest(el.id)}
                className="btn btn-light w-100"
              >
                მოთხოვნის გაუქმება
              </Button>
            </NotificationsCard>
          </div>
        );
      })}
    </>
  );
};

export default SentNotification;
