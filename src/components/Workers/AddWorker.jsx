import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
const AddWorker = () => {
  return (
    //css'i props olarak geçirdik dikkat et
    <Card addClass="mt-10 "> 
      <form className='flex flex-col gap-y-2'>
        <label htmlFor='name' className='font-medium'>Çalışan İsmi</label>
        <input type='text' className='max-w-[40rem] w-full mx-auto border p-2' placeholder='Çalışan İsmi yazınız' id='name'/>
        
        <label htmlFor='wage' className='font-medium'>Maaş Miktarı</label>
        <input type='number' className='max-w-[40rem] w-full mx-auto border p-2' placeholder='Maaş Miktarı yazınız' id='wage'/>
        
        <Button className='mt-2'>Ekle</Button>
        
    </form>
    </Card>
  //butonları component halinde oluşturuyoruz çünkü bir buton var biz buna prop geçirerek primary dashed şekilleri verebiliyoruz
  //yani aslında tek buton var ve biz buna prop vererek şekillendiriyoruz    
  )
}

export default AddWorker