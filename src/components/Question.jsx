import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchQuestion } from '../hooks/FetchQuestion'
import { updateAnswer } from '../hooks/helpers'

function Question({ onSelected }) {
    const [selected ,setSelected] = useState(undefined)
    const state = useSelector(state => state)
    const { queus , trace } = state.questions
    const score = state.result.score
    // eslint-disable-next-line
    const [{isLoading, apiData, serverError}] = useFetchQuestion() // const [getdata,setGetData] = useFetchQuestion() , but we destructered and we don't need setGetData
    const dispatch = useDispatch()

    useSelector(state=> console.log(state))

    useEffect(()=>{
        // console.log(` the state ${state}`)
        dispatch(updateAnswer({trace,selected}))
        console.log({trace,selected})
    },[selected])

    const onSelect = (value) => {
        setSelected(value) // this is wrong and caused infinite loop
        // console.log(selected)
        // pushAnswer(selected)
        onSelected(value)
        dispatch(updateAnswer({trace,selected}))
    }
    const question = queus[trace] // we want to set the question from the state and the trace is the indicator to access that array to we know which question to render on screen based on click on next and prv buttons


    if (isLoading) return <h3 className='text-light'>Loading...</h3>
    if (serverError) return <h3 className='text-light'>{serverError || 'Error occured'}</h3>
  return (
    <div className="questions">
      <h2 key={question?.id} className="text-light">
        {question?.question}
      </h2>

      <ul>
        {question?.options.map((q, i) => (
          <li key={i}   
        //   onClick={e=>{onSelect(i)}} 
          >
            <input
              type="radio"
              name="options"
              id={`q${i}-option`}
              value={false}
              onChange={()=>onSelect(i)}
            />
            <label htmlFor={`q${i}-option`} className="text-primary">
              {q}
            </label>
            {/* <div className={`check ${score[trace] == i? 'checked' : "" }`}></div> */}
            <div className={`check`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question