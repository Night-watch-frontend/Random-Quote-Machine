export const newQuote = async () => {
  const script = document.createElement("script");
  script.src =
    "https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=myFn";
  script.async = true;

  document.body.appendChild(script);
  script.remove();
};
