import React, { useEffect, useState } from "react";
import NotificationsCard from "./notificationsCard";
import {
  ProfileService,
  INotificationReceiver,
  INotificationSent,
} from "../../../../services/profile/profile.http";
import classNames from "classnames";
import { Button } from "../../../common/form";
import { ToastContainer, toast } from "react-toastify";

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
        toast.success("მოთხოვნა გაუქმდა", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setSentNotifications(
          sentNotifications.filter((el) => el.receiver_id !== id)
        );
      })
      .catch((err) => {
        console.log();
      });
  };

  return (
    <>
      {sentNotifications?.map((el, i) => {
        return (
          <div key={i} className="col-12 col-sm-12 col-md-4">
            <ToastContainer />
            <NotificationsCard
              text={`თქვენ გაგზავნილი გაქვთ ${el.receiver_firstname} ${el.receiver_lastname} - სთან კონტაქტების ნახვის მოთხოვნა`}
              id={el.receiver_id}
            >
              <Button
                onClick={() => handleRemoveRequest(el.receiver_id)}
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
