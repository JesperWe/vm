import { createFileRoute } from '@tanstack/react-router';
import { Message } from '../../../src/types/chatTypes';
import { gql, useQuery } from '@apollo/client';
import ChatSection from '../../components/ChatSection';

const mockChatData: Message[] = [
  {
    from_user_id: '1',
    id: 1,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 2,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 3,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 4,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 5,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 6,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 7,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 8,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '1',
    id: 9,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
  {
    from_user_id: '2',
    id: 10,
    message:
      'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
    visit_id: '1',
  },
];

export const Route = createFileRoute('/visitor/$visitorId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { visitorId } = Route.useParams();
  const { data } = useQuery(gql`
    query Chat_messages {
      chat_messages {
        from_user_id
        id
        message
        visit_id
      }
    }
  `);
  console.log(data);
  return (
    <>
      <div>Visitor ID: {visitorId}</div>
      <ChatSection messages={mockChatData} />
    </>
  );
}
