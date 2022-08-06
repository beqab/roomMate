import React, { useState } from "react";
import { Checkbox } from "../components/checkbox";
import { Heading } from "../components/heading";

interface ISelectProps {
  data: {
    question: string;
    options: { option: string; optionId: number }[];
  };
}

export const Select = ({ data }: ISelectProps) => {
  const [values, setValues] = useState([]);

  return (
    <div>
      <Heading text={data.question} />
      <input
        placeholder="ძებნა..."
        className="mt-4 mb-3 searchInput form-control placeholder-active "
      />
      <div className="createProfile_checkboxItem_wrapper mt-0">
        {data.options.map((item, i) => {
          return (
            <Checkbox
              key={i}
              setValue={(v) => {
                // debugger;
                if (values.includes(v)) {
                  setValues(values.filter((el) => el !== v));
                } else {
                  setValues([...values, v]);
                }
              }}
              label={item.option}
              id={i}
              selected={!!values.find((el) => el === i)}
            />
          );
        })}
      </div>
    </div>
  );
};
