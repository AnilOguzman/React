import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddWorker = (props) => {

  const [error,setError]=useState(); 
  const minimumWage = 5000;
  const nameInputRef=useRef();
  const wageInputRef=useRef();

  const addWorkerHandler = (e) => {
    e.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredWage=wageInputRef.current.value;
    if (nameInputRef.current.value.trim().length === 0  ) {
      setError({
        title:"İsim Alanı Zorunludur!",
        message:"Lütfen bir isim giriniz."
      })
      return;
    }
    if(wageInputRef.current.value.length === 0){
      setError({
        title:"Maaş Alanı Zorunludur!",
        message:"Lütfen maaşınızı giriniz."
      })
      return;
    }
    if (wageInputRef.current.value < minimumWage) {
      setError({
        title:"Maaş Alanı Zorunludur!",
        message:`Lütfen ${minimumWage} değerinden büyük bir maaş değeri giriniz.`
      })
      return;
    }
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
    nameInputRef.current.value="";
    wageInputRef.current.value="";
  };
  const errorHandler = () => {
    setError(null);
  }
  return (
    <Wrapper>
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
            ref={nameInputRef}
          />

          <label htmlFor="wage" className="font-medium">
            Maaş Miktarı
          </label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş Miktarı yazınız"
            id="wage"
            ref={wageInputRef}
          />

          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
      
    </Wrapper>
    //css'i props olarak geçirdik dikkat et
    //butonları component halinde oluşturuyoruz çünkü bir buton var biz buna prop geçirerek primary dashed şekilleri verebiliyoruz 
    //yani aslında tek buton var ve biz buna prop vererek şekillendiriyoruz
  );
};

export default AddWorker;
