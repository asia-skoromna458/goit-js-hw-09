let formData = {
  email: "",
  message: "",
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector("input[name='email']");
const textarea = form.querySelector("textarea");
populateForm();
form.addEventListener("input", onFormInput);
form.addEventListener("submit", handleSubmit);


function onFormInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  const parsed = JSON.parse(saved);

  formData = parsed;

  emailInput.value = parsed.email || "";
  textarea.value = parsed.message || "";
}

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
}


