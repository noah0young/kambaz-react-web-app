import Table from "./Table";
import * as coursesClient from "../Courses/client";
import { useEffect, useState } from "react";

export default function People({ cid }: { cid: string | undefined }) {
  const [users, setUsers] = useState<any[]>();
  const fetchUsers = async () => {
    if (cid) {
      setUsers(await coursesClient.getAllUsersInCourse(cid));
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [cid]);
  return (
    <div id="wd-people">
      <Table users={users as any[]} />
    </div>
  );
}
