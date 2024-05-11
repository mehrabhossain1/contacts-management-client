import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="">
          <h1 className="text-5xl font-bold">
            Hello there! Welcome to our Contacts Management Application
          </h1>
          <p className="py-6">
            Here you can manage your contacts. Add, Edit and Delete your
            contacts.
          </p>
          <Link to="/add-contacts">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
