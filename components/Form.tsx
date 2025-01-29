"use client";
import { createCamps } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

const Form = () => {
  const [message, formAction] = useFormState(createCamps, null);
  return (
    <>
      {message && <div>{message}</div>}
      <form action={formAction}>
        <input
          placeholder="Camping Name"
          name="title"
          className="border"
          defaultValue="korat route 3090"
        />
        <input
          placeholder="location"
          name="location"
          className="border"
          defaultValue="korat default"
        />
        <SubmitButton />
      </form>
    </>
  );
};
export default Form;