import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FormGroup, Button, Input } from "../../common/form";
import classnames from "classnames";

interface IContactForm {
  name: string;
  last_name: string;
  text: string;
  email: string;
}

interface IErrorMsg {
  email?: string | Array<string>;
  name?: string | Array<string>;
  text?: string | Array<string>;
  last_name?: string | Array<string>;
}

function Contact() {
  const [load, setLoad] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IContactForm>();

  const submit = handleSubmit((data: any) => {
    // console.log(errors);
    console.log(data);
  });
  return (
    <form onSubmit={submit} className="contactSection_from">
      <FormGroup errorMessage={errors?.name ? errors.name.message : ""}>
        <Input
          useRef={register("name")}
          type="name"
          hasError={!!errors?.name}
          placeholder="სახელი"
          {...register("name", {
            required: "სახელი აუცილებელია",
          })}
        />
      </FormGroup>

      <FormGroup
        errorMessage={errors?.last_name ? errors.last_name.message : ""}
      >
        <Input
          useRef={register("last_name")}
          type="last_name"
          hasError={!!errors?.last_name}
          placeholder="გვარი"
          {...register("last_name", {
            required: "გვარი აუცილებელია",
          })}
        />
      </FormGroup>
      <FormGroup
        errorMessage={
          errors?.email?.message
            ? errors?.email?.message
            : errors?.email?.type === "pattern"
            ? "გთხოვთ შიყვანოთ მეილი სწორი ფორმატით"
            : ""
        }
      >
        <Input
          type="text"
          name={"email"}
          placeholder="ელ.ფოსტა"
          hasError={!!errors?.email}
          onChange={() => {
            //   clearError("email");
            //   setUnVerify(false);
          }}
          useRef={register("email")}
          {...register("email", {
            required: "მეილი აუცილებელია",
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </FormGroup>
      <FormGroup errorMessage={errors?.text ? errors.text.message : ""}>
        <textarea
          placeholder="მოგვწერეთ წერილი"
          className={classnames("form-control textarea", {
            "is-invalid": !!errors?.text,
          })}
          {...register("text", {
            required: "ტექსტი აუცილებელია",
          })}
        ></textarea>
      </FormGroup>
      <div className="btn_wrapper">
        <Button loading={load} className="btn btn-primary w-100 mt-3 py-2">
          გაგზავნა
        </Button>
      </div>
    </form>
  );
}

export default Contact;
