import * as React from 'react';
import { Create, SimpleForm, ReferenceInput, AutocompleteInput, useCreate, useRedirect } from 'react-admin';

const VariantSchemaCreate = props => {
  const [create] = useCreate();
  const redirect = useRedirect();
  const save = React.useCallback(
    async values => {
      var response;
      try {
        response = await create('variant_schemas', { data: values }, { returnPromise: true });
      } catch (error) {
        if (error.body.errors) {
          return error.body.errors;
        }
      }
      redirect('show', 'variants', response['variant_id']);
    },
    [create, redirect]
  );

  return (
    <Create>
      <SimpleForm onSubmit={save}>
        <ReferenceInput source='variant_id' reference='variants'>
          <AutocompleteInput optionText='name' fullWidth />
        </ReferenceInput>
        <ReferenceInput source='schema_id' reference='schemas'>
          <AutocompleteInput optionText='name' fullWidth />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  )
}

export default VariantSchemaCreate;
