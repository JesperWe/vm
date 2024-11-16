interface Visitor {
  email: string;
  id: string;
  name: string;
  role: string;
}

interface Room {
  floor: number;
  id: string;
  locked: boolean;
  name: string;
}

interface Host {
  email: string;
  id: string;
  name: string;
  role: string;
}

export interface Meeting {
  during: string;
  host_id: string;
  id: string;
  room_id: string;
  visitor_email: string;
  visitor: Visitor;
  room: Room;
  host: Host;
}
