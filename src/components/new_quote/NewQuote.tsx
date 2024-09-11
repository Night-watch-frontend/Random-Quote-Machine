import { FC } from "react";
import { newQuote } from "../../api/api";

export const NewQuote: FC = () => {
  const handleClick = async () => {
    newQuote();
  };
  return <button onClick={handleClick}>{"Get a new quote"}</button>;
};
