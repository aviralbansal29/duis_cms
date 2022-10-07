import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import VariantCreate from './variant/create';
import VariantList from './variant/list';
import VariantEdit from './variant/edit';
import VariantShow from './variant/show';

import SchemaCreate from './schema/create';
import SchemaShow from './schema/show';
import SchemaList from './schema/list';
import SchemaEdit from './schema/edit';

import VariantSchemaCreate from './variant_schema/create';

const dataProvider = jsonServerProvider('http://0.0.0.0:9000/admin');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="variants"
      list={VariantList}
      show={VariantShow}
      create={VariantCreate}
      edit={VariantEdit}
    />
    <Resource
      name="schemas"
      list={SchemaList}
      show={SchemaShow}
      create={SchemaCreate}
      edit={SchemaEdit}
    />
    <Resource
      name="variant_schemas"
      create={VariantSchemaCreate}
    />
  </Admin>
);

export default App;
