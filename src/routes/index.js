import { Route, Routes } from "react-router-dom";
import { Home } from "../features/home";
import { Posts } from "../features/posts";

const OpenRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};

export { OpenRoutes };
