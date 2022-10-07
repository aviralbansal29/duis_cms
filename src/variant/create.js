import * as React from "react";
import { Create, SimpleForm, TextInput, useCreate, useRedirect } from 'react-admin';

const VariantCreate = props => {
  const [create] = useCreate();
  const redirect = useRedirect();
  const save = React.useCallback(
    async values => {
      var response;
      try {
        response = await create('variants', { data: values }, { returnPromise: true });
      } catch (error) {
        if (error.body.errors) {
          return error.body.errors;
        }
      }
      redirect('show', 'variants', response['id']);
    },
    [create, redirect]
  );

  return (
    <Create {...props}>
      <SimpleForm onSubmit={save}>
        <TextInput source="name" fullWidth />
        <TextInput multiline source="description" fullWidth />
      </SimpleForm>
    </Create>
  );
};

export default VariantCreate;
