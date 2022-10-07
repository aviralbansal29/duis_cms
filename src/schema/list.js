import * as React from "react";
import {
  List, Datagrid, TextField, EditButton, TextInput, ExportButton, CreateButton, TopToolbar
} from 'react-admin';

const SchemaFilters = [
  <TextInput source="query" label="Search Name" alwaysOn />
]

const SchemaActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
)

export const SchemaList = () => (
  <List actions={<SchemaActions />} filters={SchemaFilters}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="type" />
      <EditButton />
    </Datagrid>
  </List>
);

export default SchemaList;
