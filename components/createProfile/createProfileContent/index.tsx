import React from "react";
import Radio from "./contentTypes/radio";
import { Select } from "./contentTypes/select";

interface IContentProps {
  data?: any;
}

const Content: React.FC<IContentProps> = ({ data }) => {
  console.log(data);

  const GetAnswers = (data) => {
    return <> "ups"</>;
  };

  switch (data.type) {
    case "radio":
      return <Radio data={data} />;

    case "select":
      return <Select data={data} />;

    default:
      return <div>{data.question}</div>;
  }
};

export default Content;
