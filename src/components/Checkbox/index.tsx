import { HtmlHTMLAttributes, useCallback, useRef } from 'react'
import style from './Checkbox.module.css'
import { IoCheckmark } from 'react-icons/io5'

export function Checkbox(props: HtmlHTMLAttributes<HTMLDivElement>):JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOnContainerClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }, [])

  return (
    <div>
      <input type="checkbox" ref={inputRef} className={style.checkbox} {...props} />
      <section onClick={handleOnContainerClick} className={style.container}>
        <IoCheckmark />
      </section>
    </div>
  )
}