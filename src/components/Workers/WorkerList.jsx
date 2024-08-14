import Card from "../UI/Card";
const WorkerList = (props) => {
  const { workers, setWorkers } = props;
  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };
  if (workers.length < 1) {
    return;
  }
  return (
    <Card addClass="mt-10">
      <ul>
        <li className="flex justify-between">
          <span className="font-bold">İsim</span>
          <span className="font-bold">Maaş</span>
        </li>
        {workers.map((worker) => (
          <li
            className="flex justify-between cursor-pointer hover:shadow-xl p-2 transition-shadow-xl"
            key={worker.id}
            onClick={() => deleteWorker(worker.id)}
          >
            <span>{worker.name}</span>
            <span className="text-teal-700">{worker.wage}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default WorkerList;
