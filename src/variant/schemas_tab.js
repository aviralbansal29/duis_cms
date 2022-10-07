import * as React from "react";
import { useRecordContext } from 'react-admin';
import {
  List, Datagrid, TextField, TopToolbar, CreateButton, ExportButton, EditButton
} from 'react-admin';

const SchemasActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
)

const SchemasTab = ({ source }) => {
  const record = useRecordContext();
  return (
      <List
        resource='schemas'
        filter={{ variant_id: record.id }}
        actions={<SchemasActions />}
      >
        <Datagrid rowClick='show' bulkActionButtons={false}>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="type" />
          <EditButton />
        </Datagrid>
      </List>
  )
}

export default SchemasTab;
