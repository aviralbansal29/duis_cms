import * as React from "react";
import {
  Edit, SimpleForm, TextInput, useUpdate, useRedirect, AutocompleteInput, ArrayInput, SimpleFormIterator
} from 'react-admin';

import { TypeChoices } from './constants';

const SchemaEdit = props => {
  const [update] = useUpdate();
  const redirect = useRedirect();
  const save = React.useCallback(
      async values => {
        try {
          await update('schemas', { id: values['id'], data: values }, { returnPromise: true });
        } catch (error) {
          if (error.body.errors) {
            return error.body.errors;
          }
        }
        redirect('show', 'schemas', values['id']);
      },
      [update, redirect]
  );

  return (
    <Edit {...props}>
      <SimpleForm onSubmit={save}>
        <TextInput source="name" fullWidth />
        <AutocompleteInput source="type" choices={TypeChoices} fullWidth />
        <ArrayInput source="children" fullWidth>
          <SimpleFormIterator fullWidth>
            <TextInput source="identifier" fullWidth />
            <TextInput source="params" fullWidth />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  )
};

export default SchemaEdit;
