import React from 'react'
import { Table, Label } from 'semantic-ui-react'

const styles = {
  cellStyle: {
    'textAlign': 'center'
  },
  tableStyle: {
    'width': '100%',
    'marginTop': 20,
    'marginBottom': 50
  }
};

const ShippingTable = () => (
  <Table stackable style={styles.tableStyle}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell style={styles.cellStyle}>數量</Table.HeaderCell>
        <Table.HeaderCell style={styles.cellStyle}>運費</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell style={styles.cellStyle}>
          <Label size='large'>1盒</Label>
        </Table.Cell>
        <Table.Cell style={styles.cellStyle}>
          <Label tag  size='large'>
            $150
          </Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={styles.cellStyle}>
          <Label  size='large'>6入*4</Label>
        </Table.Cell>
        <Table.Cell style={styles.cellStyle}>
          <Label tag  size='large'>
            $220
          </Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={styles.cellStyle}>
          <Label  size='large'>6入*3 + 4入*1</Label>
        </Table.Cell>
        <Table.Cell style={styles.cellStyle}>
          <Label tag  size='large'>
            $220
          </Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={styles.cellStyle}>
          <Label  size='large'>6入*2 + 4入*3</Label>
        </Table.Cell>
        <Table.Cell style={styles.cellStyle}>
          <Label tag  size='large'>
            $220
          </Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={styles.cellStyle}>
          <Label  size='large'>6入*1 + 4入*4</Label>
        </Table.Cell>
        <Table.Cell style={styles.cellStyle}>
          <Label tag  size='large'>
            $220
          </Label>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell style={styles.cellStyle}>
          <Label  size='large'>4入*6</Label>
        </Table.Cell>
        <Table.Cell style={styles.cellStyle}>
          <Label tag  size='large'>
            $220
          </Label>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default ShippingTable;
