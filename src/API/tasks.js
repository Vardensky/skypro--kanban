const API_URL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasks() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
  }
  const responseObj = await response.json();
  return responseObj;
}

export async function postNewTask({ title, topic, status, description, date }) {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
    body: JSON.stringify({
      title: title,
      topic: topic,
      status: status,
      description: description,
      date: date,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const responseObj = await response.json();
  return responseObj;
}

export async function taskDelete({ id }) {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
  let response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const responseObj = await response.json();
  return responseObj;
}

export async function taskEdit({
  _id,
  title,
  topic,
  status,
  description,
  date,
}) {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  }
  let response = await fetch(`${API_URL}/${_id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
    body: JSON.stringify({
      title: title,
      topic: topic,
      status: status,
      description: description,
      date: date,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const responseObj = await response.json();
  return responseObj;
}
