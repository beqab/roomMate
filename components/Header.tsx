import React, { useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import { useTypedSelector } from "../components/hooks/useTypeSelector";

interface IProps {
  type?: "profile";
}

function Header({ type }: IProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const { user } = useTypedSelector((state) => state.profile);

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
                <a>Logo</a>
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
                <li>
                  <Link href="/">
                    <a>მთავარი</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>იპოვე ოთახის მეზობელი</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
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
