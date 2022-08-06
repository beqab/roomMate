import React, { useState } from "react";
import { Checkbox } from "../components/checkbox";
import { Heading } from "../components/heading";

interface IRadioProps {
  data: {
    question: string;
    options: { option: string; optionId: number }[];
  };
}

export default function radio({ data }: IRadioProps) {
  const [value, setValue] = useState<null | number>(null);
  return (
    <div>
      <Heading text={data.question} />
      <div className="createProfile_checkboxItem_wrapper">
        {data.options.map((item, i) => {
          return (
            <Checkbox
              key={i}
              setValue={(v) => {
                setValue(v);
              }}
              label={item.option}
              id={i}
              selected={i === value}
            />
          );
        })}
      </div>
    </div>
  );
}
