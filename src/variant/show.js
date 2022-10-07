import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField, Show, TabbedShowLayout, Tab, NumberField,
  TopToolbar, EditButton, useRecordContext
} from 'react-admin';
import Button from '@mui/material/Button';

import SchemasTab from './schemas_tab';

const LinkSchemaButton = () => {
  const context = useRecordContext();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/variant_schemas/create?source={"variant_id":${context.id}}`);
  }
  return (
    <Button
      color='primary'
      onClick={handleClick}
    >
      Link Schema
    </Button>
  )
}

const VariantActions = () => (
  <TopToolbar>
    <EditButton />
    <LinkSchemaButton />
  </TopToolbar>
)

export const VariantShow = () => {
  return (
    <Show actions={<VariantActions />}>
      <TabbedShowLayout>
        <Tab label='Variant Details'>
          <NumberField source='id' />
          <TextField source='name' />
          <TextField source='description' />
        </Tab>
        <Tab label='Schemas'>
          <SchemasTab />
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default VariantShow;
