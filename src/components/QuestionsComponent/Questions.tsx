'use client'
import { useState } from 'react';
import "./stylesQuestion.css"
import { IFaq } from '@/src/service/models';


interface IProps {
  questions: IFaq[]
}

export default function Questions({ questions }: IProps) {
  const [selected, setSelected] = useState(null);
  // console.log(questions);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="mx-auto max-w-[1220px] px-[20px] relative xs:max-md:mb-[70px] xs:max-md:mt-[70px] mb-[125px] mt-[250px]">

      <div className="flex xs:flex-col xs:items-start xs:max:md:px-[20px] xs:gap-[20px] md:max-lmg:px-[40px] lmg:flex-row lmg:items-start lmg:gap-[130px]">

        <span className="prevSpan w-[62px] whitespace-nowrap lmg:whitespace-normal">FAQ</span>

        <div className="flex flex-col xs:gap-[30px] lmg:gap-[40px] items-start z-[1]">

          <div className="relative">
            <span className="titleSpan">Частые вопросы</span>
          </div>

          <p className="mainText max-w-[780px] w-[95%] z-[1]">В этом блоке мы собрали самые часто задаваемые вопросы, и ответили на те, которые вы постеснялись спросить по телефону </p>

          <section className="flex max-w-[780px] flex-col relative overflow-x-scroll hideScroll">
            <div className='wrapper'>
              <div className='accordion'>
                {questions?.map((item, idx) => (
                  <div className='item hover:cursor-pointer' key={idx} onClick={() => toggle(idx)}>
                    <div className='title'>
                      <h2 className={`text-[16px]/[20.8px] md:text-[24px]/[28.8px] tracking-[-0.03em] max-w-[90%] font-extrabold not-active-title md:mt-[12px]`}>{item.title}</h2>
                      <span className={`block text-center text-[32px] font-light md:mt-[12px] ${selected === idx ? 'rotate-45' : 'rotate-0'} duration-100`}>+</span>
                    </div>
                    <div className={`font-normal mt-[5px] text-[14px] md:text-[20px] text-[#6C6C6C] leading-[18.2px] tracking-[-0.03em] md:mt-[20px] md:leading-[26px] ${selected === idx ? 'content show' : 'content'}`}>
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>

    </div>

  )
}
