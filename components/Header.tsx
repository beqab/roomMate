import React, { useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import { useTypedSelector } from "../components/hooks/useTypeSelector";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action-creators";
import Logo from "../components/svg/logo";

interface IProps {
  type?: "profile";
}

function Header({ type }: IProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const { user } = useTypedSelector((state) => state.profile);

  const signOut = () => {
    dispatch(logout());
    // router.push("/login");
    window.location.replace("/login");
  };

  return (
    <div
      className={classnames("headerWrapper", {
        [type]: type,
      })}
    >
      <header>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Link href="/">
                <a className="logo">
                  <Logo />
                  <img className="logoPng" src="/imgs/logo.png" />
                </a>
              </Link>
            </div>
            <div className="nav nav_wrapper col-10 d-flex align-items-center justify-content-end">
              <ul
                className={classnames(
                  "navList list-inline   d-flex mb-0 mr-2",
                  {
                    open: openMenu,
                  }
                )}
              >
                <li
                  className={classnames("d-block d-md-none", {
                    ["d-none"]: !user,
                  })}
                >
                  <Link href="/profile/edit">
                    <a
                      className={classnames({
                        active: "/profile/edit" === router.asPath,
                      })}
                    >
                      {/* <svg
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
                      </svg> */}
                      <svg
                        className="mr-3"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.6237 9.24274L13.5903 9.52086L13.8101 9.69457L15.4674 11.0045L13.8972 13.7228L11.9306 12.9322L11.6682 12.8267L11.4425 12.9973C11.0495 13.2945 10.6241 13.5488 10.1665 13.7355L9.90065 13.844L9.86042 14.1284L9.56319 16.2288H6.42652L6.1293 14.1284L6.08906 13.844L5.82318 13.7355C5.36416 13.5481 4.94953 13.3038 4.54865 12.9984L4.32269 12.8262L4.05913 12.9322L2.09247 13.7228L0.522564 11.0049L2.19792 9.69636L2.43049 9.51471L2.38386 9.22331C2.34724 8.99441 2.32843 8.74323 2.32843 8.5C2.32843 8.26845 2.35537 8.01905 2.39415 7.7767L2.44077 7.4853L2.20821 7.30365L0.53285 5.99509L2.10276 3.27719L4.06941 4.06781L4.33185 4.17331L4.55747 4.00272C4.95052 3.70553 5.37595 3.45125 5.83347 3.26451L6.09935 3.15599L6.13958 2.87164L6.43681 0.77124H9.57348L9.8707 2.87164L9.91094 3.15599L10.1768 3.26451C10.6358 3.45186 11.0505 3.69617 11.4514 4.00161L11.6773 4.17376L11.9409 4.06781L13.9075 3.27719L15.4774 5.99509L13.8021 7.30365L13.5695 7.4853L13.6161 7.7767C13.6528 8.00606 13.6716 8.247 13.6716 8.5C13.6716 8.75313 13.6528 9.00008 13.6237 9.24274ZM4.41421 8.5C4.41421 10.4733 6.02668 12.0858 8 12.0858C9.97332 12.0858 11.5858 10.4733 11.5858 8.5C11.5858 6.52668 9.97332 4.91422 8 4.91422C6.02668 4.91422 4.41421 6.52668 4.41421 8.5Z"
                          stroke="white"
                        />
                      </svg>
                      პროფილის რედაქტირება
                    </a>
                  </Link>
                </li>
                <li
                  className={classnames("d-block d-md-none", {
                    ["d-none"]: !user,
                  })}
                >
                  <Link href="/profile/balance">
                    <a
                      className={classnames({
                        active: "/profile/balance" === router.asPath,
                      })}
                    >
                      <svg
                        className="mr-3"
                        width="16"
                        height="18"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.25127 10.6111C1.66805 10.4859 1.15061 10.278 0.722125 9.88917C0.242895 9.4546 0.0142455 8.90857 0.00422244 8.26925C-0.00266845 7.83907 0.305545 7.50532 0.712108 7.48779C0.811762 7.47997 0.911954 7.49272 1.00647 7.52524C1.10099 7.55776 1.18782 7.60936 1.26155 7.67683C1.33527 7.7443 1.39433 7.82621 1.43506 7.91745C1.47578 8.0087 1.4973 8.10735 1.49828 8.20726C1.51457 8.59048 1.71442 8.83907 2.04393 8.98372C2.68478 9.26549 3.33815 9.27113 3.97336 8.97683C4.60858 8.68253 4.72948 7.80213 4.17571 7.38197C3.83053 7.12023 3.40268 6.95241 2.99173 6.79399C2.31642 6.5335 1.6098 6.35003 1.01843 5.90169C0.182129 5.26863 -0.2188 4.01127 0.120733 3.02129C0.403885 2.19474 1.03973 1.75266 1.83469 1.49593C1.96687 1.45335 2.10218 1.42141 2.25127 1.38071C2.25127 1.17407 2.24751 0.971818 2.25127 0.77019C2.26067 0.331868 2.58455 0.00062707 2.99988 8.96433e-07C3.41522 -0.000625277 3.74097 0.326862 3.75162 0.76581C3.756 0.968065 3.75162 1.17095 3.75162 1.36318C4.03915 1.46274 4.3198 1.53475 4.57852 1.65435C5.4593 2.06199 5.98112 2.72824 5.99929 3.72824C6.00289 3.82607 5.98705 3.92365 5.95272 4.01534C5.91839 4.10703 5.86624 4.19102 5.79926 4.26245C5.73228 4.33388 5.65181 4.39135 5.56249 4.43153C5.47318 4.47171 5.37679 4.49381 5.27888 4.49655C5.18093 4.50134 5.083 4.48656 4.99083 4.45309C4.89866 4.41962 4.81409 4.36812 4.74206 4.3016C4.67003 4.23508 4.61198 4.15487 4.57132 4.06568C4.53065 3.97648 4.50818 3.88007 4.50522 3.78209C4.48893 3.4402 4.32981 3.19599 4.03789 3.05323C3.34191 2.71384 2.6309 2.70445 1.94557 3.06951C1.38491 3.36819 1.31349 4.22229 1.83406 4.62116C2.13601 4.85347 2.50937 5.00063 2.86644 5.15028C3.28992 5.32749 3.73782 5.44708 4.1613 5.62492C5.38474 6.13838 6.02435 7.07388 5.99929 8.29367C5.98175 9.15779 5.57331 9.80087 4.82722 10.2135C4.50335 10.3926 4.14189 10.5034 3.75224 10.6637C3.75224 10.8103 3.75224 11.0113 3.75224 11.2116C3.74661 11.6738 3.43901 11.9994 3.00488 12C2.57076 12.0006 2.25942 11.6738 2.25315 11.2141C2.24877 11.0188 2.25127 10.824 2.25127 10.6111Z"
                          fill="#fff"
                        />
                      </svg>
                      სტატუსი
                    </a>
                  </Link>
                </li>
                <li
                  className={classnames("d-block d-md-none", {
                    ["d-none"]: !user,
                  })}
                >
                  <a href="#" onClick={signOut}>
                    <svg
                      className="mr-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 2L12.6667 2C13.0203 2 13.3594 2.14047 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333L14 12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14L10 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.33325 4.66671L1.99992 8.00004L5.33325 11.3334"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 8L10 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    გამოსვლა
                  </a>
                </li>
                <hr
                  className={classnames("d-block d-md-none", {
                    ["d-none"]: !user,
                  })}
                />
                <li>
                  <Link href="/">
                    <a>მთავარი</a>
                  </Link>
                </li>
                <li>
                  <Link href={user ? "/search" : "/createProfile"}>
                    <a>
                      <svg
                        width="20"
                        className="mr-3 d-none d-md-inline"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.728 17.2913L15.8332 13.3971C15.6574 13.2214 15.4191 13.1237 15.1691 13.1237H14.5323C15.6105 11.7449 16.2512 10.0107 16.2512 8.12421C16.2512 3.63636 12.6142 0 8.1256 0C3.63699 0 0 3.63636 0 8.12421C0 12.6121 3.63699 16.2484 8.1256 16.2484C10.0125 16.2484 11.747 15.6079 13.126 14.5298V15.1665C13.126 15.4165 13.2236 15.6547 13.3994 15.8305L17.2942 19.7246C17.6614 20.0918 18.2552 20.0918 18.6185 19.7246L19.7241 18.6193C20.0913 18.2521 20.0913 17.6584 19.728 17.2913ZM8.1256 13.1237C5.36367 13.1237 3.12523 10.8896 3.12523 8.12421C3.12523 5.36276 5.35977 3.12469 8.1256 3.12469C10.8875 3.12469 13.126 5.35885 13.126 8.12421C13.126 10.8857 10.8914 13.1237 8.1256 13.1237Z"
                          fill="white"
                        />
                      </svg>
                      იპოვე ოთახის მეზობელი
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    <a>კონტაქტი</a>
                  </Link>
                </li>
                <li>
                  <div className="langs">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 0C8.02221 0 6.0888 0.586479 4.44431 1.68529C2.79982 2.78411 1.51808 4.3459 0.761208 6.17316C0.00433207 8.00042 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.1093 19.422 8.04911 19.8079C9.98892 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM18.5947 9.28947H14.8316C14.7369 6.17368 14.0105 3.5 12.9 1.86316C14.4624 2.423 15.8305 3.42113 16.8404 4.73816C17.8503 6.05519 18.4594 7.63532 18.5947 9.28947ZM10 18.6C8.42107 18.6 6.71052 15.3789 6.55263 10.6737H13.4474C13.2948 15.4 11.5632 18.6211 10 18.6211V18.6ZM6.55263 9.28947C6.71052 4.58421 8.44213 1.36316 10 1.36316C11.5579 1.36316 13.2948 4.58421 13.4474 9.28947H6.55263ZM7.10528 1.86316C5.99476 3.52632 5.26842 6.17368 5.17368 9.28947H1.41054C1.54978 7.63903 2.16063 6.06343 3.17031 4.75046C4.18 3.4375 5.54593 2.44255 7.10528 1.8842V1.86316ZM1.41054 10.6737H5.15264C5.24738 13.7895 5.97368 16.4368 7.08421 18.1C5.52914 17.5378 4.16802 16.5413 3.16235 15.2287C2.15668 13.9161 1.54869 12.3425 1.41054 10.6947V10.6737ZM12.9 18.1C14.0105 16.4368 14.7369 13.7895 14.8316 10.6737H18.5947C18.4626 12.3314 17.8551 13.9157 16.845 15.2367C15.8349 16.5577 14.4651 17.5592 12.9 18.121V18.1Z"
                        fill="#fff"
                      />
                    </svg>
                    <span>Eng</span>
                  </div>
                </li>
              </ul>
              {!user ? (
                <Link href="/login">
                  <a className="btn btn-light btn-wight ml-3 ">ავტორიზაცია</a>
                </Link>
              ) : (
                <Link href="/profile">
                  <a className="btn btn-primary btn_profile  ml-3 ">
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2857 4.25C11.2857 6.31738 9.595 8 7.5 8C5.405 8 3.71429 6.31738 3.71429 4.25C3.71429 2.18262 5.405 0.5 7.5 0.5C9.595 0.5 11.2857 2.18262 11.2857 4.25ZM7.5 10.5938C8.40559 10.5938 9.26764 10.4017 10.0471 10.0625H10.5C12.7122 10.0625 14.5 11.8414 14.5 14.025V15.4062C14.5 16.0061 14.0079 16.5 13.3929 16.5H1.60714C0.992055 16.5 0.5 16.0061 0.5 15.4062V14.025C0.5 11.8414 2.28781 10.0625 4.5 10.0625H4.95328C5.73481 10.4014 6.59374 10.5938 7.5 10.5938Z"
                        stroke="white"
                      />
                    </svg>

                    {user.firstname}
                  </a>
                </Link>
              )}

              {!openMenu ? (
                <svg
                  onClick={() => {
                    setOpenMenu(true);
                  }}
                  className="d-block d-md-none burgerMenu_icon"
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.821429 3.69643H22.1786C22.6323 3.69643 23 3.32869 23 2.875V0.821429C23 0.367743 22.6323 0 22.1786 0H0.821429C0.367743 0 0 0.367743 0 0.821429V2.875C0 3.32869 0.367743 3.69643 0.821429 3.69643ZM6 11.9107H22.1786C22.6323 11.9107 23 11.543 23 11.0893V9.03571C23 8.58203 22.6323 8.21429 22.1786 8.21429H6C5.54631 8.21429 5.17857 8.58203 5.17857 9.03571V11.0893C5.17857 11.543 5.54631 11.9107 6 11.9107ZM0.821429 20.125H22.1786C22.6323 20.125 23 19.7573 23 19.3036V17.25C23 16.7963 22.6323 16.4286 22.1786 16.4286H0.821429C0.367743 16.4286 0 16.7963 0 17.25V19.3036C0 19.7573 0.367743 20.125 0.821429 20.125Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    setOpenMenu(false);
                  }}
                  className="d-block d-md-none burgerMenu_icon"
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 0C5.16235 0 0 5.16235 0 11.5C0 17.8377 5.16235 23 11.5 23C17.8377 23 23 17.8377 23 11.5C23 5.16235 17.8377 0 11.5 0ZM11.5 2.3C16.5946 2.3 20.7 6.40536 20.7 11.5C20.7 16.5946 16.5946 20.7 11.5 20.7C6.40536 20.7 2.3 16.5946 2.3 11.5C2.3 6.40536 6.40536 2.3 11.5 2.3ZM7.71309 6.08691L6.08691 7.71309L9.87383 11.5L6.08691 15.2869L7.71309 16.9131L11.5 13.1262L15.2869 16.9131L16.9131 15.2869L13.1262 11.5L16.9131 7.71309L15.2869 6.08691L11.5 9.87383L7.71309 6.08691Z"
                    fill="white"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
