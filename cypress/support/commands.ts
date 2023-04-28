export const format = (value) => {
    let formattedValue;

    formattedValue = value.replace(",", ".");
    formattedValue = Number(formattedValue.split("$")[1]);

    formattedValue = String(value).includes("-")
      ? -formattedValue
      : formattedValue;

    return formattedValue;
  };