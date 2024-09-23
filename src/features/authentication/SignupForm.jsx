import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSessionStorageForm from "../../hooks/useSessionStorageForm";
import useSignup from "./useSignup";
import SpinnerMini from "../../ui/SpinnerMini";
// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isPending } = useSignup();

  const { reset, register, formState, setValue, handleSubmit, watch } =
    useForm();
  const { errors } = formState;

  // Watch all form inputs
  const formValues = watch();

  useSessionStorageForm(formValues, setValue);

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSuccess: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors.fullName?.message}>
        <Input
          type="text"
          disabled={isPending}
          id="fullName"
          {...register("fullName", { required: "Please Provide a name" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isPending}
          {...register("email", {
            required: "Please Provide an email",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label={`Password \n (min 8 characters)`}
        error={errors.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isPending}
          {...register("password", {
            required: "Please enter password",
            minLength: {
              value: 8,
              message: "The password must be at least 8 charcters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors.passwordConfirm?.message}>
        <Input
          type="password"
          disabled={isPending}
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "Please enter the same password",
            validate: (value, formValues) =>
              value === formValues.password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Reset
        </Button>
        <Button disabled={isPending}>
          {isPending ? <SpinnerMini /> : "Create new user"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
