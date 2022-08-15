import React, { useEffect, useState } from "react";
import NotificationsCard from "./notificationsCard";
import {
  ProfileService,
  INotificationReceiver,
  INotificationSent,
} from "../../../../services/profile/profile.http";
import classNames from "classnames";
import { Button } from "../../../common/form";

const ReceiveNotification = () => {
  const [sentNotifications, setSentNotifications] = useState<
    INotificationReceiver[] | null
  >(null);

  useEffect(() => {
    ProfileService.getReceivedNotifications()
      .then((res) => {
        console.log(res);
        setSentNotifications(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {sentNotifications?.map((el, i) => {
        return (
          <div key={i} className="col-12 col-sm-1 col-md-4">
            <NotificationsCard
              type="receive"
              text={`${el.sender_firstname} ${el.sender_lastname} - ს უნდა თქვენი კონტაქტების ნახვა`}
              id={el.sender_id}
            >
              <>
                <Button className="btn btn-light w-50  mr-3">უარყოფა</Button>
                <Button className="btn btn-primary w-50">დაშვება</Button>
              </>
            </NotificationsCard>
          </div>
        );
      })}
    </>
  );
};

export default ReceiveNotification;
