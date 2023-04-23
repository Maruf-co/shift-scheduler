import Image from 'next/image';

import ButtonWithModal from '@/components/Button/ButtonWithModal';
import Table from '@/components/Table';

export interface ICard {
  data: {
    logo?: string;

    buttons?: {
      icon: React.ReactNode;
      text: React.ReactNode;
      tooltip: string;
      modal: {
        text: string;
        optionText: string;
      };
    }[];
    cardList: {
      title: string;
      value: React.ReactNode;
    }[];
    table?: {
      data: Object[];
      config: {
        label: string;
        render: Function;
      }[];
      keyFn: Function;
    };
  };
}

const Card: React.FC<ICard> = ({ data }) => {
  const style = {
    wrap: 'bg-white shadow-md',
    imgWrap: 'bg-white flex items-center justify-center w-screen',
    img: 'object-fit',
    buttonsWrap: 'flex',
    button: 'flex flex-col items-center mx-8 my-8',
    dataWrap: 'flex flex-col m-4',
    title: 'text-stone-700 text-xs mb-1',
    organization: 'text-stone-950 font-bold flex mb-4',
    value: 'text-stone-950 flex mb-4',
    bookingsBox: 'flex items-center my-4 ml-4',
    bookingsTitle: 'text-stone-800 text-xs',
    counterBox: 'bg-gray-200 rounded text-sm text-stone-700 font-extralight m-2.5 px-1',
    table: 'm-4',
  };

  const { logo, table, buttons, cardList } = data;

  return (
    <div className={style.wrap}>
      {logo && (
        <div className={style.imgWrap}>
          <Image
            src={logo}
            alt="Organization logo"
            width={600}
            height={300}
            className={style.img}
          />
        </div>
      )}

      {buttons && (
        <div className={style.buttonsWrap}>
          {buttons.map((button) => {
            return (
              <ButtonWithModal
                className={style.button}
                tooltip={button.tooltip}
                modal={button.modal}
              >
                {button.icon}
                {button.text}
              </ButtonWithModal>
            );
          })}
        </div>
      )}

      <div className={style.dataWrap}>
        {cardList.map((dataItem, idx) => {
          return (
            <>
              <span className={style.title}>{dataItem.title}</span>
              <span className={idx === 0 ? style.organization : style.value}>{dataItem.value}</span>
            </>
          );
        })}
      </div>

      {table && (
        <>
          <hr />
          <div>
            <div className={style.bookingsBox}>
              <span className={style.bookingsTitle}>Related Bookings/Shifts</span>
              <div className={style.counterBox}>{table.data.length}</div>
            </div>
            <Table className={style.table} {...table} />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
