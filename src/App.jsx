import { Fragment, useEffect, useState } from "react";
import AddWorker from "./components/Workers/AddWorker";
import WorkerList from "./components/Workers/WorkerList";
function App() {
  const [workers, setWorkers] = useState(
    localStorage.getItem("workers")
      ? JSON.parse(localStorage.getItem("workers"))
      : []
  );   //bu sayede sayfa yenilendiğinde eski itemlar kaybolmaz

  useEffect(() => {
    localStorage.setItem("workers", JSON.stringify(workers));   //veriyi local storage'ta depoladık sağ tıklayıp inceleden application kısmında gözükür
  }, [workers]);
  return (
    <Fragment>
      <h1 className="text-white text-center mt-6 text-3xl">Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers} />
    </Fragment>
  );
}

export default App;
