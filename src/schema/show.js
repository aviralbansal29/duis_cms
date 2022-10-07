import * as React from 'react';
import {
  TextField, Show, TabbedShowLayout, Tab, NumberField, SelectField, ArrayField, Datagrid,
} from 'react-admin';

import { TypeChoices } from './constants';


export const SchemaShow = () => {
  return (
    <Show>
      <TabbedShowLayout>
        <Tab label='Schema Details'>
          <NumberField source='id' />
          <TextField source='name' />
          <SelectField source='type' choices={TypeChoices} />
          <ArrayField source="children">
            <Datagrid bulkActionButtons={false}>
              <TextField source="identifier" />
              <TextField source="params" />
            </Datagrid>
          </ArrayField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default SchemaShow;
