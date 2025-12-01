import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mt-32 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Page not found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn't exist. Here are some
            helpful links:
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">Go Home</Button>
            </Link>
            <a href="mailto:contact@realdeal.com">
              <Button variant="outline">Contact Support</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
