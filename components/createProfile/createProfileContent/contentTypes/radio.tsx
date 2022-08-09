import React, { useState, useEffect } from "react";
import { Checkbox } from "../components/checkbox";
import { Heading } from "../components/heading";
import { IQuestions } from "../../../../services/questions/questions.http";

interface IRadioProps {
  data: IQuestions;
  setData: (d) => void;
  values: { [key: string]: [] };
}

export default function Radio({ data, setData, values }: IRadioProps) {
  const [value, setValue] = useState<number[]>([]);

  useEffect(() => {
    console.log(value, "vvvvvvvvvvvvvvvvv");
    if (values && values[data.id] && values[data.id].length > 0) {
      setValue(values[data.id]);
    } else {
      setValue([]);
    }
    console.log(data.id);
  }, [values, data.id]);

  useEffect(() => {}, []);

  return (
    <div>
      <Heading text={data.title} />
      <div className="createProfile_checkboxItem_wrapper">
        {data.answers.map((item, i) => {
          return (
            <Checkbox
              key={item.id}
              setValue={(v) => {
                if (value.includes(item.id)) {
                  setValue(value.filter((id) => id !== item.id));
                  setData({
                    question_id: item.question_id,
                    value: value.filter((id) => id !== item.id),
                  });
                } else {
                  if (data.is_multiple) {
                    setValue([...value, item.id]);
                    setData({
                      question_id: item.question_id,
                      value: [...value, item.id],
                    });
                  } else {
                    setValue([item.id]);
                    setData({
                      question_id: item.question_id,
                      value: [item.id],
                    });
                  }
                }
              }}
              label={item.title}
              id={item.id}
              selected={value.includes(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
