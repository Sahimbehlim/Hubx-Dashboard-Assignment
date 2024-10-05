import React, { useEffect, useState } from "react";
import { useModal } from "../modalContext";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FormModal = () => {
  const { toggleModal } = useModal();
  const [eventPrice, setEventPrice] = useState(500);
  const [invites, setInvites] = useState(1);
  const [eventDuration, setEventDuration] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [perInviteAmt, setperInviteAmt] = useState(
    eventPrice * (invites / 100) * eventDuration
  );
  const [totalValue, settotalValue] = useState(perInviteAmt + eventPrice);

  const data = {
    labels: ["Event Price", "Total Value"],
    datasets: [
      {
        label: "# of Votes",
        data: [eventPrice, totalValue],
        backgroundColor: ["#eef0ff", "rgba(54, 162, 235, 0.6)"],
        borderColor: ["#eef0ff", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Doughnut Chart",
      },
    },
  };

  useEffect(() => {
    setperInviteAmt(Number(eventPrice * (invites / 100) * eventDuration));
  }, [eventPrice, invites, eventDuration]);

  useEffect(() => {
    const newTotalValue = perInviteAmt + eventPrice;
    settotalValue(newTotalValue);
  }, [perInviteAmt, eventPrice]);

  return (
    <section className="w-full h-screen fixed bg-[#00000090] z-10">
      <i
        onClick={toggleModal}
        className="ri-close-large-line text-white text-2xl fixed right-3 top-2 cursor-pointer transition duration-500 hover:rotate-[360deg]"
      ></i>
      <div
        className={`w-max max-h-[80%] h-auto bg-white rounded-md fixed left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 p-5 overflow-auto shadow-lg grid sm:grid-cols-2 gap-5`}
      >
        <form className="flex flex-col gap-5">
          {[
            {
              type: "text",
              placeholder: "Full name",
              value: fullName,
              onChangeHandler: (e) => setFullName(e.target.value),
            },
            {
              type: "email",
              placeholder: "Email",
              value: email,
              onChangeHandler: (e) => setEmail(e.target.value),
            },
          ].map((input, index) => (
            <input
              key={index}
              type={input.type}
              value={input.value}
              onChange={input.onChangeHandler}
              placeholder={input.placeholder}
              className="outline-none border border-gray-600 rounded-md px-2 py-1"
            />
          ))}
          {[
            {
              type: "range",
              value: eventPrice,
              text: "Event price",
              min: 500,
              max: 5000,
              onChangeHandler: (e) => setEventPrice(Number(e.target.value)),
            },
            {
              type: "range",
              value: invites,
              text: "No. of Invites",
              min: 1,
              max: 5,
              onChangeHandler: (e) => setInvites(e.target.value),
            },
            {
              type: "range",
              value: eventDuration,
              text: "Event Duration",
              min: 1,
              max: 10,
              onChangeHandler: (e) => setEventDuration(e.target.value),
            },
          ].map((input, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label className="text-gray-600">{input.text}</label>
                <p className="bg-green-300 px-4 py-1 text-green-700 font-semibold rounded-lg">
                  {input.value} {index === 2 && "day"}
                </p>
              </div>
              <input
                type={input.type}
                value={input.value}
                min={input.min}
                max={input.max}
                onChange={input.onChangeHandler}
              />
            </div>
          ))}
          <input
            type="submit"
            value={"Invite"}
            className="bg-[#55ccc1] text-white font-semibold p-2 rounded-lg cursor-pointer"
          />
          <div className="flex flex-col gap-2">
            {[
              { text: "Total Price", value: eventPrice },
              { text: "Per Invite Amount", value: perInviteAmt.toFixed(0) },
              { text: "Total Value", value: totalValue.toFixed(0) },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <p className="text-sm text-gray-500 font-medium">{item.text}</p>
                <p className="font-semibold text-gray-800">₹{item.value}</p>
              </div>
            ))}
          </div>
        </form>
        <div className="flex items-center">
          <Doughnut data={data} options={options} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default FormModal;
