import React, { useState } from "react";
import { FormGroup, Button, Input } from "../components/common/form";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AuthService } from "../services/auth/auth.http";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/action-creators/index";
import axios from "axios";

interface ILoginForm {
  password: string;
  phone: string;
}

interface IErrorMsg {
  phone?: string | Array<string>;
  password?: string | Array<string>;
}

const login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm<ILoginForm>();

  //   const [errors, setErrors] = useState<IErrorMsg>({});

  const [load, setLoad] = useState(false);

  const submit = handleSubmit(async (data: any) => {
    // console.log(errors);'

    setLoad(true);
    try {
      const res = await AuthService.login(data);

      // debugger;
      dispatch(setCurrentUser({ user: {}, token: res.data.access_token }));
      setLoad(false);
    } catch (e) {
      console.log(e);
      setLoad(false);
    }
    // console.log(data);
  });

  console.log(errors);

  return (
    <div className="container w-25 mt-5">
      <form onSubmit={submit} className="contentWrapper">
        <h4 className="form_title">Login to BitBook</h4>
        <div className="separatorLine">
          <span>or</span>
        </div>
        <FormGroup
          errorMessage={
            errors?.phone?.message
              ? errors?.phone?.message
              : errors?.phone?.type === "pattern"
              ? "please enter valid phone address"
              : ""
          }
          Label="phone"
        >
          <Input
            type="text"
            name={"phone"}
            placeholder="example@bitbook.com"
            hasError={!!errors?.phone}
            onChange={() => {
              //   clearError("phone");
              //   setUnVerify(false);
            }}
            useRef={register("phone")}
            {...register("phone", {
              required: "მეილი აუცილებელია",
            })}
          />
        </FormGroup>

        <FormGroup
          errorMessage={
            errors?.password ? errors.password.message : "მინიმუმ 6 სიმბოლო"
          }
          Label={
            <label
              className="form-control-label d-flex "
              htmlFor="inputSuccess2"
            >
              <span> Password </span>
              <Link href="/forgotPassword">
                <a>Forgot password?</a>
              </Link>
            </label>
          }
        >
          <Input
            useRef={register("password")}
            type="password"
            hasError={!!errors?.password}
            placeholder="password"
            {...register("password", {
              required: "პაროლი აუცილებელია",
              minLength: 6,
            })}
          />
        </FormGroup>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label k" htmlFor="exampleCheck1">
            Remember me
          </label>
        </div>

        <Button loading={load} className="btn btn-primary w-100 mt-3 py-2">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default login;

// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     // watch,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);

//   //   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />

//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}

//       <input type="submit" />
//     </form>
//   );
// }
