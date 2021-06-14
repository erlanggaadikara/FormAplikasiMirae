import { observer } from "mobx-react-lite";
import Text from "../Text";
import { useField } from "formik";

export default observer(
  ({ label, prefix, suffix, className, ...rest }: any) => {
    const [field, meta] = useField(rest);
    return (
      <div className="flex flex-col place-items-start m-2">
        <Text className="pb-1">{label}</Text>
        <div className={`${className} flex flex-row h-10 `}>
          {prefix && <div className="self-center px-1 text-xl">{prefix}</div>}
          <input
            className="text-xl w-full focus:border-transparent border-none outline-none font-montserrat "
            type={"text"}
            {...rest}
            {...field}
          />
          {suffix && suffix}
        </div>
        {meta.touched && meta.error && (
          <Text className="text-red-500 text-sm font-light">{meta.error}</Text>
        )}
      </div>
    );
  }
);
