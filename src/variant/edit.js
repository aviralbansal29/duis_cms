import * as React from "react";
import { Edit, SimpleForm, TextInput, useUpdate, useRedirect } from 'react-admin';

const VariantEdit = props => {
  const [update] = useUpdate();
  const redirect = useRedirect();
  const save = React.useCallback(
      async values => {
        try {
          await update('variants', { id: values['id'], data: values }, { returnPromise: true });
        } catch (error) {
          if (error.body.errors) {
            return error.body.errors;
          }
        }
        redirect('show', 'variants', values['id']);
      },
      [update, redirect]
  );

  return (
    <Edit {...props}>
      <SimpleForm onSubmit={save}>
        <TextInput source="name" fullWidth />
        <TextInput multiline source="description" fullWidth />
      </SimpleForm>
    </Edit>
  )
};

export default VariantEdit;
