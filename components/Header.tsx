import React from "react";
import Link from "next/link";

function Header(props) {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Link href="/">
              <a>Logo</a>
            </Link>
          </div>
          <div className="nav nav_wrapper col-10 d-flex align-items-center justify-content-end">
            <ul className="list-inline d-flex mb-0 mr-2">
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
            <Link href="/login">
              <a className="btn btn-light btn-wight ml-3 ">ავტორიზაცია</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
