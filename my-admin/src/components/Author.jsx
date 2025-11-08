import { DataTable, DateField, EmailField, List } from 'react-admin';

export const AuthorList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="first_name" />
            <DataTable.Col source="last_name" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="password" />
            <DataTable.Col source="created_at">
                <DateField source="created_at" />
            </DataTable.Col>
            <DataTable.Col source="book_listings" />
        </DataTable>
    </List>
);