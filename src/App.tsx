import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <div className="bg-gray-900">
        <MainLayout></MainLayout>
      </div>
    </ProtectedRoute>
  );
}

export default App;
