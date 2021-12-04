import { useEffect, useState, useRef } from "react";
import { createClassExpression } from "typescript";
import TourList from "../Tour/TourList";
import classes from "./AllTours.module.css";

const AllTours = () => {
  const inputRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [loadedTours, setLoadedTours] = useState([]);
  const [sortedTours, setSortedTours] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const url =
    "https://react-app-81b61-default-rtdb.europe-west1.firebasedatabase.app/tours.json";

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json().then((data) => {
        const members = [];

        for (const mem in data) {
          const member = {
            id: mem,
            ...data[mem],
          };

          members.push(member);
        }

        setIsLoading(false);
        setLoadedTours((prevMembers) => {
          return (prevMembers = members);
        });
      });
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const delHadnler = (id) => {
    const upd = loadedTours.filter((item) => item.id !== id);
    setLoadedTours(upd);
  };

  const sortHadnler = () => {
    const y = loadedTours.sort(function (a, b) {
      if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
    // const f = loadedTours.sort(function (a, b) {
    //     if (a.country > b.country) {
    //       return 1;
    //     }
    //     if (a.country < b.country) {
    //       return -1;
    //     }
    //     // a должно быть равным b
    //     return 0;
    //   });
    console.log(y);
    // console.log(f);
    setSortedTours(y);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(input);
    console.log("clicked");

    if (input === "Date") {
      const byDate = loadedTours.sort(function (b, a) {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      console.log(byDate);
      setSortedTours((prevByDate) => {
        return (prevByDate = byDate);
      });
    }

    if (input === "Country") {
      const byDate = loadedTours.sort(function (b, a) {
        if (a.country > b.country) {
          return 1;
        }
        if (a.country < b.country) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      console.log(byDate);
      setSortedTours((prevByDate) => {
        return (prevByDate = byDate);
      });
    }

    if (input === "Price") {
      const byDate = loadedTours.sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      console.log(byDate);
      setSortedTours((prevByDate) => {
        return (prevByDate = byDate);
      });
    }

    //   const byCountry = loadedTours.map((tour) => {
    //     if (tour.country === "Poland") {
    //       return tour;
    //     }
    //   });
    //   //   setLoadedTours(byCountry)
    //   console.log(byCountry);
    // }

    // ///by price
    // if (input === "by price") {
    //   const byPrice = loadedTours.sort(function (a, b) {
    //     if (a.date > b.date) {
    //       return 1;
    //     }
    //     if (a.date < b.date) {
    //       return -1;
    //     }
    //     // a должно быть равным b
    //     return 0;
    //   });
    //   console.log(byPrice);
    //   setSortedTours((prevCountry) => {
    //     return (prevCountry = byPrice);
    //   });
    // }
  };

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>Error</p>
      </section>
    );
  }

  const handleChanger = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className={classes.main}>
      <h1 className={classes.allTours}>All tours</h1>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <label>
            Sort by:
            <select value={input} onChange={handleChanger}>
              <option>Date</option>
              <option>Country</option>
              <option>Price</option>
            </select>
          </label>
          <button>Go</button>
        </form>
      </div>
      {!sortedTours ? (
        <TourList onDel={delHadnler} tours={sortedTours} />
      ) : (
        <TourList onDel={delHadnler} tours={loadedTours} />
      )}
      <button onClick={sortHadnler}>Sort by date</button>
    </div>
  );
};

export default AllTours;
