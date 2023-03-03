import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const IndexPage = lazy( async() => await import('../pages/index'));

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={
        <Suspense fallback={<div>Loading ....</div>}>
          <IndexPage />
        </Suspense>
      } />
    </Routes>
  );
}