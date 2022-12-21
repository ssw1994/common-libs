import { ChangeEventHandler, useState } from "react";

export function useFormGroup<Type>(
  arg: Type = {} as Type
): [Type, ChangeEventHandler<any>] {
  const [state, updateState] = useState(arg);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    const { id, name, value } = event?.target || {
      id: "",
      name: "",
      value: "",
    };
    updateState((prev) => {
      return {
        ...prev,
        [id || name]: value,
      };
    });
  };

  return [state, handleChange];
}
