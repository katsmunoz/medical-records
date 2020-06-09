import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './Table.css';

export default class TableRecords extends React.Component {
  render() {
    return (
      <BootstrapTable striped hover condensed responsive>
          <TableHeaderColumn dataField='id' isKey>SL</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Date</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Diagnosis</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Weight</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Doctor</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}