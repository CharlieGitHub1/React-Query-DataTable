import React, { useState, useReducer } from 'react';
import data from '../../data/projects.json';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import FilterPanelWithItemList from '../filter_panel/FilterPanelWithItemList';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableDataCell,
} from './styles';
import { getValue, wait } from '@testing-library/user-event/dist/utils';
import { idText } from 'typescript';

export interface IProject {
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

const columnHelper = createColumnHelper<IProject>();

const columns = [
  columnHelper.accessor('id', {
    header: () => <span>Project ID</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('projectName', {
    header: () => <span>Project Name</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('currentProjects', {
    header: () => <span>Current Projects</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('startDate', {
    header: () => <span>Start Date</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('endDate', {
    header: () => <span>End Date</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('onlineStatus', {
    header: () => <span>Online Status</span>,
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('teamMembers', {
    header: () => <span>Team Members</span>,
    cell: (info) => info.renderValue(),
  }),

  //   {
  //     Header: 'Project ID',
  //     accessor: 'id',
  //   },
  //   {
  //     Header: 'Project Name',
  //     accessor: 'projectName',
  //   },
  //   {
  //     Header: 'Current Projects',
  //     accessor: 'currentProjects',
  //   },
  //   {
  //     Header: 'Start Date',
  //     accessor: 'startDate',
  //   },
  //   {
  //     Header: 'End Date',
  //     accessor: 'endDate',
  //   },
  //   {
  //     Header: 'Online Status',
  //     accessor: 'onlineStatus',
  //   },
  //   {
  //     Header: 'Team Members',
  //     accessor: 'teamMembers',
  //   },
];

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

const TableList = () => {
  const rerender = useReducer(() => ({}), {})[1] as () => void;
  const queryClient = useQueryClient();
  const projects = data;
  const projectQuery = useQuery({
    queryKey: ['projects'],
    queryFn: () => wait(2000).then(() => [...projects['projects']]),
  });

  const tableInstance = useReactTable({
    data: projectQuery.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const newProjectMutation = useMutation({
    mutationFn: (newProject: IProject) => {
      return wait(2000).then(() => {
        projects['projects'].push(newProject);
        return [...projects['projects']];
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['projects'], data);
      rerender();
    },
  });

  const handleAddProject = () => {
    newProjectMutation.mutate({
      id: 11,
      projectName: 'New Project',
      currentProjects: 1,
      startDate: '2021-01-01',
      endDate: '2021-12-31',
      onlineStatus: true,
      teamMembers: [
        {
          id: 11,
          userName: 'newuser',
          name: 'New User',
          position: 'New Position',
          email: 'new email',
          avatar: 'https://i.pravatar.cc/150?img=11',
        },
      ],
    });
  };

  if (projectQuery.isLoading) return <>Loading...</>;

  if (projectQuery.error)
    return (
      <pre>
        Error! Something went wrong: {JSON.stringify(projectQuery.isError)}
      </pre>
    );
  return (
    <Table>
      <FilterPanelWithItemList items={items} />
      <TableHeader>
        <TableRow>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <TableHeaderCell key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <div key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </div>
              ))}
            </TableHeaderCell>
          ))}

          {/* {columns.map((column) => (
            <TableHeaderCell key={column.accessor}>
              {column.Header}
            </TableHeaderCell>
          ))} */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {projectQuery.data?.map((project) => {
          return (
            <TableRow key={project.id}>
              <TableDataCell>{project.id}</TableDataCell>
              <TableDataCell>{project.projectName}</TableDataCell>
              <TableDataCell>{project.currentProjects}</TableDataCell>
              <TableDataCell>{project.startDate}</TableDataCell>
              <TableDataCell>{project.endDate}</TableDataCell>
              <TableDataCell>
                {project.onlineStatus ? 'Online' : 'Offline'}
              </TableDataCell>
              <TableDataCell>
                {project.teamMembers.map((user) => {
                  return (
                    <div key={user.id}>
                      <img src={user.avatar} alt={user.name} />
                      <span>{user.name}</span>
                    </div>
                  );
                })}
              </TableDataCell>
            </TableRow>
          );
        })}
      </TableBody>
      <button onClick={() => handleAddProject()}>Add Project</button>
    </Table>
  );
};

export default TableList;
