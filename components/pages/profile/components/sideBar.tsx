import React, { useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../../../common/form";
import { ProfileService } from "../../../../services/profile/profile.http";

interface ISidebar {
  firstname: string;
  lastname: string;
  about_me: string;
  phone: string | null;
  social_network: any;
  signOut?: () => void;
  myProfile?: boolean;
  is_locked_communication?: boolean;
}

const SideBar: React.FC<ISidebar> = (props) => {
  console.log(props, "propspropsprops");
  const router = useRouter();
  const [status, setStatus] = useState<"load" | boolean>(false);

  const userContactRequest = () => {
    setStatus("load");
    ProfileService.addContactRequest(Number(router.query.userId))
      .then((res) => {
        console.log(res);
        setStatus(true);
      })
      .catch((err) => {
        setStatus(false);

        console.log(err);
      });
  };

  return (
    <div className="profile_sideBar">
      <div className="profile_userHeading">
        <img src="https://www.portmelbournefc.com.au/wp-content/uploads/2022/03/avatar-1.jpeg" />
        <span>
          {props?.firstname} {props?.lastname}
        </span>
      </div>
      <div className="profile_aboutMe">
        <div>ჩემ შესახებ</div>
        <p>{props?.about_me}</p>
      </div>
      {!props.myProfile && props.is_locked_communication ? (
        <div className="profile_contacts">
          <Button
            loading={status === "load"}
            disabled={!!status}
            onClick={userContactRequest}
            className="btn btn-primary mb-4"
          >
            {status ? "მოთხოვნა გაგზავნილია" : " კონტაქტის მოთხოვნა"}
          </Button>
        </div>
      ) : (
        <div className="profile_contacts">
          <div>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.34333 1.88889C3.4 2.72944 3.54167 3.55111 3.76833 4.335L2.635 5.46833C2.24778 4.335 2.00222 3.13556 1.91722 1.88889H3.34333ZM12.6556 13.2411C13.4583 13.4678 14.28 13.6094 15.1111 13.6661V15.0733C13.8644 14.9883 12.665 14.7428 11.5222 14.365L12.6556 13.2411ZM4.25 0H0.944444C0.425 0 0 0.425 0 0.944444C0 9.81278 7.18722 17 16.0556 17C16.575 17 17 16.575 17 16.0556V12.7594C17 12.24 16.575 11.815 16.0556 11.815C14.8844 11.815 13.7417 11.6261 12.6839 11.2767C12.5894 11.2389 12.4856 11.2294 12.3911 11.2294C12.1456 11.2294 11.9094 11.3239 11.7206 11.5033L9.64278 13.5811C6.97 12.2117 4.77889 10.03 3.41889 7.35722L5.49667 5.27944C5.76111 5.015 5.83667 4.64667 5.73278 4.31611C5.38333 3.25833 5.19444 2.125 5.19444 0.944444C5.19444 0.425 4.76944 0 4.25 0Z"
                fill="#5E666E"
              />
            </svg>
            {props?.phone}
          </div>
          {props?.social_network ? (
            <div>
              <a href={props?.social_network} rel="noreferrer" target="_blank">
                <svg
                  width="8"
                  height="17"
                  viewBox="0 0 8 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.79631 17H5.21133V8.42146H7.59502L7.85456 5.55284H5.21133V3.92045C5.21133 3.23745 5.3411 2.9779 5.99678 2.9779H7.85456V0H5.4777C2.93009 0 1.78264 1.12013 1.78264 3.26476V5.55966H0V8.46243H1.78264L1.79631 17Z"
                    fill="#5E666E"
                  />
                </svg>
                {props?.firstname} {props?.lastname}
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      <div className="profile_menu">
        {props.myProfile ? (
          <ul className="list-unstyled">
            <li>
              <Link href="/profile">
                <a
                  className={classnames({
                    active: "/profile" === router.asPath,
                  })}
                >
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0714 4.53333C12.0714 6.75721 10.2528 8.56667 8 8.56667C5.74719 8.56667 3.92857 6.75721 3.92857 4.53333C3.92857 2.30945 5.74719 0.5 8 0.5C10.2528 0.5 12.0714 2.30945 12.0714 4.53333ZM8 11.2667C8.96368 11.2667 9.8809 11.0617 10.71 10.7H11.2C13.5778 10.7 15.5 12.6122 15.5 14.96V16.4333C15.5 17.0918 14.96 17.6333 14.2857 17.6333H1.71429C1.04005 17.6333 0.5 17.0918 0.5 16.4333V14.96C0.5 12.6122 2.42219 10.7 4.8 10.7H5.29042C6.12177 11.0615 7.03566 11.2667 8 11.2667Z"
                      stroke="#5E666E"
                    />
                  </svg>
                  ჩემი გვერდი
                </a>
              </Link>
            </li>

            <li>
              <Link href="/profile/edit">
                <a
                  className={classnames({
                    active: "/profile/edit" === router.asPath,
                  })}
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6237 9.24274L13.5903 9.52086L13.8101 9.69457L15.4674 11.0045L13.8972 13.7228L11.9306 12.9322L11.6682 12.8267L11.4425 12.9973C11.0495 13.2945 10.6241 13.5488 10.1665 13.7355L9.90065 13.844L9.86042 14.1284L9.56319 16.2288H6.42652L6.1293 14.1284L6.08906 13.844L5.82318 13.7355C5.36416 13.5481 4.94953 13.3038 4.54865 12.9984L4.32269 12.8262L4.05913 12.9322L2.09247 13.7228L0.522564 11.0049L2.19792 9.69636L2.43049 9.51471L2.38386 9.22331C2.34724 8.99441 2.32843 8.74323 2.32843 8.5C2.32843 8.26845 2.35537 8.01905 2.39415 7.7767L2.44077 7.4853L2.20821 7.30365L0.53285 5.99509L2.10276 3.27719L4.06941 4.06781L4.33185 4.17331L4.55747 4.00272C4.95052 3.70553 5.37595 3.45125 5.83347 3.26451L6.09935 3.15599L6.13958 2.87164L6.43681 0.77124H9.57348L9.8707 2.87164L9.91094 3.15599L10.1768 3.26451C10.6358 3.45186 11.0505 3.69617 11.4514 4.00161L11.6773 4.17376L11.9409 4.06781L13.9075 3.27719L15.4774 5.99509L13.8021 7.30365L13.5695 7.4853L13.6161 7.7767C13.6528 8.00606 13.6716 8.247 13.6716 8.5C13.6716 8.75313 13.6528 9.00008 13.6237 9.24274ZM4.41421 8.5C4.41421 10.4733 6.02668 12.0858 8 12.0858C9.97332 12.0858 11.5858 10.4733 11.5858 8.5C11.5858 6.52668 9.97332 4.91422 8 4.91422C6.02668 4.91422 4.41421 6.52668 4.41421 8.5Z"
                      stroke="#5E666E"
                    />
                  </svg>
                  პროფილის რედაქტირება
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile/balance">
                <a
                  className={classnames({
                    active: "/profile/balance" === router.asPath,
                  })}
                >
                  <svg
                    className="fillHover"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.15858 8.84235C1.76715 8.60576 1.38104 8.40434 1.03057 8.1539C0.355682 7.67113 0.0599889 7.03011 0.00574265 6.16582C-0.0782859 4.80705 0.577987 4.0083 1.68312 3.44827C1.91713 3.32944 2.06657 3.19729 2.14794 2.933C2.28196 2.49606 2.60052 2.17528 2.95738 1.90139C3.83011 1.23213 4.8427 0.893766 5.90689 0.702471C7.87092 0.349189 9.80624 0.439242 11.6905 1.14314C12.3175 1.3776 12.8972 1.69838 13.378 2.17688C13.7933 2.59091 14.0273 3.079 13.9986 3.67846C13.9747 4.17828 13.955 4.67916 13.9337 5.17951L13.8593 5.19603C13.9387 5.22955 14.016 5.26799 14.0906 5.31112C14.4975 5.57755 14.9299 5.81041 15.3011 6.11893C15.7797 6.51538 16.0307 7.04716 15.9924 7.69138C15.9799 7.87767 15.9799 8.06459 15.9924 8.25088C16.0456 8.98089 15.7334 9.54731 15.1873 9.98745C14.8864 10.2204 14.5675 10.4291 14.2337 10.6114C14.0715 10.7036 13.9891 10.8166 13.8944 10.9759C13.6817 11.3318 13.7465 11.6111 13.8816 11.9883C14.1108 12.6277 14.0715 13.3252 13.9061 13.9833C13.7614 14.5609 13.3211 14.9425 12.8424 15.2675C11.9192 15.8893 10.8784 16.1973 9.79188 16.3604C7.98367 16.6321 6.20524 16.5309 4.47362 15.9144C3.80883 15.6783 3.19032 15.356 2.67657 14.8588C2.24101 14.4378 1.99584 13.9375 2.02562 13.3167C2.04264 12.9624 2.00807 12.6016 2.06391 12.2547C2.10645 11.9926 2.32982 11.7485 2.33354 11.4954C2.33354 11.2519 2.0905 11.0159 2.06763 10.7617C2.00169 10.118 1.95063 9.46792 2.15858 8.84235ZM8.00867 1.00353C6.75036 1.02112 5.51865 1.18524 4.3497 1.68186C3.80724 1.91258 3.29988 2.20032 2.90473 2.65111C2.40428 3.22233 2.38194 3.82339 2.92122 4.35625C3.26393 4.68708 3.65177 4.96749 4.07315 5.1891C4.87089 5.61538 5.74681 5.81254 6.64028 5.91538C8.28894 6.10614 9.91261 5.99904 11.4799 5.40544C12.0894 5.17418 12.6595 4.86939 13.1046 4.3765C13.6237 3.80208 13.6248 3.21967 13.1142 2.64153C12.7547 2.23389 12.2994 1.96054 11.8118 1.74047C10.6024 1.19589 9.31962 1.02005 8.00867 1.00353ZM6.85886 9.51374C7.01538 9.57143 7.17521 9.61964 7.3375 9.65814C7.93793 9.76471 8.53677 9.90699 9.14252 9.95708C10.7157 10.0866 12.2574 9.92777 13.7258 9.30113C14.2768 9.06561 14.7868 8.76402 15.1734 8.28871C15.5946 7.77397 15.5989 7.25551 15.1883 6.73917C14.7889 6.23936 14.2443 5.93989 13.6705 5.69584C13.6173 5.67293 13.521 5.70543 13.4657 5.74327C13.0147 6.05161 12.5673 6.36493 12.1234 6.68322C12.0535 6.74161 11.9953 6.81265 11.9516 6.89264C11.7681 7.19157 11.6288 7.52779 11.4017 7.78783C10.9683 8.28498 10.3833 8.57645 9.77911 8.82103C8.83938 9.20309 7.8571 9.3768 6.85673 9.51374H6.85886ZM2.72391 11.9345C2.45427 12.3475 2.47661 12.7439 2.7372 13.1206C2.86644 13.3082 3.01269 13.5075 3.19936 13.6263C3.65194 13.9151 4.10825 14.2236 4.60604 14.4101C6.4552 15.1028 8.35808 15.1492 10.279 14.7581C11.0555 14.5982 11.8128 14.36 12.4595 13.8959C12.8015 13.6484 13.1015 13.3474 13.3482 13.0045C13.6083 12.6437 13.5386 12.2515 13.2722 11.9388C10.9576 13.9977 5.10755 14.0398 2.72178 11.9345H2.72391ZM2.02881 3.88841L1.95542 3.83192C1.64164 4.06798 1.3018 4.27579 1.01994 4.54541C0.369512 5.16832 0.37802 5.83065 1.01196 6.46795C1.4321 6.89103 1.94265 7.17451 2.49363 7.38179C4.43266 8.11234 6.41425 8.16989 8.42243 7.72549C8.69579 7.66474 8.96223 7.57149 9.2324 7.49369C9.17306 7.45734 9.10248 7.44407 9.03403 7.45639C7.563 7.58002 6.11536 7.46652 4.70709 7.00347C3.95296 6.75516 3.2451 6.41733 2.667 5.8509C2.24154 5.43421 1.9985 4.94132 2.02881 4.33174C2.03253 4.18254 2.02668 4.03441 2.02668 3.88681L2.02881 3.88841ZM2.667 9.02459C2.41598 9.49456 2.54255 9.90592 2.84888 10.2827C3.28126 10.8155 3.86308 11.1352 4.48797 11.3771C6.243 12.0528 8.05866 12.1396 9.89825 11.8295C10.3546 11.7528 10.8024 11.6164 11.2523 11.505L11.2369 11.4379C11.1496 11.4453 11.0624 11.4533 10.9752 11.4597C9.42173 11.5754 7.89645 11.4496 6.42595 10.9008C5.61226 10.5965 4.86025 10.1921 4.3364 9.45886C4.30044 9.41069 4.24927 9.37614 4.19121 9.36081C3.68864 9.24518 3.18819 9.13755 2.66328 9.02299L2.667 9.02459ZM7.1987 1.89233C6.72005 1.94562 6.24619 2.00903 5.83935 2.29677C5.38091 2.62181 5.38676 3.06621 5.88615 3.32038C6.1962 3.48024 6.54668 3.57402 6.8897 3.64596C7.513 3.77704 8.14641 3.8591 8.77077 3.98698C8.88459 4.01043 8.97446 4.14684 9.07551 4.2337C8.97925 4.32535 8.88671 4.42232 8.78407 4.50652C8.73993 4.53716 8.68725 4.55302 8.63356 4.55181C8.2081 4.55181 7.78264 4.58325 7.36622 4.52676C7.15349 4.49799 6.95831 4.31362 6.75622 4.19373C6.71314 4.16869 6.67165 4.10901 6.63336 4.1122C6.18131 4.15323 5.72926 4.20332 5.21817 4.25767C5.8452 5.04523 6.70409 5.04523 7.52523 5.15766L7.55076 5.58394H8.47401L8.50273 5.1534C8.72184 5.13155 8.91649 5.11717 9.10955 5.09212C9.58819 5.03031 10.0589 4.94772 10.462 4.66104C10.8906 4.35625 10.8874 3.91185 10.4317 3.66034C10.1512 3.51073 9.85034 3.40302 9.53873 3.34063C8.84736 3.19303 8.14481 3.08913 7.45078 2.94898C7.34814 2.92874 7.26517 2.80991 7.17317 2.73584C7.25879 2.64632 7.32952 2.50725 7.4327 2.47581C8.02622 2.29517 8.60272 2.31115 9.12125 2.71186C9.16858 2.7481 9.22761 2.80724 9.27388 2.80085C9.67913 2.74437 10.0823 2.6751 10.5423 2.60103C9.9509 1.96747 9.20953 1.94615 8.49688 1.85503L8.47242 1.53532H7.54704C7.53694 1.65148 7.52843 1.74846 7.51832 1.8625C7.40345 1.86782 7.29921 1.87902 7.19497 1.89074L7.1987 1.89233Z"
                      fill="#5E666E"
                    />
                  </svg>
                  ბალანსის შევსება
                </a>
              </Link>
            </li>
            <li>
              <a href="#" onClick={() => props?.signOut()}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2L12.6667 2C13.0203 2 13.3594 2.14047 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333L14 12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14L10 14"
                    stroke="#5E666E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.33325 4.66665L1.99992 7.99998L5.33325 11.3333"
                    stroke="#5E666E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 8L10 8"
                    stroke="#5E666E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                გამოსვლა
              </a>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default SideBar;
