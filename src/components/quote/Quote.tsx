import { FC, useEffect, useState } from "react";
import { newQuote } from "../../api/api";

type Quote = {
  quoteText: string;
  quoteAuthor?: string;
};

declare global {
  interface Window {
    myFn: (data: Quote) => void; // Declare the global type
  }
}

export const Quote: FC = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    newQuote();

    window.myFn = (data) => {
      setQuote(data);
    };
  }, []);

  if (!quote) {
    return <div>Loading quote...</div>;
  }

  return (
    <div>
      <blockquote>
        <p>"{quote.quoteText}"</p>
      </blockquote>
      {quote.quoteAuthor && <p>- {quote.quoteAuthor}</p>}
    </div>
  );
};
