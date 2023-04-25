import React, { useState, FormEvent, ChangeEvent } from 'react';
import cn from 'classnames';
import Button from './Button';

export interface IShiftCreatorForm {
  className?: string;
}

const ShiftCreatorForm: React.FC<IShiftCreatorForm> = ({ className }) => {
  const style = {
    container: 'bg-white shadow h-screen p-4',
    form: 'flex flex-col items-start p-3',
    inputItem: 'flex flex-col items-start mb-5 w-full',
    inputLabel: 'text-lg text-gray-600 mb-2',
    inputText: 'border-2 rounded px-2 w-full h-[45px]',
    star: 'text-xl text-npm-blue',
    submit: 'bg-npm-red text-white text-xl rounded-md px-4 py-2 mt-2',
  };

  const [data, setData] = useState({
    name: '',
    logo: '',
    location: '',
    startDate: '',
    startTime: '',
    endTime: '',
    capacity: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: (typeof data)[keyof typeof data] = event.target.value;

    setData({ ...data, [event.target.id]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submit!', data);
  };

  const star = <span className={style.star}>*</span>;

  const inputs = [
    {
      label: 'Company Name',
      id: 'name',
      type: 'text',
    },
    {
      label: 'Company Logo (src)',
      id: 'logo',
      type: 'url',
    },
    {
      label: 'Company location',
      id: 'location',
      type: 'text',
    },
    {
      label: 'Scheduled Start Date',
      id: 'startDate',
      type: 'date',
    },
    {
      label: 'Scheduled Start Time',
      id: 'startTime',
      type: 'time',
    },
    {
      label: 'Scheduled End Time',
      id: 'endTime',
      type: 'time',
    },
    {
      label: 'Capacity',
      id: 'capacity',
      type: 'number',
      min: '0',
    },
  ];

  return (
    <div className={cn(className, style.container)}>
      <form onSubmit={handleSubmit} className={style.form}>
        {inputs.map((input) => {
          return (
            <div className={style.inputItem} key={input.id}>
              <label htmlFor={input.id} className={style.inputLabel}>
                {input.label} {star}
              </label>
              <input required onChange={handleChange} className={style.inputText} {...input} />
            </div>
          );
        })}
        <Button className={style.submit} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};

export default ShiftCreatorForm;
