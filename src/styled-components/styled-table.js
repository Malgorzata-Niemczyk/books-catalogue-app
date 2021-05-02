import styled from 'styled-components';

const LoaderMessage = styled.p`
    padding: 10px;
`

const AddButton = styled.button`
margin-top: 25px;
padding: 8px 20px;
color: white;
text-transform: uppercase;
border: none;
border-radius: 20px;
background-color: #1cdd2b;
cursor: pointer;
`

const RemoveButton = styled.button`
padding: 8px 15px;
color: white;
text-transform: uppercase;
border: none;
border-radius: 5px;
background-color: #ff335b;
cursor: pointer;
`

const EditButton = styled.button`
padding: 8px 15px;
color: white;
text-transform: uppercase;
border: none;
border-radius: 5px;
background-color: #3386ff;
cursor: pointer;
`

const Table = styled.table`
border-collapse: collapse;
margin-top: 20px;
`

const TableHead = styled.th`
padding-bottom: 10px;
`

const TableRow = styled.tr`
border-top: 1px solid black;
border-bottom: 1px solid black;
`

const TableData = styled.td`
padding: 10px;
`

export { LoaderMessage, AddButton, RemoveButton, EditButton, Table, TableHead, TableRow, TableData };