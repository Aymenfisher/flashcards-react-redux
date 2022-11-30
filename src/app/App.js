import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate
} from "react-router-dom";
import NewQuizForm from "../components/NewQuizForm";
import NewTopicForm from "../components/NewTopicForm";
import Topics from "../features/topics/Topics";
import Topic from "../features/topics/Topic";
import Quiz from "../features/quizzes/Quiz";
import Quizzes from "../features/quizzes/Quizzes";
import ROUTES from "./routes";
import NotFound from "../components/NotFound";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.topicsRoute()} replace activeclassname="active">
              Topics
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.quizzesRoute()} replace activeclassname="active">
              Quizzes
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.newQuizRoute()} replace activeclassname="active">
              New Quiz
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
      <Route path='/' element={<Navigate to={'/topics'}/>} />
        <Route path="/topics">
          <Route index element={<Topics />} />
          <Route path='new' element={<NewTopicForm />} />
          <Route path=':topicId' element={<Topic />} />
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path="/quizzes" >
          <Route index element={<Quizzes />} />
          <Route path='new' element={<NewQuizForm />} />
          <Route path=':quizId' element={<Quiz />} />
          <Route path='*' element={<NotFound/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  );
}