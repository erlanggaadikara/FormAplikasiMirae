import { observer, useLocalObservable } from "mobx-react-lite";
import { RouteComponentProps } from "@reach/router";
import Form, { Field } from "libs/ui/Form";
import Button from "libs/ui/Button";
import Text from "libs/ui/Text";

interface propType {
  path?: RouteComponentProps;
  children?: any;
}

export default observer((props: propType) => {
  const values = {
    nama: "" as string,
    email: "" as string,
    alamat: "" as string,
    telepon: "" as string,
  };

  const submit = async (values: any) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col w-screen h-full justify-center items-center p-7">
      <Form
        className="flex flex-col justify-center items-center"
        initialValues={values}
        onSubmit={submit}
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
          label="Alamat"
          name="alamat"
        />
        <Field
          className="lg:w-96 border-gray border-2 pl-2"
          type="text"
          label="Telepon/No HP"
          name="telepon"
        />
        <Button
          caption="Lanjut"
          type="submit"
          className="w-64 bg-blue-500 text-white"
        />
      </Form>
    </div>
  );
});
