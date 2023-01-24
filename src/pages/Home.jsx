import { Outlet } from "react-router-dom";

const { default: NoteCard } = require("../components/NoteCard");

export default function Home() {
  return (
    <>
      <h1>Ini Home</h1>
      <NoteCard />
      <Outlet />
    </>
  );
}
