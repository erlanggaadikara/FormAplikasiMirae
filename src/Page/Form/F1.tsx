import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Form, { Field } from "libs/ui/Form";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";
import * as Yup from "yup";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  const values = {
    nama: "" as string,
    email: "" as string,
    kota: "" as string,
    telepon: "" as string,
  };

  const submit = async (values: any) => {
    console.log(values);
    // return reqForm(values);
  };

  return (
    <div className="flex flex-col w-screen h-full justify-center items-center p-7">
      <Form
        className="flex flex-col justify-center items-center"
        initialValues={values}
        onSubmit={submit}
        validationSchema={{
          email: Yup.string().email("Invalid email").required("Required"),
          nama: Yup.string().required("Required"),
          kota: Yup.string().required("Required"),
          telepon: Yup.number().required("Required"),
        }}
      >
        <Field
          className="lg:w-96 border-gray border-2 pl-2"
          type="email"
          label="Email"
          name="email"
        />
        <Field
          className="lg:w-96 border-gray border-2 pl-2"
          type="text"
          label="Nama lengkap"
          name="nama"
        />
        <Field
          className="lg:w-96 border-gray border-2 pl-2"
          type="text"
          label="Kota"
          name="kota"
        />
        <Field
          className="lg:w-96 border-gray border-2 pl-2"
          type="number"
          label="Telepon"
          name="telepon"
          prefix="+62"
        />
        <Button
          caption="Selesai"
          type="submit"
          className="w-64 bg-blue-500 text-white"
        />
      </Form>
    </div>
  );
});
