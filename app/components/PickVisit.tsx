import React from 'react';
import { createClient, Provider, useQuery } from 'urql';
import { gql } from 'urql';
import { Button, Menu } from '@mantine/core';
import { useNavigate } from '@tanstack/react-router';

// Define the query
const VISIT = gql`
  query Visit {
    visit {
      during
      host_id
      id
      visitor_email
    }
  }
`;

const PickVisit = () => {
  const [result] = useQuery({
    query: VISIT,
  });
  const navigate = useNavigate({ from: '/visitor' }) as unknown as (params: {
    to: string;
    search: { visitId: string; userId: string; during: string };
  }) => void;

  const { data, fetching, error } = result;

  return (
    <div>
      {fetching ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Menu
          transitionProps={{ transition: 'pop-top-right' }}
          position="top-end"
          width={220}
          withinPortal
        >
          <Menu.Target>
            <Button pr={12}>Pick Visitor</Button>
          </Menu.Target>
          <Menu.Dropdown>
            {data.visit.map((visit) => (
              <Menu.Item
                key={visit.id}
                onClick={() => {
                  navigate({
                    to: '/visitor',
                    search: {
                      visitId: visit.id,
                      userId: visit.host_id,
                      during: visit.during,
                    },
                  });
                }}
              >
                {visit.visitor_email}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      )}
    </div>
  );
};

export default PickVisit;
