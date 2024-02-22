import { createDateString } from "./CreateDateString";
import { format } from "date-fns";

export const cardList = [
  {
    id: 1,
    theme: "Web Design",
    title: "С",
    date: format(createDateString(), "dd.MM.yyyy"),
    status: "Без статуса",
    description: "",
  },
  {
    id: 2,
    theme: "Research",
    title: "Годом",
    date: format(createDateString(), "dd.MM.yyyy"),
    status: "В работе",
    description: "",
  },
  {
    id: 3,
    theme: "Copywriting",
    title: "Счастья",
    date: format(createDateString(), "dd.MM.yyyy"),
    status: "Тестирование",
    description: "",
  },
  {
    id: 4,
    theme: "Web Design",
    title: "Новым",
    date: format(createDateString(), "dd.MM.yyyy"),
    status: "Нужно сделать",
    description: "",
  },
  {
    id: 5,
    theme: "Web Design",
    title: "Радости",
    date: format(createDateString(), "dd.MM.yyyy"),
    status: "Готово",
    description: "",
  },
  {
    id: 6,
    theme: "Web Design",
    title: "Ёлка",
    date: format(createDateString(), "dd.MM.yyyy"),
    status: "Без статуса",
    description: "",
  },
];

export const statusApp = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];
