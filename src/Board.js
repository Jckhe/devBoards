import logo from './logo.svg';
import './App.css';

export function Board() {
  return (
    <div className="Board">
     <ToDoContainer />
     <InProgressContainer />
     <DoneContainer />
    </div>
  );
}

function ToDoContainer(props) {
  return (
    <div class="ToDoContainer">
      Todo
    </div>
  )
}

function InProgressContainer(props) {
  return (
    <div class="InProgressContainer">
      In Progress
    </div>
  )
}

function DoneContainer(props) {
  return (
    <div class="DoneContainer">
      Done
    </div>
  )
}
