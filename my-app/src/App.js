import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://zenithar-dev.herokuapp.com/users",
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs",
          },
        }
      );

      console.log("data is: ", JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const barClick = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://zenithar-dev.herokuapp.com/orders",
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGIzOTRkNzA4OWY5MDAxNmRiYzlkMSIsImlhdCI6MTY1MzI5MTM4Mn0.z11A1VUEDgMQFVfVpNuRSeaVEAV0uLmsYoqLPhT-yUs",
          },
        }
      );

      console.log("data is: ", JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div className="btn-group">
      {err && <h2>{err}</h2>}

      <button id="users" onClick={handleClick}>
        USERS Fetch data{" "}
      </button>

      <button id="comesse" onClick={barClick}>
        COMESSE Fetch data{" "}
      </button>

      {isLoading && <h2>Loading...</h2>}

      {data.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.email}</h2>
            <h2>{person.surname}</h2>
            <h2>{person.role}</h2>
            <br />
          </div>
        );
      })}

      {data.map((comesse) => {
        return (
          <div key={comesse.clientId}>
            <h2>{comesse.role}</h2>
            <h2>{comesse.displayName}</h2>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
