import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Lesson from "./pages/Lesson";
import Review from "./pages/Review";
import Reference from "./pages/Reference";
import Exercises from "./pages/Exercises";
import Fundamentals from "./pages/Fundamentals";
import { useSelector } from "./lib/store";

export default function App() {
  const theme = useSelector((s) => s.theme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="lesson/:id" element={<Lesson />} />
        <Route path="review" element={<Review />} />
        <Route path="exercises" element={<Exercises />} />
        <Route path="fundamentals" element={<Fundamentals />} />
        <Route path="reference" element={<Reference />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
