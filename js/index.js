const noticeStaticData = JSON.stringify([
  {
    id: 1,
    title: "Birth Certificate Registration",
    body: "Birth Certificate is online now.DO visti our sites for further information.",
  },
  {
    id: 2,
    title: "Corona Vaccination",
    body: "Come and get vaccine at our office to be safe from Covid 19.",
  },
  {
    id: 3,
    title: "26 March",
    body: "The Independence Day of Bangladesh. Let's celebrate this day.",
  },
]);

if (!localStorage.getItem("notices"))
  localStorage.setItem("notices", noticeStaticData);
