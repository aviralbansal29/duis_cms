import * as React from "react";
import {
  Create, SimpleForm, TextInput, ArrayInput, SimpleFormIterator, useCreate, useRedirect, AutocompleteInput
} from 'react-admin';

import { TypeChoices } from './constants';

const SchemaCreate = props => {
  const [create] = useCreate();
  const redirect = useRedirect();
  const save = React.useCallback(
    async values => {
      var response;
      try {
        response = await create('schemas', { data: values }, { returnPromise: true });
      } catch (error) {
        if (error.body.errors) {
          return error.body.errors;
        }
      }
      redirect('show', 'schemas', response['id']);
    },
    [create, redirect]
  );

  return (
    <Create {...props}>
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
    </Create>
  );
};

export default SchemaCreate;
