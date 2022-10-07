import * as React from "react";
import {
  List, Datagrid, TextField, EditButton, TextInput, ExportButton, CreateButton, TopToolbar
} from 'react-admin';

const VariantFilters = [
  <TextInput source="query" label="Search Name" alwaysOn />
]

const VariantActions = () => (
  <TopToolbar>
    <CreateButton />
    <ExportButton />
  </TopToolbar>
)

export const VariantList = () => (
  <List actions={<VariantActions />} filters={VariantFilters}>
    <Datagrid rowClick="show" bulkActionButtons={false}>
      <TextField source="id" />
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

export default VariantList;
