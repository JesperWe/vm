import { createFileRoute } from '@tanstack/react-router';
import ChatSection from '../../../src/components/ChatSection';
import { Message } from '../../../src/types/chatTypes';

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
  return (
    <>
      <div>Visitor ID: {visitorId}</div>
      <ChatSection messages={mockChatData} />
    </>
  );
}
