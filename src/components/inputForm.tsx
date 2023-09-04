import { Controller } from "react-hook-form";

import { Input } from "@/components/input";
import { InputProps } from "@/components/input";

type InputFormProps = InputProps & {
  control: any
  name: any
}
export function InputForm({ control, name, ...rest }: InputFormProps) {
  return(
    <Controller 
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input 
          onBlur={onBlur}
          value={value}
          onChangeText={onChange}
          {...rest  }
        />
      )}
    />
  )
}