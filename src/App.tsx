import React from 'react';
import data from './data/projects.json';
import { useQuery } from '@tanstack/react-query';
import { ColumnDef, ColumnOrderState } from '@tanstack/react-table';
import {
  AppContainer,
  MainContainer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableDataCell,
} from './AppStyles';
import FilterPanelWithItemList from './components/filter_panel/FilterPanelWithItemList';
import { wait } from '@testing-library/user-event/dist/utils';
interface Project {
  id: number;
  projectName: string;
  currentProjects: number;
  startDate: string;
  endDate: string;
  onlineStatus: boolean;
  teamMembers: User[];
}
interface User {
  id: number;
  userName: string;
  name: string;
  position: string;
  email: string;
  avatar: string;
}

const items = [
  {
    label: 'All',
    value: 10,
  },
  {
    label: 'Active',
    value: 5,
  },
  {
    label: 'Inactive',
    value: 5,
  },
];

const App = () => {
  const projects = data;
  const projectQuery = useQuery({
    queryKey: ['projects'],
    queryFn: () => wait(2000).then(() => [...projects['projects']]),
  });

  if (projectQuery.isLoading) return <>Loading...</>;

  if (projectQuery.error)
    return (
      <pre>
        Error! Something went wrong: {JSON.stringify(projectQuery.isError)}
      </pre>
    );

  return (
    <AppContainer>
      <MainContainer>
        <h6>MAIN CONTENT</h6>
        <Table>
          <FilterPanelWithItemList items={items} />

          <TableHeader>
            <TableRow>
              <TableHeaderCell>Project Name</TableHeaderCell>
              <TableHeaderCell>Current Projects</TableHeaderCell>
              <TableHeaderCell>Start Date</TableHeaderCell>
              <TableHeaderCell>End Date</TableHeaderCell>
              <TableHeaderCell>Online Status</TableHeaderCell>
              <TableHeaderCell>Team Members</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projectQuery.data?.map((project) => (
              <TableRow key={project.id}>
                <TableDataCell>{project.projectName}</TableDataCell>
                <TableDataCell>{project.currentProjects}</TableDataCell>
                <TableDataCell>{project.startDate}</TableDataCell>
                <TableDataCell>{project.endDate}</TableDataCell>
                <TableDataCell>
                  {project.onlineStatus ? 'Online' : 'Offline'}
                </TableDataCell>
                <TableDataCell>
                  {project.teamMembers.map((user) => (
                    <div key={user.id}>
                      <img src={user.avatar} alt={user.name} />
                      <span>{user.name}</span>
                    </div>
                  ))}
                </TableDataCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MainContainer>
    </AppContainer>
  );
};

export default App;
