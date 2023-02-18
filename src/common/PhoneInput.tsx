import React from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import { formatPhoneNumberIntl } from "react-phone-number-input";

import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

const PhoneInput = () => {
  const [phone, setPhone] = React.useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      switch: false,
    },
  });

  const submit = (data: any) => {
    console.log(data);
    setPhone(data.phone);
  };

  return (
    <div className="App p-10">
      <div className="my-10">{formatPhoneNumberIntl(phone)}</div>

      <form onSubmit={handleSubmit(submit)}>
        <PhoneInputWithCountry
          className="border rounded-sm pl-2"
          defaultCountry="US"
          placeholder="Enter phone number"
          name="phone"
          control={control}
          rules={{ required: true }}
          numberInputProps={{ className: "py-1 pl-2 border rounded-r-sm" }}
        />

        <br />
      </form>
    </div>
  );
};

export default PhoneInput;
