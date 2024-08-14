import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const [error,setError]=useState(); 
  const minimumWage = 5000;

  const workerNameChangeHandler = (e) => {
    setEnteredWorkerName(e.target.value);
  };
  const wageChangeHandler = (e) => {
    setEnteredWage(e.target.value);
  };
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0  ) {
      setError({
        title:"İsim Alanı Zorunludur!",
        message:"Lütfen bir isim giriniz."
      })
      return;
    }
    if(enteredWage.length === 0){
      setError({
        title:"Maaş Alanı Zorunludur!",
        message:"Lütfen maaşınızı giriniz."
      })
      return;
    }
    if (enteredWage < minimumWage) {
      setError({
        title:"Maaş Alanı Zorunludur!",
        message:`Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`
      })
      return;
    }
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    setEnteredWorkerName("");
    setEnteredWage("");
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <div>
      {error && <ErrorModal onConfirm={errorHandler} error={error} />}
      
      
      <Card addClass="mt-10 ">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name" className="font-medium">
            Çalışan İsmi
          </label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan İsmi yazınız"
            id="name"
            onChange={workerNameChangeHandler}
            value={enteredWorkerName}
          />

          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş Miktarı yazınız"
            id="wage"
            onChange={wageChangeHandler}
            value={enteredWage}
          />

          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
      
    </div>
    //css'i props olarak geçirdik dikkat et
    //butonları component halinde oluşturuyoruz çünkü bir buton var biz buna prop geçirerek primary dashed şekilleri verebiliyoruz 
    //yani aslında tek buton var ve biz buna prop vererek şekillendiriyoruz
  );
};

export default AddWorker;
