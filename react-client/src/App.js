import "./App.css";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState({ hits: [] });

  const fetchData = async () => {
    const result = await axios("http://localhost:5000/hits/");

    console.log(result.data);
    const newarray = result.data;

    newarray.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at);
    });

    console.log(newarray);
    setData(newarray);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Header = () => {
    return (
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-font">HN Feed</h1>
          <h2 className="banner-font">We 3 hacker news!</h2>
          <p className="banner-font2">
            <a
              href="https://www.linkedin.com/in/carlos-rodriguez-78a28638/"
              className="banner-font2"
            >
              Carlos Rodriguez Profile
            </a>
          </p>
          <p className="banner-font2">
            <a href="https://github.com/carloserl" className="banner-font2">
              Github
            </a>
          </p>
        </div>
      </div>
    );
  };

  const deleteHit = async (element) => {
    var newpayload = { ...element, delete_state: "true" };

    const response = await axios.put(
      "http://localhost:5000/hits/" + element.story_id,
      newpayload
    );
    console.log("r", response);
    setData([]);
    fetchData();
  };

  const dateFormat = (element) => {
    var parts1 = element.split("T");
    var parts = parts1[0].split("-");

    var mydate1 = new Date(parts[0], parts[1] - 1, parts[2]);

    var mydate = new Date();

    const stringDate =
      mydate1.getFullYear() +
      "-" +
      (mydate1.getMonth() + 1) +
      "-" +
      mydate1.getDate();

    const stringToday =
      mydate.getFullYear() +
      "-" +
      (mydate.getMonth() + 1) +
      "-" +
      mydate.getDate();

    const stringYesterday =
      mydate.getFullYear() +
      "-" +
      (mydate.getMonth() + 1) +
      "-" +
      (mydate.getDate() - 1);

    if (stringDate === stringToday) {
      var parts3 = parts1[1].split(":");
      var stringAP = " am";
      if (parts3[0] > 12) {
        stringAP = " pm";
        return parts3[0] - 12 + ":" + parts3[1] + stringAP;
      }

      return parts3[0] + ":" + parts3[1] + stringAP;
    } else if (stringDate === stringYesterday) {
      return "Yesterday";
    } else {
      return getMonth(mydate.getMonth() + 1) + " " + mydate1.getDate();
    }
  };

  const getMonth = (month) => {
    switch (month) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sep";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return "No Aplica";
    }
  };

  const Table = () => {
    if (data.length > 0) {
      return (
        <div className="rows-container">
          {data.map((element, key) => {
            if (element.delete_state == "false") {
              return (
                <div className="row-container" key={key}>
                  <div className="rows-hit">
                    <div
                      className="rows-hit-left"
                      onClick={() => window.open(element.story_url, "_blank")}
                    >
                      <h3>{element.story_title} </h3>
                      <h4> - {element.author} -</h4>
                    </div>
                    <div className="rows-hit-right">
                      <h3>{dateFormat(element.created_at)} </h3>
                    </div>
                  </div>
                  <div className="rows-hit-delete">
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => deleteHit(element)}
                    ></i>
                  </div>
                </div>
              );
            }
          })}
        </div>
      );
    } else {
      return (
        <div className="rows-container">
          <div className="rows-hit">
            <h3>No Data</h3>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <Table />
    </>
  );
}

function NotFound() {
  return <div>400</div>;
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
